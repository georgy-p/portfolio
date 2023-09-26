import cls from './Header.module.scss';
export const Header: React.FC = () => {
    const handleClick = (id: string): void => {
        alert(id);
    };

    return (
        <header className={cls.Header}>
            <ul className={cls.list}>
                <li className={cls.item}>
                    <button
                        onClick={() => {
                            handleClick('home');
                        }}
                    >
                        Главная
                    </button>
                </li>
                <li className={cls.item}>
                    <button
                        onClick={() => {
                            handleClick('about');
                        }}
                    >
                        Обо мне
                    </button>
                </li>
                <li className={cls.item}>
                    <button
                        onClick={() => {
                            handleClick('stack');
                        }}
                    >
                        Стэк
                    </button>
                </li>
                <li className={cls.item}>
                    <button
                        onClick={() => {
                            handleClick('projects');
                        }}
                    >
                        Проекты
                    </button>
                </li>
                <li className={cls.item}>
                    <button
                        onClick={() => {
                            handleClick('contacts');
                        }}
                    >
                        Контакты
                    </button>
                </li>
            </ul>
        </header>
    );
};
