import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle, ScrollView, Linking } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';
import { translate } from '../../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Typography, TypographyType } from '../../components/Typography';
import { TextButton, TextButtonColor } from '../../components/TextButton';
import { ListCard, ListCardMode } from './ListCard';
import { listCardArticlesDummyData, listCardFaqDummyData } from "../../dummy-data/listCardDummyData";

export interface SearchResultsScreenParams {
    searchTerm?: string;
}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, SearchResultsScreenParams>;
}

export interface State {

}

export class SearchResultsScreen extends React.Component<Props, State> {

    public constructor(props:Props) {
        super(props);

        this.setDefaultScreenParams();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: SearchResultsScreenParams = {
            
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

                        <View style={{height:scale(15)}} />

                        {/* TITLE */}
                        <Typography type={TypographyType.headingPrimary}>
                            { translate('searchResults') }
                        </Typography>

                        {/* LIST CARD: Articles */}
                        <ListCard
                            mode={ ListCardMode.simpleList }
                            title={ listCardArticlesDummyData.title }
                            subTitle={ listCardArticlesDummyData.subTitle }
                            items={ listCardArticlesDummyData.items }
                            onItemPress={(item) => {console.warn(item.id)}}
                        />

                        <View style={{height:scale(20)}} />

                        {/* LIST CARD: FAQ */}
                        <ListCard
                            mode={ ListCardMode.accordionList }
                            title={ listCardFaqDummyData.title }
                            subTitle={ listCardFaqDummyData.subTitle }
                            items={ listCardFaqDummyData.items }
                            onItemPress={(item) => {console.warn(item.id)}}
                        />

                        {/* YOU DIDNT FIND ANSWER */}
                        <View style={{height:scale(40)}} />

                        <Typography style={{marginBottom:scale(25)}} type={TypographyType.headingSecondary}>
                                { translate('didntFindAnswerInSearchResults') }
                        </Typography>

                        <Typography style={{fontWeight:'bold'}} type={TypographyType.bodyRegular}>
                            { translate('writeUsEmail') }
                        </Typography>

                        <View style={{height:scale(5)}} />

                        <TextButton onPress={() => {this.sendEmail()}} icon="envelope" color={TextButtonColor.purple}>
                            { translate('appEmail') }
                        </TextButton>

                        <View style={{height:scale(20)}} />

                        <Typography style={{fontWeight:'bold'}} type={TypographyType.bodyRegular}>
                            { translate('callUs') }
                        </Typography>

                        <View style={{height:scale(5)}} />

                        <TextButton onPress={() => {this.callPhone()}} icon="phone" color={TextButtonColor.purple}>
                            { translate('appPhone') }
                        </TextButton>

                        <View style={{height:scale(40)}} />
                    </View>
                </ScrollView>
            )}
            </ThemeConsumer>
        );
    }

}

export interface SearchResultsScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<SearchResultsScreenStyles>({
    container: {
        // flex: 1,
    },
});
