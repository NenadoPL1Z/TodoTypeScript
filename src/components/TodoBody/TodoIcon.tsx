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

const TodoIcon: FC<ITodoIcon> = ({reference, checked, important = false, favorite = false, deleted = false}) => {

    console.log(reference);

    return (
        <>  
            <div className='item__checked item__icon'>
                {checked ? <CheckCircleIcon/> : <RadioButtonUncheckedOutlinedIcon/>}
            </div>
            <div className="item__icon">
                {important ? <NotificationsIcon/> : <NotificationsNoneOutlinedIcon/>}
            </div>
            <div className="item__icon">
                {favorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </div>
            <div className="item__icon">
                {deleted ? <DeleteIcon/> : <DeleteOutlineOutlinedIcon/>}
            </div>
        </>
    )
}

export default TodoIcon;