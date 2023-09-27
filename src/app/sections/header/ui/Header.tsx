import cls from './Header.module.scss';
import { Container } from 'app/shared/container';
import { Navbar } from 'app/sections/header/navbar';
import Github from 'app/assets/icons/github.svg';
import Telegram from 'app/assets/icons/telegram.svg';
import Linkedin from 'app/assets/icons/linkedin.svg';
import cn from 'classnames';

export const Header: React.FC = () => {
    return (
        <header className={cls.Header}>
            <Container
                className={cn('flex', 'row', 'flex-end', 'align-center')}
            >
                <Navbar />
                <div className={cls.icons}>
                    <Github />
                    <Telegram />
                    <Linkedin />
                </div>
            </Container>
        </header>
    );
};
