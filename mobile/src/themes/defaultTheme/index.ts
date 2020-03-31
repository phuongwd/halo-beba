import { Theme } from "../Theme";
import { variables } from "./variables";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

/**
 * Default theme.
 */
export const defaultTheme = new Theme({
    info: {
        title: 'Default',
        name: 'defaultTheme',
        dark: false,
    },

    theme: {
        variables: variables,

        screenContainer: {
            padding: scale(15),
            backgroundColor: variables?.colors?.background
        },

        contentContainer: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            padding: 15,
        },

        headerTitle: {
            color: variables?.colors?.headerTitle,
            fontFamily: 'SFUIDisplay-Bold',
            fontSize: moderateScale(22),
        }
    }
});