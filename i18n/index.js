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
    },
    ru: {}
};

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});


export default i18n;
