import React from 'react';
import { View, SafeAreaView, Text, Button, ScrollView, ViewStyle, StyleSheet, Image, Linking } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../themes/ThemeContext';
import { translate } from '../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Typography, TypographyType } from '../components/Typography';
import { TextButton, TextButtonColor } from '../components/TextButton';
import { TermsScreenParams } from './login/TermsScreen';

export interface AboutScreenParams {
    showSearchInput?: boolean;
}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, AboutScreenParams>;
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

    private sendEmail() {
        Linking.openURL(`mailto:${translate('appEmail')}`).catch(() => {});
    }

    private callPhone() {
        Linking.openURL(`tel:${translate('appPhone')}`).catch(() => {});
    }

    private openWebsite() {
        Linking.openURL('https://www.halobeba.rs/');
    }

    private gotoTermsScreen() {
        let screenParams: TermsScreenParams = {
            hideCheckboxes: true,
            showBackButton: true
        };

        this.props.navigation.navigate('HomeStackNavigator_TermsScreen', screenParams);
    }

    public render() {
        const screenParams = this.props.navigation.state.params!;

        return (
            <ThemeConsumer>
            {(themeContext:ThemeContextValue) => (
                <ScrollView
                    style={{flex:1, backgroundColor:themeContext.theme.screenContainer?.backgroundColor}}
                    contentContainerStyle={ [styles.container, {padding:themeContext.theme.screenContainer?.padding}] }
                >
                    {/* GO BACK */}
                    <TextButton style={{padding:0}} icon="chevron-left" iconStyle={{color:'#AA40BF'}} textStyle={{fontSize:scale(16)}} color={TextButtonColor.purple} onPress={ () => {this.gotoBack()} }>
                        {translate('buttonBack')}
                    </TextButton>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingNormal}} />

                    {/* TITLE */}
                    <Typography type={TypographyType.headingPrimary}>
                        { translate('aboutUs') }
                    </Typography>

                    <Typography type={ TypographyType.bodyRegularLargeSpacing }>
                        Halobeba je odsek Centra za promociju zdravlja Gradskog zavoda za javno zdravlje u Beogradu i predstavlja segment rada Kancelarije za zdravu porodicu Ministarstva zdravlja Republike Srbije.
                    </Typography>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingNormal}} />

                    <Typography type={ TypographyType.bodyRegularLargeSpacing }>
                        Naš osnovni cilj je promocija zdravlja majke i deteta kroz podsticanje donošenja odluka vezanih za zdravlje, pravilnu ishranu, negu, rast i razvoj dece, a na bazi adekvatnih i pravovremenih informacija, poruka i saveta u skladu sa usaglašenim i savremenim stručnim stavovima.
                    </Typography>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingNormal}} />

                    <Image
                        source={ require('../themes/assets/mom_holding_baby.png') }
                        style={{ alignSelf:'center', height:scale(200), aspectRatio:1.119 }}
                        resizeMode="cover"
                    />

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />

                    {/* OUR MISSION */}
                    <Typography type={TypographyType.headingSecondary}>
                        Naša misija
                    </Typography>

                    <Typography type={ TypographyType.bodyRegularLargeSpacing }>
                        Sprovodjenje aktivnosti i intervencija u oblasti promocije, unapređenja, očuvanja, kontrole i zaštite zdravlja majke i deteta, kroz jačanje kapaciteta porodice i osnaživanje roditelja.
                    </Typography>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />

                    {/* OUR VISION */}
                    <Typography type={TypographyType.headingSecondary}>
                        Naša vizija
                    </Typography>

                    <Typography type={ TypographyType.bodyRegularLargeSpacing }>
                        Postizanje najbolje moguće osposobljenosti roditelja za obezbeđenje zdravog rasta i razvoja najmlađih naraštaja.
                    </Typography>

                    <Image
                        source={ require('../themes/assets/parents_with_two_children.png') }
                        style={{ alignSelf:'center', height:scale(200), aspectRatio:1.119 }}
                        resizeMode="cover"
                    />

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />

                    {/* BEGINNINGS */}
                    <Typography type={TypographyType.headingSecondary}>
                        Razvojni put
                    </Typography>

                    <Typography type={ TypographyType.bodyRegularLargeSpacing }>
                        Naš rad je 2001. godine pokrenut u okviru Gradskog zavoda za zaštitu zdravlja a uz podršku UNICEF-a, Skupštine grada Beograda i saglasnost tadašnjeg Ministarstva zdravlja i zaštite životne sredine Republike Srbije.
                    </Typography>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />

                    {/* CONTACT */}
                    <Typography type={TypographyType.headingSecondary}>
                        Kontakt
                    </Typography>

                    <Typography type={ TypographyType.bodyRegularLargeSpacing }>
                        Gradski zavod za javno zdravlje{"\n"}
                        Despota Stefana 54a{"\n"}
                        Beograd
                    </Typography>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingSmall}} />

                    <TextButton onPress={() => {this.sendEmail()}} icon="envelope" color={TextButtonColor.purple}>
                        { translate('appEmail') }
                    </TextButton>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />

                    {/* Savetovalište */}
                    <Typography type={ TypographyType.bodyRegular } style={{fontWeight:'bold'}}>
                        Savetovalište
                    </Typography>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingSmall}} />

                    <TextButton onPress={() => {this.callPhone()}} icon="phone" color={TextButtonColor.purple}>
                        { translate('appPhone') }
                    </TextButton>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />

                    {/* Radno vreme */}
                    <Typography type={ TypographyType.bodyRegular } style={{fontWeight:'bold'}}>
                        Radno vreme
                    </Typography>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingSmall}} />

                    <Typography type={ TypographyType.bodyRegular }>
                        Svakog dana 00 - 24h
                    </Typography>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingNormal}} />

                    <TextButton onPress={() => {this.openWebsite()}} icon="globe" color={TextButtonColor.purple}>
                        HaloBeba websajt
                    </TextButton>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />

                    {/* APPLICATION */}
                    <Typography type={TypographyType.headingSecondary}>
                        Aplikacija
                    </Typography>

                    <Typography type={ TypographyType.bodyRegularLargeSpacing }>
                        Posvećeni smo kontiuniranom radu na poboljšanju aplikacije kako bismo roditeljima pružili kvalitetnu podršku. Pozivamo vas da svojim komentarima zajedno sa nama učestvujete u toj misiji.
                    </Typography>

                    <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingNormal}} />

                    <TextButton onPress={() => {this.gotoTermsScreen()}} color={TextButtonColor.purple}>
                        Uslovi korišćenja aplikacije
                    </TextButton>

                    <View style={{height:scale(40)}} />

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
