import chat from 'app/assets/imgs/chat.png';
import rss from 'app/assets/imgs/rss.png';
import gendiff from 'app/assets/imgs/gendiff.png';

export interface projectData {
    name: string;
    img: any;
    description: string;
    stack: string;
    link: string;
    githubLink: string;
}

export const data: projectData[] = [
    {
        name: 'Онлайн чат',
        img: chat,
        description:
            'SPA-приложение, похожее на упрощенную ' +
            'версию мессенджера Slack. Есть форма регистрации. ' +
            'Каналы можно создавать, переименовывать и удалять c ' +
            'помощью модальных окон.',
        stack: 'React, Redux Toolkit, Web-sockets',
        link: '/projects/chat',
        githubLink: 'https://github.com/georgy-p/frontend-project-12',
    },
    {
        name: 'RSS-агрегатор',
        img: rss,
        description:
            'Онлайн-сервис для объединения RSS-потоков. ' +
            'Позволяет добавить неограниченное количество RSS-лент. ' +
            'Сам обновляет и добавляет новые записи в общий поток.',
        stack: 'JavaScript, Bootstrap, Axios, i19next',
        link: '/projects/rss-aggregator',
        githubLink: 'https://github.com/georgy-p/RSS-aggregator',
    },
    {
        name: 'Вычислитель отличий',
        img: gendiff,
        description:
            'CLI-Утилита для поиска отличий в конфигурационных файлах ' +
            'формата .json, .yaml и .yml. Работает в терминале с применением ' +
            'Node.js. Для взаимодейтсвия с пользователем ' +
            'используется Commander.js.',
        stack: 'Node.js, Jest, Commander.js',
        link: '/projects/gendiff',
        githubLink: 'https://github.com/georgy-p/gendiff',
    },
];
