import React from 'react';

const TodoItem = () => {
    return (
        <li className="todo-item">
            <span>
                <input type="checkbox" />
                <span>Eat</span>
            </span>
            <p>...</p>
        </li>
    );
}
export default TodoItem;