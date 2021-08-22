import { TextField } from '@material-ui/core';
import React, { FC } from 'react';
import TodoFilter from './TodoFilter';

const TodoHeader: FC = () => {
    return (
        <header className="header container">
            <div className="header__text-box">
                <h1 className='header__titel'>Todo TypeScript + React</h1>
                <h5 className='header__subtitel'>create Rodion Pyatigorskiy</h5>
            </div>
            <div className="header__search">
                <TextField className="header__input" label='Search' variant='filled'/>
                <div className="header__filter">
                    <TodoFilter/>
                </div>
            </div>
        </header>
    )
}

export default TodoHeader;