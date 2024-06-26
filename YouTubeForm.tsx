﻿import React from 'react';
import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";


// Задаем типы данных для полей
type FormValues = {
    
    // Имя пользователя
    userName: string,
    
    // Почта
    email: string,
    
    // Канал
    channel: string
}

// Компонент ютуб формы
export const YouTubeForm = () => {
    
    // Используем хук из библиотеки  react-hook-form
    const form = useForm<FormValues>()
    
    // Регистрируем элемент управления формы с помощью хука useForm
    const {register, control, handleSubmit, formState} = form
    
    // Создаем объект ошибок
    const {errors} = formState
    
    // Функция, которая вызывается при нажатии кнопки "ОтправитЬ"
    const onSubmit = (data: FormValues) => {
        console.log('Форма отправлена', data)
    }
   
    // Возвращаем JSX, который содержит структуру компонента формы
    return (
        <div>
            <h1>YouTube форма</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='form-control'>
                <label htmlFor="username">Имя пользователя</label>
                <input
                    type="text"
                    id="username"
                    {...register("userName", {
                        required: {
                            value: true,
                            message: "Необходимо ввести имя пользователя"
                        }
                    })}
                />
                <p className='error'>{errors.userName?.message}</p>
                </div>
                <div className='form-control'>
                <label htmlFor="email">Почта</label>
                <input
                    type="email"
                    id="email"
                    {...register("email", {
                        pattern: {
                            value:
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Неверный формат электронной почты",
                        },
                        validate: {
                            notAdmin: (fieldValue) => {
                                return (
                                    fieldValue !== "admin@example.com" || "Введите другой адрес электронной почты"
                                )
                            },
                            notBlackListed: (fieldValue) => {
                                return (
                                    !fieldValue.endsWith("baddomain.com") || "Этот домен не поддерживается"
                                )
                            }
                        }
                    })}
                />
                <p className='error'>{errors.email?.message}</p>
                </div>
                <div className='form-control'>
                <label htmlFor="channel">Канал</label>
                <input
                    type="text"
                    id="channel"
                    {...register("channel",{ required: {
                            value: true,
                            message: "Необходимо ввести канал"
                        }})}
                />
                <p className='error'>{errors.channel?.message}</p>
                </div>
                <button>Отправить</button>
            </form>
            <DevTool control={control}/>
        </div>
    );
};

// Экспортируем компонент YouTubeForm
export default YouTubeForm;
