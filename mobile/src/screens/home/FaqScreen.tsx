import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle, ScrollView } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';
import { translate } from '../../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Typography, TypographyType } from '../../components/Typography';
import { TextButton, TextButtonColor } from '../../components/TextButton';
import { ListCard, ListCardMode } from './ListCard';
import { listCardFaqYourChildDummyData, listCardFaqPerAgeDummyData, listCardFaqMamaDummyData } from '../../dummy-data/listCardDummyData';

export interface FaqScreenParams {

}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, FaqScreenParams>;
}

export class FaqScreen extends React.Component<Props, object> {

    public constructor(props:Props) {
        super(props);

        this.setDefaultScreenParams();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: FaqScreenParams = {
            
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
                    contentContainerStyle={ [[styles.container], {padding:themeContext.theme.screenContainer?.padding}] }
                >
                    {/* GO BACK */}
                    <TextButton style={{padding:0}} icon="chevron-left" iconStyle={{color:'#AA40BF'}} textStyle={{fontSize:scale(16)}} color={TextButtonColor.purple} onPress={ () => {this.gotoBack()} }>
                        {translate('buttonBack')}
                    </TextButton>

                    <View style={{height:scale(15)}} />

                    {/* TITLE */}
                    <Typography type={TypographyType.headingPrimary}>
                        { translate('faq') }
                    </Typography>

                    {/* LIST CARD: Your child */}
                    <ListCard
                        mode={ ListCardMode.simpleList }
                        title={ listCardFaqYourChildDummyData.title }
                        items={ listCardFaqYourChildDummyData.items }
                        onItemPress={(item) => {console.warn(item.id)}}
                    />

                    <View style={{height:scale(20)}} />

                    {/* LIST CARD: Per age */}
                    <ListCard
                        mode={ ListCardMode.simpleList }
                        title={ listCardFaqPerAgeDummyData.title }
                        items={ listCardFaqPerAgeDummyData.items }
                        onItemPress={(item) => {console.warn(item.id)}}
                    />

                    <View style={{height:scale(20)}} />

                    {/* LIST CARD: mama */}
                    <ListCard
                        mode={ ListCardMode.simpleList }
                        title={ listCardFaqMamaDummyData.title }
                        items={ listCardFaqMamaDummyData.items }
                        onItemPress={(item) => {console.warn(item.id)}}
                    />

                    <View style={{height:scale(20)}} />
                </ScrollView>
            )}
            </ThemeConsumer>
        );
    }

}

export interface FaqScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<FaqScreenStyles>({
    container: {
        
    },
});
