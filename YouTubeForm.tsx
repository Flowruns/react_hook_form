import React from 'react';
import {useForm} from "react-hook-form";


// Компонент ютуб формы
export const YouTubeForm = () => {
    
    // Используем хук из библиотеки  react-hook-form
    const form = useForm()
    
    // Регистрируем элемент управления формы с помощью хука useForm
    const {register} = form
   
    // Возвращаем JSX, который содержит структуру компонента формы
    return (
        <div>
            <h1>YouTube форма</h1>

            <form>
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
        </div>
    );
};

// Экспортируем компонент YouTubeForm
export default YouTubeForm;
