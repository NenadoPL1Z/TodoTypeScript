import React, { FC } from 'react';
import { useRef } from 'react';
import { ITodoItem } from '../../types/types';
import TodoIcon from './TodoIcon';



const TodoItem: FC<ITodoItem> = ({id, title, important = false, favorite = false, checked = false, deleted = false}) => {
    const ref = useRef<HTMLLIElement>(null);
    const date = new Date();

    // console.log(ref.current)

    return (
        <li ref={ref} id={id + ''} className="item">
            <div className="item__text">
                <h2 className="item__title">{title}</h2>
                <div className="item__date">{`${date.getDate()}.${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}.${date.getFullYear()}`}</div>
            </div>
            <div className="item__icons">
                <TodoIcon reference={ref.current} checked={checked} important={important} favorite={favorite} deleted={deleted}/>
            </div>
        </li>
    );
}

export default TodoItem;