import cn from 'classnames';
import cls from './Hero.module.scss';
import { Container } from 'app/shared/container';
import photo from 'app/assets/img/hero.jpg';

export const Hero = () => {
    return (
        <Container className={cn(cls.Hero, 'grid')}>
            <p className={cls.greeting}>
                Привет 👋, <br /> Меня зовут Георгий Пигарь
                <br /> Разрабатываю веб-приложения
            </p>
            <div className={cls.circle}>
                <img className={cls.img} alt={'hero photo'} src={photo} />
            </div>
        </Container>
    );
};
