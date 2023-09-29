import cn from 'classnames';
import cls from './Hero.module.scss';
import { Container } from 'app/shared/container';
import photo from 'app/assets/imgs/hero.jpg';

export const Hero = () => {
    return (
        <Container className={cn(cls.Hero)}>
            <div className={cn(cls.inner_container, 'grid')}>
                <div className={cn(cls.circle)}>
                    <img className={cls.img} alt={'hero photo'} src={photo} />
                </div>
                <p className={cls.greeting}>
                    Привет 👋, <br /> Меня зовут{' '}
                    <span className={cls.accent_text}>Георгий Пигарь</span>
                    <br /> Я разрабатываю функциональные <br /> и адаптивные
                    веб-приложения
                </p>
            </div>
        </Container>
    );
};
