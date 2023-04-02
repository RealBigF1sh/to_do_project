import React from "react";

const ToDoItem = ({todo, deleteToDo}) => {
    return (
        <tr>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.description}
            </td>
            <td>
                {todo.creator}
            </td>
            <td>
                {todo.updated_at}
            </td>
            <td>
                <button onClick={()=>deleteToDo(todo.id)} type='button'>Delete</button>
            </td>
        </tr>

    )
}

const ToDoList = ({todos}) => {
    return(
    <table>
        <th>
            Project
        </th>
          <th>
            Description
        </th>
          <th>
            Creator
        </th>
          <th>
            Updated At
        </th>
        {todos.map((todo) => <ToDoItem todo={todo}/>)}
    </table>
    )
}

export default ToDoList