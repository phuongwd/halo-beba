import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle, ScrollView } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';
import { translate } from '../../translations/translate';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Typography, TypographyType } from '../../components/Typography';
import { TextButton, TextButtonColor } from '../../components/TextButton';
import { ListCard } from './ListCard';

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

                        {/* LIST CARD */}
                        <ListCard />
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
        flex: 1,
    },
});
