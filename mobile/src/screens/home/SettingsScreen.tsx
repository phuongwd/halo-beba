import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';
import { translate } from '../../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Switch, Caption } from 'react-native-paper';
import { Typography, TypographyType } from '../../components/Typography';
import { TextButton, TextButtonColor } from '../../components/TextButton';
import { RoundedButton, RoundedButtonType } from '../../components/RoundedButton';

export interface SettingsScreenParams {
    searchTerm?: string;
}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, SettingsScreenParams>;
}

export interface State {
    notificationsApp: boolean;
    notificationsEmail: boolean;
    followGrowth: boolean;
    followDevelopment: boolean;
    followDoctorVisits: boolean;
}

export class SettingsScreen extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);

        this.setDefaultScreenParams();
        this.initState();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: SettingsScreenParams = {

        };

        if (this.props.navigation.state.params) {
            this.props.navigation.state.params = Object.assign({}, defaultScreenParams, this.props.navigation.state.params);
        } else {
            this.props.navigation.state.params = defaultScreenParams;
        }
    }

    private initState() {
        let state: State = {
            notificationsApp: true,
            notificationsEmail: false,
            followGrowth: true,
            followDevelopment: true,
            followDoctorVisits: true,
        };

        this.state = state;
    }

    private gotoBack() {
        this.props.navigation.goBack();
    }

    public render() {
        return (
            <ThemeConsumer>
                {(themeContext: ThemeContextValue) => (
                    <ScrollView
                        style={{ backgroundColor: themeContext.theme.screenContainer?.backgroundColor }}
                        contentContainerStyle={[styles.container]}
                    >
                        <View style={{ alignItems: 'flex-start', padding: themeContext.theme.screenContainer?.padding }}>
                            {/* GO BACK */}
                            <TextButton style={{ padding: 0 }} icon="chevron-left" iconStyle={{ color: '#AA40BF' }} textStyle={{ fontSize: scale(16) }} color={TextButtonColor.purple} onPress={() => { this.gotoBack() }}>
                                {translate('buttonBack')}
                            </TextButton>

                            <View style={{ height: themeContext.theme.variables?.sizes.verticalPaddingNormal }} />

                            {/* TITLE */}
                            <Typography type={TypographyType.headingSecondary}>
                                {translate('settingsTitleNotifications')}
                            </Typography>

                            <View style={{ height: themeContext.theme.variables?.sizes.verticalPaddingNormal }} />

                            {/* state.notificationsApp */}
                            <View style={{ alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Switch
                                    value={this.state.notificationsApp}
                                    color={themeContext.theme.variables?.colors?.switchColor}
                                    onValueChange={() => { this.setState({ notificationsApp: !this.state.notificationsApp }) }}
                                    style={{ marginRight: scale(20) }}
                                />
                                <Typography style={{ flex: 1 }} type={TypographyType.bodyRegular}>
                                    {translate('settingsNotificationsWithApp')}
                                </Typography>
                            </View>

                            <View style={{ height: themeContext.theme.variables?.sizes.verticalPaddingLarge }} />

                            {/* state.notificationsEmail */}
                            <View style={{ alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Switch
                                    value={this.state.notificationsEmail}
                                    color={themeContext.theme.variables?.colors?.switchColor}
                                    onValueChange={() => { this.setState({ notificationsEmail: !this.state.notificationsEmail }) }}
                                    style={{ marginRight: scale(20) }}
                                />
                                <Typography style={{ flex: 1 }} type={TypographyType.bodyRegular}>
                                    {translate('settingsNotificationsWithEmail')}
                                </Typography>
                            </View>

                            <View style={{ height: themeContext.theme.variables?.sizes.verticalPaddingLarge }} />

                            {/* Notifications help */}
                            <Caption style={{ fontSize: moderateScale(14) }}>
                                {translate('settingsNotificationsHelp')}
                            </Caption>

                            <View style={{ height: themeContext.theme.variables?.sizes.verticalPaddingLarge }} />

                            {/* TITLE */}
                            <Typography type={TypographyType.headingSecondary}>
                                {translate('settingsTitleNotificationsDetails')}
                            </Typography>

                            <View style={{ height: themeContext.theme.variables?.sizes.verticalPaddingNormal }} />

                            {/* state.followGrowth */}
                            <View style={{ alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Switch
                                    value={this.state.followGrowth}
                                    color={themeContext.theme.variables?.colors?.switchColor}
                                    onValueChange={() => { this.setState({ followGrowth: !this.state.followGrowth }) }}
                                    style={{ marginRight: scale(20) }}
                                />
                                <Typography style={{ flex: 1 }} type={TypographyType.bodyRegular}>
                                    {translate('settingsEnterGrowth')}
                                </Typography>
                            </View>

                            <View style={{ height: themeContext.theme.variables?.sizes.verticalPaddingLarge }} />

                            {/* state.followDevelopment */}
                            <View style={{ alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Switch
                                    value={this.state.followDevelopment}
                                    color={themeContext.theme.variables?.colors?.switchColor}
                                    onValueChange={() => { this.setState({ followDevelopment: !this.state.followDevelopment }) }}
                                    style={{ marginRight: scale(20) }}
                                />
                                <Typography style={{ flex: 1 }} type={TypographyType.bodyRegular}>
                                    {translate('settingsEnterDevelopment')}
                                </Typography>
                            </View>

                            <View style={{ height: themeContext.theme.variables?.sizes.verticalPaddingLarge }} />

                            {/* state.followDoctorVisits */}
                            <View style={{ alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Switch
                                    value={this.state.followDoctorVisits}
                                    color={themeContext.theme.variables?.colors?.switchColor}
                                    onValueChange={() => { this.setState({ followDoctorVisits: !this.state.followDoctorVisits }) }}
                                    style={{ marginRight: scale(20) }}
                                />
                                <Typography style={{ flex: 1 }} type={TypographyType.bodyRegular}>
                                    {translate('settingsEnterDoctorVisits')}
                                </Typography>
                            </View>

                            <View style={{ height: scale(50) }} />

                            {/* Export all data */}
                            <RoundedButton
                                text={translate('settingsButtonExport')}
                                type={RoundedButtonType.hollowPurple}
                                onPress={() => { }}
                                style={{ width: '85%', alignSelf: 'center' }}
                            />

                            <View style={{ height: themeContext.theme.variables?.sizes.verticalPaddingLarge }} />

                            {/* Logout */}
                            <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                <Icon
                                    name={"sign-out"}
                                    style={{ color:themeContext.theme.variables?.colors?.primary, fontSize: scale(20), marginRight:scale(10) }}
                                />
                                <TextButton
                                    style={{ padding: 0, alignSelf: 'center' }}
                                    iconStyle={{ color: '#AA40BF' }}
                                    textStyle={{ fontSize: scale(16) }}
                                    color={TextButtonColor.purple}
                                    onPress={() => { }}
                                >
                                    {translate('settingsLogout')}
                                </TextButton>
                            </View>

                            <View style={{height:scale(70)}} />

                            {/* Delete account */}
                            <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                <Icon
                                    name={"exclamation-triangle"}
                                    style={{ color:'#EB4747', fontSize: scale(20), marginRight:scale(10) }}
                                />
                                <TextButton
                                    style={{ padding: 0, alignSelf: 'center' }}
                                    iconStyle={{ color: '#AA40BF' }}
                                    textStyle={{ fontSize: scale(16) }}
                                    // color={TextButtonColor.purple}
                                    onPress={() => { }}
                                >
                                    {translate('settingsButtonDeleteAllData')}
                                </TextButton>
                            </View>

                            <View style={{ height: themeContext.theme.variables?.sizes.verticalPaddingLarge }} />
                        </View>
                    </ScrollView>
                )}
            </ThemeConsumer>
        );
    }

}

export interface SettingsScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<SettingsScreenStyles>({
    container: {

    },
});
