import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle, ScrollView } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';
import { translate } from '../../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Typography, TypographyType } from '../../components/Typography';
import { TextButton, TextButtonColor } from '../../components/TextButton';
import { RoundedTextArea } from '../../components/RoundedTextArea';

export interface AppFeedbackScreenParams {

}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, AppFeedbackScreenParams>;
}

export interface State {

}

export class AppFeedbackScreen extends React.Component<Props, State> {

    public constructor(props:Props) {
        super(props);

        this.setDefaultScreenParams();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: AppFeedbackScreenParams = {
            
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
        const screenParams = this.props.navigation.state.params!;

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

                        <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingNormal}} />

                        {/* TITLE */}
                        <Typography type={TypographyType.headingSecondary}>
                            { translate('settingsTitleNotifications') }
                        </Typography>

                        <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingNormal}} />
                    </View>
                </ScrollView>
            )}
            </ThemeConsumer>
        );
    }

}

export interface AppFeedbackScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<AppFeedbackScreenStyles>({
    container: {
        flex: 1,
    },
});
