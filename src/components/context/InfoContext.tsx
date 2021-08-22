import React, { useContext, createContext, FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { IContext, ITodoItem } from '../../types/types';
import { ITodoContext } from '../../types/types';
import { ITodo } from '../../types/types';

const TodoContext = createContext<ITodoContext>({});

export const useTodoContext = () => {
  return useContext(TodoContext);
}

const Todo: FC<IContext> = ({children}) => {
    const [todo, setTodo] = useState<ITodoItem[]>([]);
    const [message, setMessage] = useState<boolean>(true)

    useEffect(() => {
        if (localStorage.getItem('todo')) {
            const storageTodo = localStorage.getItem('todo');
            if (storageTodo) {
                setTodo(JSON.parse(storageTodo));
                setMessage(false);
            }
        }
    }, [])

    function handleTodo(todo : string) {
        setMessage(false);
        const prevArr = localStorage.getItem('todo');
        const newPost = JSON.parse(todo);
        localStorage.setItem('todo', JSON.stringify([newPost]));
        if (prevArr) {
          const newArr = JSON.parse(prevArr)
          newArr.unshift(newPost);
          localStorage.setItem('todo', JSON.stringify(newArr));
          setTodo(newArr);
          return;
        }
        setTodo([newPost]);
    }

    return (
        <TodoContext.Provider value={{todo: todo, message: message, onChange: handleTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default Todo;



//  const testArr = [
//         {id: 1, title: 'Todo-1', important: false, favorite: false, completed: false, delete: false},
//         {id: 2, title: 'Todo-2', important: false, favorite: false, completed: false, delete: false},
//         {id: 3, title: 'Todo-3', important: false, favorite: false, completed: false, delete: false}
// ]

