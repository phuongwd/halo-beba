import React from 'react';
import { View, SafeAreaView, Text, Button, ScrollView, ViewStyle, StyleSheet } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../themes/ThemeContext';
import { translate } from '../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Typography, TypographyType } from '../components/Typography';
import { TextButton, TextButtonColor } from '../components/TextButton';

export interface AboutScreenParams {
    showSearchInput?: boolean;
}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState>;
}

/**
 * Describes who created the application.
 */
export class AboutScreen extends React.Component<Props, object> {

    public constructor(props:Props) {
        super(props);
        this.setDefaultScreenParams();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: AboutScreenParams = {
            showSearchInput: false,
        };

        if (this.props.navigation.state.params) {
            this.props.navigation.state.params = Object.assign({}, defaultScreenParams, this.props.navigation.state.params);
        } else {
            this.props.navigation.state.params = defaultScreenParams;
        }
    }

    private gotoBack() {
        this.props.navigation.goBack();
    }

    public render() {
        return (
            <ThemeConsumer>
            {(themeContext:ThemeContextValue) => (
                <ScrollView
                    style={{backgroundColor:themeContext.theme.screenContainer?.backgroundColor}}
                    contentContainerStyle={ [styles.container] }
                >
                    <View style={{alignItems:'flex-start', padding:themeContext.theme.screenContainer?.padding}}>
                        {/* GO BACK */}
                        <TextButton style={{padding:0}} icon="chevron-left" iconStyle={{color:'#AA40BF'}} textStyle={{fontSize:scale(16)}} color={TextButtonColor.purple} onPress={ () => {this.gotoBack()} }>
                            {translate('buttonBack')}
                        </TextButton>

                        <View style={{height:scale(15)}} />

                        {/* TITLE */}
                        <Typography type={TypographyType.headingPrimary}>
                            { translate('aboutUs') }
                        </Typography>
                    </View>
                </ScrollView>
            )}
            </ThemeConsumer>
        );
    }

}

export interface AboutScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<AboutScreenStyles>({
    container: {
        // flex: 1,
    },
});
