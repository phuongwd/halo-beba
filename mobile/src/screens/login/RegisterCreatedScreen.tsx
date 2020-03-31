import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ViewStyle, View, Image } from 'react-native';
import { NavigationSwitchProp, NavigationState } from 'react-navigation';
import { Typography, TypographyType } from '../../components/Typography';
import { translate } from '../../translations/translate';
import { GradientBackground } from '../../components/GradientBackground';
import { RoundedButton, RoundedButtonType } from '../../components/RoundedButton';
import { TextButton, TextButtonSize, TextButtonColor } from '../../components/TextButton';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export interface Props {
    navigation: NavigationSwitchProp<NavigationState>;
}

/**
 * This screen is shown after user registers his account with our server.
 */
export class RegisterCreatedScreen extends React.Component<Props, object> {

    public constructor(props:Props) {
        super(props);
    }

    private gotoLoginScreen() {
        this.props.navigation.navigate('LoginStackNavigator_LoginScreen');
    };

    public render() {
        return (
            <GradientBackground>
                <StatusBar barStyle="light-content" />

                <SafeAreaView style={[styles.container]}>
                    {/* TITLE */}
                    <Typography type={TypographyType.logo} style={{ textAlign: 'center', color: 'white', marginTop: 20 }}>
                        { translate('appName') }
                    </Typography>

                    <View style={{flex:1}} />

                    {/* YOU CREATED ACCOUNT */}
                    <Typography type={TypographyType.headingSecondary} style={{ textAlign: 'center', color: 'white', marginBottom:scale(20) }}>
                        { translate('youCreatedAccount') }
                    </Typography>

                    {/* CHECK EMAIL */}
                    <Typography type={TypographyType.bodyRegular} style={{ width:'70%', textAlign: 'center', color: 'white', marginBottom:scale(60) }}>
                        { translate('checkEmail') }
                    </Typography>

                    {/* GOTO HOME */}
                    <RoundedButton
                        text = { translate('buttonGotoHome') }
                        type = { RoundedButtonType.hollowPurple }
                        onPress={() => {this.gotoLoginScreen()}}
                        style={{width:'80%', marginBottom:scale(60)}}
                    />

                    {/* SEND REGISTER EMAIL AGAIN */}
                    <TextButton color={TextButtonColor.white} textStyle={{textDecorationLine:'underline', textAlign:'center'}} onPress={ () => {} }>
                        { translate('sendRegisterEmailAgain') }
                    </TextButton>

                    <View style={{flex:1}} />

                    {/* LOGO IMAGES */}
                    <View style={{ marginLeft:scale(15), marginRight:scale(15), marginBottom:scale(15), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image
                            source={require('../../themes/assets/gradski_zavod.png')}
                            style={{ width: '48%', maxWidth: 150, aspectRatio: 3.26 }}
                            resizeMode="cover"
                        />
                        <View style={{ flex: 1 }}></View>
                        <Image
                            source={require('../../themes/assets/unicef.png')}
                            style={{ width: '48%', maxWidth: 140, aspectRatio: 4 }}
                            resizeMode="cover"
                        />
                    </View>
                </SafeAreaView>
            </GradientBackground>
        );
    }

}

export interface RegisterCreatedScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<RegisterCreatedScreenStyles>({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});
