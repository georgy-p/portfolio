import cn from 'classnames';
import cls from './Footer.module.scss';
import { Container } from 'app/shared/container';
import { Navbar } from 'app/sections/header/navbar';

export const Footer = () => {
    return (
        <Container className={cls.Footer}>
            <Navbar />
            <a href={'mailto:pigargeorge@gmail.com'} className={cn(cls.mail)}>
                pigargeorge@gmail.com
            </a>
            <p className={cls.copyright}>
                ©Development by{' '}
                <span className={'gradient_text'}>Georgy Pigar</span>
            </p>
        </Container>
    );
};
