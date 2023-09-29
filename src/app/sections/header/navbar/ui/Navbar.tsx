import cls from './Navbar.module.scss';

const navLinks = {
    projects: 'Проекты',
    about: 'Обо мне',
    contacts: 'Контакты',
};

const handleClick = (id: string): void => {
    alert(id);
};
export const Navbar = () => {
    return (
        <div className={cls.list}>
            <ul className={cls.Navbar}>
                {Object.entries(navLinks).map(([link, name]) => (
                    <li key={link}>
                        <a
                            className={cls.link}
                            href={`/${link}`}
                            onClick={() => {
                                handleClick(link);
                            }}
                        >
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
