const apiUrlDevelop = 'http://ecaroparentingappt8q2psucpz.devcloud.acquia-sites.com/api';
const apiUrlProduction = 'http://ecaroparentingapppi3xep5h4v.devcloud.acquia-sites.com/api';

export const appConfig = {
    // LOCALIZE
    defaultLanguage: 'en',
    defaultCountry: 'US',

    // API
    apiUrl: apiUrlProduction,
    apiUsername: 'access_content',
    apiPassword: 'xALRY5Gf2Kn80ZUMHEbd',
    apiTimeout: 15000,
    apiNumberOfItems: 50,
    showPublishedContent: 0,

    // DEVELOPMENT
    showLog: true,
    deleteRealmFilesBeforeOpen: false,
};