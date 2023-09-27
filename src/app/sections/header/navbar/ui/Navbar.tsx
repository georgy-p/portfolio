import cls from './Navbar.module.scss';

const navLinks = {
    home: 'Главная',
    about: 'Обо мне',
    contacts: 'Контакты',
};

const handleClick = (id: string): void => {
    alert(id);
};
export const Navbar = () => {
    return (
        <ul className={cls.Navbar}>
            {Object.entries(navLinks).map(([link, name]) => (
                <li key={link} className={cls.item}>
                    <button
                        onClick={() => {
                            handleClick(link);
                        }}
                    >
                        {name}
                    </button>
                </li>
            ))}
        </ul>
    );
};
