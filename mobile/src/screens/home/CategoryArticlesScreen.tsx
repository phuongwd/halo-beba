import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle, ScrollView, Image, ImageStyle, ImageBackground } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';
import { translate } from '../../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ArticleViewEntity } from '../../stores/ArticleViewEntity';
import { ArticleScreenParams } from './ArticleScreen';
import { TouchableOpacity } from "react-native-gesture-handler";
import { CategoryArticlesViewEntity } from '../../stores/CategoryArticlesViewEntity';
import { Typography, TypographyType } from '../../components/Typography';
import { TextButton, TextButtonColor } from '../../components/TextButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface CategoryArticlesScreenParams {
    data: CategoryArticlesViewEntity;
}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, CategoryArticlesScreenParams>;
}

/**
 * Shows articles of some specific category.
 */
export class CategoryArticlesScreen extends React.Component<Props, object> {

    public constructor(props:Props) {
        super(props);

        this.setDefaultScreenParams();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: CategoryArticlesScreenParams = {
            data: {categoryId:0, categoryName:'No category', articles:[]}
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

    private gotoArticleScreen(article?:ArticleViewEntity) {
        if (!article) return;

        if (!article.youTubeVideoId) {
            // Text article
            let params: ArticleScreenParams = {
                article: article
            };
            
            this.props.navigation.navigate('HomeStackNavigator_ArticleScreen', params);
        } else {
            // Video article
            this.props.navigation.navigate('RootModalStackNavigator_VideoScreen', {
                videoId: article?.youTubeVideoId
            });
        }
    }

    public render() {
        const screenParams = this.props.navigation.state.params!;

        let getPlayIcon = (themeContext: ThemeContextValue, size:number = scale(70)) => {
            return (
                <View style={{
                    justifyContent:'center', alignItems:'center',
                    backgroundColor:'rgba(255,255,255,0.4)',
                    width:size, height:size,
                    borderRadius: themeContext.percentageToDP('20%')
                }}>
                    <Icon
                        name={ "play" }
                        style={{ color:'white', marginLeft:size/10, fontSize:size/2 }}
                    />
                </View>
            );
        }

        return (
            <ThemeConsumer>
            {(themeContext:ThemeContextValue) => (
                <ScrollView style={{backgroundColor:themeContext.theme.screenContainer?.backgroundColor}} contentContainerStyle={ [styles.container, {padding:themeContext.theme.screenContainer?.padding}] }>
                    {/* GO BACK */}
                    <TextButton style={{padding:0}} icon="chevron-left" iconStyle={{color:'#AA40BF'}} textStyle={{fontSize:scale(16)}} color={TextButtonColor.purple} onPress={ () => {this.gotoBack()} }>
                        {translate('buttonBack')}
                    </TextButton>

                    <View style={{marginBottom:scale(15)}} />

                    {/* CATEGORY NAME */}
                    <Typography type={TypographyType.headingPrimary}>
                        {screenParams.data.categoryName}
                    </Typography>

                    {/* CATEGORY ARTICLES */}
                    { screenParams.data.articles.map((article, index) => (
                        <TouchableOpacity onPress={() => {this.gotoArticleScreen(article)}} key={index} style={{marginBottom:scale(25)}}>
                            <ImageBackground
                                source={{ uri: article.coverImageUrl }}
                                style={[styles.image, { width: '100%', aspectRatio: 1.8 }]}
                                resizeMode="cover"
                            >
                                {article.youTubeVideoId ? getPlayIcon(themeContext) : null}
                            </ImageBackground>

                            <Typography style={{marginTop:scale(10), marginBottom:0}} type={TypographyType.headingSecondary}>
                                {article.title}
                            </Typography>
                        </TouchableOpacity>
                    )) }
                </ScrollView>
            )}
            </ThemeConsumer>
        );
    }

}

export interface CategoryArticlesScreenStyles {
    container?: ViewStyle;
    image?: ImageStyle;
}

const styles = StyleSheet.create<CategoryArticlesScreenStyles>({
    container: {
        
    },

    image: {
        borderRadius: scale(10),
        justifyContent: 'center',
        alignItems:'center',
        overflow: 'hidden',
    }
});
