import React, { FC } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { ITodoItem } from '../../types/types';
import TodoIcon from './TodoIcon';



const TodoItem: FC<ITodoItem> = ({id, title, important = false, favorite = false, checked = false, deleted = false}) => {
    // const date = new Date();

    return (
        <li id={id + ''} className="item">
            <div className="item__text">
                <h2 className="item__title">{title}</h2>
                {/* <div className="item__date">{`${date.getDate()}.${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}.${date.getFullYear()}`}</div> */}
            </div>
            <div className="item__icons">
                <TodoIcon id={id} checked={checked} important={important} favorite={favorite} deleted={deleted}/>
            </div>
        </li>
    );
}

export default TodoItem;