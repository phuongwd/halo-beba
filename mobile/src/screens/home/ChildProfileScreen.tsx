import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';
import { translate } from '../../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { KeyboardAwareScrollView as ScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Typography, TypographyType } from '../../components/Typography';
import { TextButton, TextButtonColor } from '../../components/TextButton';
import { DateTimePicker, DateTimePickerType } from '../../components/DateTimePicker';
import { RateAChild } from '../../components/RateAChild';
import { RoundedTextInput } from '../../components/RoundedTextInput';
import { RoundedTextArea } from '../../components/RoundedTextArea';
import { RoundedButton, RoundedButtonType } from '../../components/RoundedButton';
import FastImage from 'react-native-fast-image';

export interface ChildProfileScreenParams {

}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, ChildProfileScreenParams>;
}

export interface State {

}

export class ChildProfileScreen extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);

        this.setDefaultScreenParams();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: ChildProfileScreenParams = {

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
                {(themeContext: ThemeContextValue) => (
                    <ScrollView
                        style={[styles.container]}
                        contentContainerStyle={{ alignItems: 'center', padding: themeContext.theme.screenContainer?.padding }}
                    >
                        <View style={{ height: scale(40) }} />

                        {/* PHOTO */}
                        <FastImage
                            style={styles.photo}
                            source={{
                                uri: 'https://i.ytimg.com/vi/F9wbogYwTVM/maxresdefault.jpg',
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />

                        <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingNormal}} />

                        {/* NAME */}
                        <Typography type={TypographyType.headingPrimary} style={{marginBottom:scale(5)}}>
                            Gvozden
                        </Typography>

                        {/* BIRTH DATE */}
                        <Typography type={TypographyType.bodyRegular} style={{fontSize:moderateScale(15), color:'grey'}}>
                            { translate('childProfileBirthday') } 10.02.2019.
                        </Typography>

                        <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingNormal}} />

                        {/* EDIT PROFILE */}
                        <TextButton color={TextButtonColor.purple} onPress={ () => {} }>
                            { translate('childProfileChange') }
                        </TextButton>

                        <View style={{height:themeContext.theme.variables?.sizes.verticalPaddingLarge}} />

                        {/* ADD SIBLING */}
                        <TextButton color={TextButtonColor.purple} onPress={ () => {} }>
                            + { translate('childProfileAddSibling') }
                        </TextButton>

                    </ScrollView>
                )}
            </ThemeConsumer>
        );
    }
}

export interface ChildProfileScreenStyles {
    container?: ViewStyle;
    photo?: ViewStyle;
}

const styles = StyleSheet.create<ChildProfileScreenStyles>({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    photo: {
        width: scale(120),
        height: scale(120),
        borderRadius: scale(60),
    },
});
