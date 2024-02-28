import i18n from "i18next";
import Backend from 'i18next-http-backend';
import {initReactI18next } from "react-i18next";

const i18config = i18n
    .use(Backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
    });

export default i18config;