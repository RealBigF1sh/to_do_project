import React from "react";
import { Link } from "react-router-dom";

const MainMenu = ({menu}) => {
    return(
        <ul>
            <li><a href="/users">Все пользователи</a></li>
            <li><a href="/projects">Проекты</a></li>
            <li><a href="/todos">To Do</a></li>
        </ul>
    )
}

export default MainMenu