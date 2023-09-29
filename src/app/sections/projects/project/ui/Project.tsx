import cls from './Project.module.scss';
import GitLogo from 'app/assets/icons/github.svg';
import { projectData } from 'app/sections/projects/data';

interface ProjectProps {
    project: projectData;
}

export const Project = ({ project }: ProjectProps) => {
    return (
        <li className={cls.Project}>
            <div className={cls.img}>
                <img src={project.img} alt={project.name} />
            </div>
            <div className={cls.card}>
                <h3 className={cls.name}>{project.name}</h3>
                <div className={cls.description}>
                    <p>{project.description}</p>
                </div>
                <p className={cls.stack}>
                    <span className={cls.span}>Стек: </span>
                    {project.stack}
                </p>
                <div className={cls.links}>
                    <a href={project.link} className={cls.link}>
                        Подробнее {'>'}
                    </a>
                    <a
                        href={project.githubLink}
                        target='_blank'
                        className={cls.link}
                        rel='noreferrer'
                    >
                        <GitLogo />
                    </a>
                </div>
            </div>
        </li>
    );
};
