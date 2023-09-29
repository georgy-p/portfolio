import cn from 'classnames';
import cls from './Projects.module.scss';
import { Container } from 'app/shared/container';
import { data } from 'app/sections/projects/data';
import { Project } from 'app/sections/projects/project/ui/Project';

export const Projects = () => {
    return (
        <Container className={cn(cls.Projects)}>
            <h2 className={'title'}>Проекты</h2>
            <ul className={cn(cls.list, 'list-reset', 'grid')}>
                {data.map((project) => (
                    <Project key={project.name} project={project} />
                ))}
            </ul>
        </Container>
    );
};
