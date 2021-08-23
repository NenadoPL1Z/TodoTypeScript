import React, { FC } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { ITodoIcon } from '../../types/types';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTodoContext } from '../context/InfoContext';

const TodoIcon: FC<ITodoIcon> = ({id, checked, important = false, favorite = false, deleted = false}) => {

    const [stateImportant, setStateImportant] = useState(important);
    const [stateFavoritem, setStateFavorite] = useState(favorite);
    const [stateDeleted, setStateDeleted] = useState(deleted);
    const [stateChecked, setStateChecked] = useState(checked);

    const {todo, onChange} = useTodoContext();


    // setState вторым аргументом
    const handleChange = (e: React.MouseEvent, change: boolean, onChange: (value: boolean) => void, name: string) => {
        onChange(!change);
        const newArr = todo;

        newArr?.map(item => {
            if (item.id == id) {
                if (name == 'checked') {
                    item.checked = !change
                }
                if (name == 'important') {
                    item.important = !change
                }
                if (name == 'favorite') {
                    item.favorite = !change
                }
                if (name == 'delete') {
                    item.deleted = !change
                }
            }
        })

        localStorage.setItem('todo', JSON.stringify(newArr));
    }


    return (
        <>  
            <div className='item__checked item__icon' onClick={(e) => handleChange(e, stateChecked, setStateChecked, 'checked')}>
                {stateChecked ? <CheckCircleIcon/> : <RadioButtonUncheckedOutlinedIcon/>}
            </div>
            <div className="item__icon" onClick={(e) => handleChange(e, stateImportant, setStateImportant, 'important')}>
                {stateImportant ? <NotificationsIcon/> : <NotificationsNoneOutlinedIcon/>}
            </div>
            <div className="item__icon" onClick={(e) => handleChange(e, stateFavoritem, setStateFavorite, 'favorite')}>
                {stateFavoritem ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </div>
            <div className="item__icon" onClick={(e) => handleChange(e, stateDeleted, setStateDeleted, 'delete')}>
                {stateDeleted ? <DeleteIcon/> : <DeleteOutlineOutlinedIcon/>}
            </div>
        </>
    )
}

export default TodoIcon;