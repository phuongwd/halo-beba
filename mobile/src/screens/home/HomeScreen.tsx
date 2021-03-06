import React from 'react';
import Realm from 'realm';
import { ScrollView, StyleSheet, View, ViewStyle, Alert, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import { NavigationStackProp, NavigationStackState } from 'react-navigation-stack';
import { ThemeConsumer, ThemeContextValue } from '../../themes/ThemeContext';
import { ArticlesSection, ArticlesSectionData } from './ArticlesSection';
import { DataRealmContext, DataRealmContextValue, DataRealmConsumer } from '../../stores/DataRealmContext';
import { ContentEntity, ContentEntitySchema } from '../../stores/ContentEntity';
import { CategoryArticlesViewEntity } from '../../stores/CategoryArticlesViewEntity';
import { dataRealmStore, apiStore } from '../../stores';
import { translate } from '../../translations/translate';
import { content, localize, utils } from '../../app';
import { Media } from '../../components';
import Orientation from 'react-native-orientation-locker';
import { getSearchResultsScreenData } from '../../stores/getSearchResultsScreenData';
import axios, { AxiosResponse } from 'axios';
import { appConfig } from "../../app/appConfig";

export interface HomeScreenParams {
    showSearchInput?: boolean;
}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, HomeScreenParams>;
}

/**
 * Shows several ArticlesSection.
 */
export class HomeScreen extends React.Component<Props, object> {

    public constructor(props: Props) {
        super(props);
        this.setDefaultScreenParams();
    }

    public componentDidMount() {
        Orientation.lockToPortrait();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: HomeScreenParams = {
            showSearchInput: false,
        };

        if (this.props.navigation.state.params) {
            this.props.navigation.state.params = Object.assign({}, defaultScreenParams, this.props.navigation.state.params);
        } else {
            this.props.navigation.state.params = defaultScreenParams;
        }
    }

    private async onTestButtonPress() {
        // let images: any[] = [];
        // for (let i = 0; i < 320; i++) {
        //     images.push({srcUrl:'', destFilename:'', destFolder:''},);
        // }

        // await apiStore.downloadImages(images);
    }

    public render() {
        const screenParams = this.props.navigation.state.params!;

        return (
            <ThemeConsumer>
                {(themeContext: ThemeContextValue) => (
                    <ScrollView style={{ backgroundColor: themeContext.theme.screenContainer?.backgroundColor }} contentContainerStyle={[styles.container, { padding: themeContext.theme.screenContainer?.padding }]}>

                        {/* <Text>{localize.getLanguage()}</Text> */}

                        {/* Test button */}
                        {/* <Button onPress={() => {this.onTestButtonPress()}}>Test</Button>
                        <View style={{height:30}} /> */}

                        <DataRealmConsumer>
                            {(dataRealmContext: DataRealmContextValue) => (
                                <>
                                {  
                                    content.getHomeScreenDevelopmentArticles(dataRealmContext.realm).categoryArticles?.length !== 0 ?
                                    <ArticlesSection data={content.getHomeScreenDevelopmentArticles(dataRealmContext.realm)} />
                                    : null
                                }
                                <ArticlesSection data={content.getHomeScreenArticles(dataRealmContext.realm)} />
                                </>
                            )}
                        </DataRealmConsumer>
                    </ScrollView>
                )}
            </ThemeConsumer>
        );
    }

}

export interface HomeScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<HomeScreenStyles>({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
});
