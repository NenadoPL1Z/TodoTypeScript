import React, { FC } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';

const TodoFooter: FC = () => {
    return (
        <footer className='footer container'>
            <div className='footer__content'>
                <div className='footer__icon'>
                    <a href='https://github.com/NenadoPL1Z' target='_blank' ><GitHubIcon className='footer__git'/></a>
                </div>
                <div className='footer__icon'>
                    <a href=''><TelegramIcon className='footer__telegramm'/></a>
                </div>
            </div>
        </footer>
    )
}

export default TodoFooter;