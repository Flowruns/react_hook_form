import React from 'react';
import logo from './logo.svg';
import './App.css';
import YouTubeForm from "./components/YouTubeForm";


// Приложение - демо 
function App() {

    // Возвращаем JSX, который содержит структуру страницы приложения
    return (
        <div>
            <YouTubeForm/>
        </div>
    );
}

// Экспортируем приложение - демо App
export default App;
