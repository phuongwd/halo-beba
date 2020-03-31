import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ViewStyle, StatusBar } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { translate } from '../../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import { themes } from '../../themes/themes';
import { Typography, TypographyType } from '../../components/Typography';
import { RoundedButton, RoundedButtonType, RoundedButtonStyles } from '../../components/RoundedButton';

export interface Props {
    navigation: NavigationStackProp<NavigationStackState>;
}

export interface State {
    checkPrivateData: boolean;
    checkOtherConditions: boolean;
    checkAnonDataAccess: boolean;
}

/**
 * Terms and conditions screen.
 */
export class TermsScreen extends React.Component<Props, State> {

    public constructor(props:Props) {
        super(props);
        this.initState();
    }

    private initState() {
        let state: State = {
            checkPrivateData: false,
            checkOtherConditions: false,
            checkAnonDataAccess: true,
        };

        this.state = state;
    }

    private onAcceptButtonClick() {
        this.gotoAddChildrenScreen();
    }

    private gotoAddChildrenScreen() {
        this.props.navigation.navigate('AccountStackNavigator_AddChildrenScreen');
    };

    public render() {
        let colors = themes.getCurrentTheme().theme.variables?.colors;

        return (
            <SafeAreaView style={ [styles.container] }>
                <StatusBar barStyle="dark-content" />
                <View style={ styles.innerContainer }>
                    <Typography type={ TypographyType.headingPrimary } style={{textAlign:'center'}}>
                        Uslovi korišćenja aplikacije
                    </Typography>

                    <ScrollView contentContainerStyle={{padding: scale(24),}}>
                        {/* FIRST PARAGRAPH & IMAGE */}
                        <View style={{flexDirection:"row"}}>
                            <Typography type={ TypographyType.bodyRegular } style={{flex:1, textAlign:'left'}}>
                                Sve informacije i saveti služe isključivo u edukativne svrhe.
                            </Typography>

                            <Image
                                source={ require('../../themes/assets/terms.png') }
                                style={{ width:scale(110), aspectRatio:1.2 }}
                                resizeMode="cover"
                            />
                        </View>

                        {/* OTHER PARAGRAPHS */}
                        <Typography type={ TypographyType.bodyRegular } style={{marginTop:scale(14), flex:1, textAlign:'left'}}>
                            Sadržaj ove aplikacije nije zamena za lekarske preglede i dijagnoze. Ukoliko brinete za svoje i zdravlje svoje bebe, preporučujemo Vam da se obavezno konsultujete sa svojim lekarom.
                            
                            <Text style={{lineHeight:scale(14)}}>{"\n"}{"\n"}</Text>
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </Typography>

                        {/* CHECKBOXES */}
                        <View style={{marginTop:scale(20), paddingRight:scale(40) }}>
                            
                            {/* checkPrivateData */}
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Checkbox.Android
                                    status={ this.state.checkPrivateData ? 'checked' : 'unchecked' }
                                    onPress={() => { this.setState({checkPrivateData:!this.state.checkPrivateData}); }}
                                    color={ colors?.checkboxColor }
                                />
                                <TouchableWithoutFeedback style={{padding:5}} onPress={() => { this.setState({checkPrivateData:!this.state.checkPrivateData}); }}>
                                    <Typography type={ TypographyType.bodyRegular } style={{flex:1, textAlign:'left', marginLeft:scale(5)}}>
                                        Razumem da podaci o detetu ostaju privatni i čuvaju se samo u aplikaciji
                                    </Typography>
                                </TouchableWithoutFeedback>
                            </View>

                            {/* checkOtherConditions */}
                            <View style={{flexDirection:'row', marginTop:scale(14), alignItems:'center'}}>
                                <Checkbox.Android
                                    status={ this.state.checkOtherConditions ? 'checked' : 'unchecked' }
                                    onPress={() => { this.setState({checkOtherConditions:!this.state.checkOtherConditions}); }}
                                    color={ colors?.checkboxColor }
                                />
                                <TouchableWithoutFeedback style={{padding:5}} onPress={() => { this.setState({checkOtherConditions:!this.state.checkOtherConditions}); }}>
                                    <Typography type={ TypographyType.bodyRegular } style={{flex:1, textAlign:'left', marginLeft:scale(5)}}>
                                        Razumem ostale uslove korišćenja
                                    </Typography>
                                </TouchableWithoutFeedback>
                            </View>

                            {/* checkAnonDataAccess */}
                            <View style={{flexDirection:'row', marginTop:scale(14), alignItems:'center'}}>
                                <Checkbox.Android
                                    status={ this.state.checkAnonDataAccess ? 'checked' : 'unchecked' }
                                    onPress={() => { this.setState({checkAnonDataAccess:!this.state.checkAnonDataAccess}); }}
                                    color={ colors?.checkboxColor }
                                />
                                <TouchableWithoutFeedback style={{padding:5}} onPress={() => { this.setState({checkAnonDataAccess:!this.state.checkAnonDataAccess}); }}>
                                    <Typography type={ TypographyType.bodyRegular } style={{flex:1, textAlign:'left', marginLeft:scale(5)}}>
                                        Pristajem da se podaci o korišćenju anonimno obrađuju za poboljšanje aplikacije 
                                    </Typography>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                        {/* ACCEPT BUTTON */}
                        <RoundedButton
                            text = "Prihvatam uslove korišćenja"
                            disabled = { this.state.checkPrivateData && this.state.checkOtherConditions ? false : true }
                            type = { RoundedButtonType.purple }
                            onPress={ () => {this.onAcceptButtonClick()} }
                            style={{marginTop:scale(30)}}
                        />
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }

}

export interface TermsScreenStyles {
    container?: ViewStyle;
    innerContainer?: ViewStyle;
}

const styles = StyleSheet.create<TermsScreenStyles>({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    innerContainer: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'stretch',
        backgroundColor:'white',
        paddingTop: scale(24),
    },
});
