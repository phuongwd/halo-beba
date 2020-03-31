import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle, ScrollView } from 'react-native';
import { NavigationScreenConfigProps } from 'react-navigation';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { themes } from '../../themes/themes';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';
import { translate } from '../../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { IconButton } from 'react-native-paper';
import { ProfileIcon } from "../../components/ProfileIcon";
import { SearchInput, SearchInputSize } from "../../components/SearchInput";
import { DrawerActions } from 'react-navigation-drawer';
import { ArticlesSection } from './ArticlesSection';

export interface HomeScreenParams {
    showSearchInput?: boolean;
}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, HomeScreenParams>;
}

/**
 * Shows several ArticlesSection.
 */
export class HomeScreen extends React.Component<Props, object> {

    public constructor(props:Props) {
        super(props);
        this.setDefaultScreenParams();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: HomeScreenParams = {
            showSearchInput: false,
        };

        if (this.props.navigation.state.params) {
            this.props.navigation.state.params = Object.assign({}, defaultScreenParams, this.props.navigation.state.params);
        } else {
            this.props.navigation.state.params = defaultScreenParams;
        }
    }

    public render() {
        const screenParams = this.props.navigation.state.params!;

        return (
            <ThemeConsumer>
            {(themeContext:ThemeContextValue) => (
                <ScrollView style={{backgroundColor:themeContext.theme.screenContainer?.backgroundColor}} contentContainerStyle={ [styles.container, {padding:themeContext.theme.screenContainer?.padding}] }>
                    <ArticlesSection />
                </ScrollView>
            )}
            </ThemeConsumer>
        );
    }

}

export interface HomeScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<HomeScreenStyles>({
    container: {
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'stretch',
    },
});
