import { ThemeStructure } from "../ThemeStructure";

type ThemeVariables = typeof ThemeStructure.prototype.variables;

export const variables: ThemeVariables = {
    colors: {
        primary: '#222831',
        primaryText: '#dadfe1',
        secondary: '#29a19c',
        secondaryText: '#fefefe',

        background: '#F7F8FA',
        surface: '#ffffff',
        surfaceText: '#2e343b',
        backdrop: 'rgba(34,40,49,0.6)',

        switchColor: '#A940BE',
        checkboxColor: '#A940BE',

        headerBackground: '#F8F8F8',
        headerBackButton: '#AA40BF',
        headerIcon: 'black',
        headerTitle: '#262626',
    }
};