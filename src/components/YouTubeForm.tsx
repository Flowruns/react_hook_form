import React from 'react';


// Компонент ютуб формы
const YouTubeForm = () => {
    
    // Возвращаем JSX, который содержит структуру компонента формы
    return (
        <div>
            <h1>YouTube форма</h1>

            <form>
                <label htmlFor="username">Имя пользователя</label>
                <input type="text" id="username" name="username"/>

                <label htmlFor="email">Почта</label>
                <input type="email" id="email" name="email"/>

                <label htmlFor="channel">Канал</label>
                <input type="text" id="channel" name="channel"/>

                <button>Отправить</button>
            </form>
        </div>
    );
};

// Экспортируем компонент YouTubeForm
export default YouTubeForm;
