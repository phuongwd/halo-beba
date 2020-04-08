import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle, ScrollView } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';
import { translate } from '../../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Typography, TypographyType } from '../../components/Typography';
import { TextButton, TextButtonColor } from '../../components/TextButton';
import { DateTimePicker, DateTimePickerType } from '../../components/DateTimePicker';
import { RateAChild } from '../../components/RateAChild';
import { RoundedTextInput } from '../../components/RoundedTextInput';
import { RoundedTextArea } from '../../components/RoundedTextArea';

export interface BirthDataScreenParams {

}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, BirthDataScreenParams>;
}

export interface State {

}

export class BirthDataScreen extends React.Component<Props, State> {

    public constructor(props:Props) {
        super(props);

        this.setDefaultScreenParams();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: BirthDataScreenParams = {
            
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
                <KeyboardAwareScrollView
                    // themeContext.theme.screenContainer?.backgroundColor
                    style={{backgroundColor:'white'}}
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
                            { translate('birthDataTitle') }
                        </Typography>

                        {/* DESCRIPTION TEXT */}
                        <Typography type={ TypographyType.bodyRegular }>
                            { translate('birthDataDescription') }
                        </Typography>

                        <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />

                        {/* PLANNED TERM */}
                        <DateTimePicker
                            label={translate('fieldLabelPlannedTerm')} type={ DateTimePickerType.date }
                            style={{alignSelf:'stretch'}}
                            onChange={ () => {} }
                        />

                        <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingNormal}} />

                        {/* BIRTH DATE */}
                        <DateTimePicker
                            label={translate('fieldLabelBirthDate')} type={ DateTimePickerType.date }
                            style={{alignSelf:'stretch'}}
                            onChange={ () => {} }
                        />

                        <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />

                        {/* BABY RATING ON BIRTH */}
                        <Typography type={ TypographyType.bodyRegular } style={{marginBottom:scale(5)}}>
                            {translate('fieldLabelBabyRatingOnBirth')}
                        </Typography>

                        <RateAChild />
                        <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />

                        {/* BABY MEASUREMENTS */}
                        <Typography type={ TypographyType.bodyRegular } style={{marginBottom:scale(8)}}>
                            {translate('fieldLabelMeasurementsOnBirth')}
                        </Typography>

                        <RoundedTextInput
                            label={ translate('fieldLabelWeight') }
                            suffix="g"
                            icon="weight"
                            style={{width:scale(150)}}
                            onChange={ () => {} }
                        />

                        <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingNormal}} />

                        <RoundedTextInput
                            label={ translate('fieldLabelLength') }
                            suffix="cm"
                            icon="weight"
                            style={{width:scale(150)}}
                            onChange={ () => {} }
                        />

                        <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />

                        {/* DOCTOR COMMENTS */}
                        <RoundedTextArea
                            label={translate('fieldLabelCommentFromDoctor')} onChange={ () => {} }
                            style={{alignSelf:'stretch'}}
                        />

                        <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />
                    </View>
                </KeyboardAwareScrollView>
            )}
            </ThemeConsumer>
        );
    }

}

export interface BirthDataScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<BirthDataScreenStyles>({
    container: {
        
    },
});
