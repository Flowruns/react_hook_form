import React from 'react';
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
    const {register, control, handleSubmit} = form
    
    // Функция, которая вызывается при нажатии кнопки "ОтправитЬ"
    const onSubmit = (data: FormValues) => {
        console.log('Форма отправлена', data)
    }
   
    // Возвращаем JSX, который содержит структуру компонента формы
    return (
        <div>
            <h1>YouTube форма</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="username">Имя пользователя</label>
                <input 
                    type="text" 
                    id="username"
                    {...register("userName", {required: {
                        value: true,
                        message: "Необходимо ввести имя пользователя"
                    }})}
                />

                <label htmlFor="email">Почта</label>
                <input 
                    type="email" 
                    id="email"
                    {...register("email", {pattern: {
                            value:
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Неверный формат электронной почты",
                        }})}
                />

                <label htmlFor="channel">Канал</label>
                <input 
                    type="text" 
                    id="channel"
                    {...register("channel")}
                />

                <button>Отправить</button>
            </form>
            <DevTool control={control}/>
        </div>
    );
};

// Экспортируем компонент YouTubeForm
export default YouTubeForm;
