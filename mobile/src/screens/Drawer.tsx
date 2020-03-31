import React from 'react';
import { View, Text, StyleProp, ViewStyle, StyleSheet, ScrollView } from 'react-native';
import { ThemeContextValue, ThemeConsumer } from '../themes/ThemeContext';
import { translate } from '../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { navigation } from '../app/Navigators';
import { FancyButton, FancyButtonType } from "../components/FancyButton";
import { Typography, TypographyType } from "../components/Typography";
import { BorderlessButton } from "react-native-gesture-handler";
import { HomeScreenParams } from './home/HomeScreen';
import { DrawerActions } from 'react-navigation-drawer';

export interface Props {
    style?: StyleProp<ViewStyle>;
}

export class Drawer extends React.Component<Props> {
    static defaultProps: Props = {
        
    };

    constructor(props: Props) {
        super(props);
    }

    private gotoScreen(fancyButtonType:FancyButtonType) {
        if (fancyButtonType === FancyButtonType.home) {
            let params: HomeScreenParams = {

            };
            
            navigation.navigate('HomeStackNavigator_HomeScreen', params);
            navigation.dispatch(DrawerActions.closeDrawer());
        } else {
            navigation.dispatch(DrawerActions.closeDrawer());
        }
    }

    private onClosePress() {
        navigation.goBack();
    }

    public render() {
        return (
            <ThemeConsumer>
            {(themeContext:ThemeContextValue) => (
                // <View style={ [styles.container, themeContext.theme.contentContainer, this.props.style] }>
                //     <Text>Component: Drawer</Text>
                // </View>
                <ScrollView contentContainerStyle={ styles.contentContainer }>
                    {/* ARTICLES */}
                    <View style={{marginBottom:scale(5), flexDirection:'row', alignItems:'center'}}>
                        <Typography type={ TypographyType.headingPrimary } style={{flex:1, marginBottom:0}}>
                            {translate('drawerTitleArticles')}
                        </Typography>
                        <BorderlessButton onPress={() => {this.onClosePress()}}>
                            <Icon
                                name={ "close" }
                                style={{ fontSize:22, marginRight:scale(5)}}
                            />
                        </BorderlessButton>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <FancyButton type={ FancyButtonType.home } style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.home)} } />
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <FancyButton type={ FancyButtonType.food } style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.food)} } />
                        <FancyButton type={ FancyButtonType.health } style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.health)} } />
                    </View>
            
                    <View style={{flexDirection:'row'}}>
                        <FancyButton type={ FancyButtonType.hygiene } style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.hygiene)} } />
                        <FancyButton type={ FancyButtonType.games } style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.games)} } />
                    </View>
            
                    <View style={{flexDirection:'row'}}>
                        <FancyButton type={ FancyButtonType.parents } style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.parents)} } />
                        <FancyButton type={ FancyButtonType.faq } style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.faq)} } />
                    </View>

                    {/* GROWTH DIARY */}
                    <Typography type={ TypographyType.headingPrimary } style={{marginTop:scale(20), marginBottom:scale(5)}}>
                        {translate('drawerTitleGrowthDiary')}
                    </Typography>

                    <View style={{flexDirection:'row'}}>
                        <FancyButton type={ FancyButtonType.growth } style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.growth)} } />
                        <FancyButton type={ FancyButtonType.doctor } style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.doctor)} } />
                    </View>
            
                    <View style={{flexDirection:'row'}}>
                        <FancyButton type={ FancyButtonType.vaccination } style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.vaccination)} } />
                        <FancyButton type={ FancyButtonType.development } style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.development)} } />
                    </View>

                    {/* ABOUT US */}
                    <Typography type={ TypographyType.headingPrimary } style={{marginTop:scale(20), marginBottom:scale(5)}}>
                        {translate('appName')}
                    </Typography>

                    <View style={{flexDirection:'row'}}>
                        <FancyButton title={translate('drawerButtonAboutUs')} style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.aboutUs)} } />
                        <FancyButton title={translate('drawerButtonContact')} style={{flex:1}} onPress={ ()=>{this.gotoScreen(FancyButtonType.contact)} } />
                    </View>
                </ScrollView>
            )}
            </ThemeConsumer>
        );
    }
}

export interface DrawerStyles {
    contentContainer?: ViewStyle;
}

const styles = StyleSheet.create<DrawerStyles>({
    contentContainer: {
        padding:10,
        backgroundColor:'white',
    },
});
