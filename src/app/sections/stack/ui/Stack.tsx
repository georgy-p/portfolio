import cn from 'classnames';
import cls from './Stack.module.scss';
import { Container } from 'app/shared/container';
import { technologies } from 'app/sections/stack/technologies/technologis';

export const Stack = () => {
    // @ts-ignore
    return (
        <Container className={cn(cls.Stack)}>
            <h2 className={'title'}>Мой стек технологий</h2>
            <ul className={cn(cls.list, 'list-reset', 'flex')}>
                {Object.entries(technologies).map(([name, icon]) => (
                    <li key={name} className={cls.item}>
                        {icon}
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </Container>
    );
};
