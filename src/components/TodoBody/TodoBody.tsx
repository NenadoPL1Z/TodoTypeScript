import React, { FC } from 'react';
import { useState } from 'react';
import { useTodoContext } from '../context/InfoContext';
import IconList from '../svg/list';
import TodoItem from './TodoItem';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const TodoBody: FC = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const [important, setImportant] = useState<boolean>(false);
    const [favorite, setFavorite] = useState<boolean>(false);


    const {todo, message, onChange} = useTodoContext();


    function handleChange(e: React.ChangeEvent<HTMLInputElement> ) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e : React.MouseEvent) {
        e.preventDefault();
        if (onChange) {
            onChange(JSON.stringify({id: todo?.length, title: inputValue, important: important, favorite: favorite}))
        }
    }

    return (
        <main className='main container'>
            <div className='main__input-box'>
                <div className='main__send-box'>
                    <input value={inputValue} onChange={handleChange} className="main__input" placeholder='Add Post'/>
                    {inputValue.length > 0 ? 
                    <button onClick={handleSubmit} type='submit' className='main__button'>send</button> : null}
                </div>
                {inputValue.length > 0 ? (
                    <div className='main__search-icon'>
                        <div className="main__icon" onClick={() => setImportant(!important)} >
                            {important ? <NotificationsIcon/> : <NotificationsNoneOutlinedIcon/>}
                        </div>
                        <div className="main__icon" onClick={() => setFavorite(!favorite)} >
                            {favorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                        </div>
                    </div>
                ): null}
            </div>
            {todo ? (
                <ul style={{maxHeight: window.innerHeight - 420 + 'px', marginTop: inputValue.length ? '30px' : '0'}} className='list'>
                    {todo.map(item => {
                        return <TodoItem key={item.id} id={item.id} title={item.title} checked={item.checked} important={item.important} favorite={item.favorite} deleted={item.deleted}  />;
                    })}
                </ul>
            ) : null}
            {message ? (
            <div className='list__empty'>
                <IconList/>
                <h3 className='list__empty-title'>List empty</h3>
            </div>
            ) : null}
        </main>
    )
}

export default TodoBody;