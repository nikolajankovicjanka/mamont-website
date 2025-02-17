import { createI18n } from 'vue-i18n';
import { nextTick } from 'vue';

import sr from '@/translations/sr';
import en from '@/translations/en';
import de from '@/translations/de';

const messages = {
    sr,
    en,
    de,
};

const i18n = createI18n({
    legacy: false, // Ovdje postavi legacy na false da koristiš Composition API
    locale: 'sr',  // Podrazumevani jezik
    fallbackLocale: 'en', // Rezervni jezik
    messages, // Dodaj prevode
});

// Funkcija za dinamičko učitavanje prevoda
export async function loadLocaleMessages(locale) {
    const messages = await import(`@/translations/${locale}.js`); // Ažurirana putanja
    i18n.global.setLocaleMessage(locale, messages.default);
    return nextTick(); // Sačekaj da se DOM ažurira
}

export default i18n;