import cls from './Header.module.scss';
import { Container } from 'app/shared/container';
import { Navbar } from 'app/sections/header/navbar';
import Github from 'app/assets/icons/github.svg';
import Telegram from 'app/assets/icons/telegram.svg';
import Linkedin from 'app/assets/icons/linkedin.svg';
import cn from 'classnames';
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className={cls.Header}>
            <Container
                className={cn('flex', 'row', 'flex-end', 'align-center')}
            >
                <Navbar />
                <div className={cls.icons}>
                    <a
                        href='https://github.com/georgy-p'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Github className={cls.icon} />
                    </a>
                    <a
                        href='https://t.me/pgeorgy'
                        target='_blank'
                        rel='noreferrer'
                    >
                        {' '}
                        <Telegram className={cls.icon} />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/georgy-pigar/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Linkedin className={cls.icon} />
                    </a>
                </div>
            </Container>
        </header>
    );
};
