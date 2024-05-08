import React from 'react';
import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";

type FormValues = {
    userName: string,
    email: string,
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Имя пользователя</label>
                <input 
                    type="text" 
                    id="username"
                    {...register("userName")}
                />

                <label htmlFor="email">Почта</label>
                <input 
                    type="email" 
                    id="email"
                    {...register("email")}
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
