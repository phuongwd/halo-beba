import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle, StatusBar } from 'react-native';
import { NavigationSwitchProp, NavigationState } from 'react-navigation';
import { translate } from '../../translations';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { GradientBackground } from '../../components/GradientBackground';
import { RoundedTextInput } from '../../components/RoundedTextInput';
import { RoundedButton, RoundedButtonType } from '../../components/RoundedButton';
import { TextButton, TextButtonSize } from '../../components/TextButton';

export interface Props {
    navigation: NavigationSwitchProp<NavigationState>;
}

/**
 * User can register new account with our server here.
 */
export class RegisterScreen extends React.Component<Props, object> {

    public constructor(props:Props) {
        super(props);
    }

    private gotoLoginScreen() {
        this.props.navigation.navigate('LoginStackNavigator_LoginScreen');
    };

    private createAccount() {
        this.gotoRegisterCreatedScreen();
    }

    private gotoRegisterCreatedScreen() {
        this.props.navigation.navigate('RootModalStackNavigator_RegisterCreatedScreen');
    };

    public render() {
        return (
            <GradientBackground>
                <StatusBar
                    barStyle="light-content"
                />
                <SafeAreaView style={ [styles.container] }>
                    <KeyboardAwareScrollView
                        style={{ borderWidth: 0, borderColor: 'red' }} contentContainerStyle={{ borderWidth: 0, borderColor: 'green', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}
                    >
                        {/* INPUT: name */}
                        <RoundedTextInput
                            label={ translate('fieldLabelName') }
                            icon="account-outline"
                            onChange={() => { }}
                            onFocus={() => {  }}
                            style={{ marginBottom: 15 }}
                        />

                        {/* INPUT: surname */}
                        <RoundedTextInput
                            label={ translate('fieldLabelSurname') }
                            icon="account-outline"
                            onChange={() => { }}
                            onFocus={() => {  }}
                            style={{ marginBottom: 15 }}
                        />

                        {/* INPUT: email */}
                        <RoundedTextInput
                            label={ translate('fieldLabelEmail') }
                            icon="email-outline"
                            onChange={() => { }}
                            onFocus={() => {  }}
                            style={{ marginBottom: 15 }}
                        />

                        {/* INPUT: password */}
                        <RoundedTextInput
                            label={ translate('fieldLabelPassword') }
                            icon="lock-outline"
                            onChange={() => { }}
                            onFocus={() => {  }}
                            style={{ marginBottom: 15 }}
                        />

                        {/* INPUT: repeatPassword */}
                        <RoundedTextInput
                            label={ translate('fieldLabelRepeatPassword') }
                            icon="lock-outline"
                            onChange={() => { }}
                            onFocus={() => {  }}
                            style={{ marginBottom: 15 }}
                        />

                        {/* BUTTON: createAccount */}
                        <RoundedButton
                            text={ translate('createAccount') }
                            type={RoundedButtonType.purple}
                            onPress={() => { this.createAccount() }}
                            style={{ marginTop:15, marginBottom: 25 }}
                        />

                        {/* BUTTON: alreadyHaveAccount */}
                        <TextButton size={TextButtonSize.normal} textStyle={{ color: 'white', textAlign: 'center' }} onPress={() => { this.gotoLoginScreen() }}>
                            { translate('alreadyHaveAccount') }
                        </TextButton>

                        <View style={{height:40}}></View>
                    </KeyboardAwareScrollView>
                </SafeAreaView>
            </GradientBackground>
        );
    }

}

export interface RegisterScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<RegisterScreenStyles>({
    container: {
        flex: 1,
    },
});
