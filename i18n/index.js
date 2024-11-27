import {createI18n} from 'vue-i18n';

const messages = {
    en: {
        'main description': 'Organize your Spotify playlists with ease',
        'footer created by': 'Created by Cxpycat',
        'footer contact': 'Contact: nikoto07@gmail.com',
        'authorization': 'Authorization in progress...',
        'failed to get user data': 'Failed to get user data',
        'loading, please wait': 'Loading, please wait',
        'your playlists': 'Your playlists',
        'tracks': 'Tracks',
        'unauthorized': 'An error has occurred, please log in again',
        'sort': 'Sort playlist',
        'date Added (Recent First)': 'Date Added (Recent First)',
        'date Added (Oldest First)': 'Date Added (Oldest First)',
        'release Date (Newest First)': 'Release Date (Newest First)',
        'release Date (Oldest First)': 'Release Date (Oldest First)',
        'artist Alphabetical (A-Z)': 'Artist Alphabetical (A-Z)',
        'artist Alphabetical (Z-A)': 'Artist Alphabetical (Z-A)',
        'track Alphabetical (A-Z)': 'Track Alphabetical (A-Z)',
        'track Alphabetical (Z-A)': 'Track Alphabetical (Z-A)',
        'popularity (High-Low)': 'Popularity (High-Low)',
        'popularity (Low-High)': 'Popularity (Low-High)',
    },
    ru: {
        'main description': 'Организуйте свои плейлисты на Spotify с легкостью',
        'footer created by': 'Создано Cxpycat',
        'footer contact': 'Контакт: nikoto07@gmail.com',
        'authorization': 'Авторизация в процессе...',
        'failed to get user data': 'Не удалось получить данные пользователя',
        'loading, please wait': 'Загрузка, пожалуйста, подождите',
        'your playlists': 'Ваши плейлисты',
        'tracks': 'Треки',
        'unauthorized': 'Произошла ошибка, пожалуйста, войдите снова',
        'sort': 'Отсортировать плейлист',
        'date Added (Recent First)': 'Дата добавления (сначала новые)',
        'date Added (Oldest First)': 'Дата добавления (сначала старые)',
        'release Date (Newest First)': 'Дата выпуска (сначала новые)',
        'release Date (Oldest First)': 'Дата выпуска (сначала старые)',
        'artist Alphabetical (A-Z)': 'Артист по алфавиту (A-Z)',
        'artist Alphabetical (Z-A)': 'Артист по алфавиту (Z-A)',
        'track Alphabetical (A-Z)': 'Трек по алфавиту (A-Z)',
        'track Alphabetical (Z-A)': 'Трек по алфавиту (Z-A)',
        'popularity (High-Low)': 'Популярность (от высокой к низкой)',
        'popularity (Low-High)': 'Популярность (от низкой к высокой)',
    }

};

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    messages,
});


export default i18n;
