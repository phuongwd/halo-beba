import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';

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

    public render() {
        const screenParams = this.props.navigation.state.params!;

        return (
            <ThemeConsumer>
            {(themeContext:ThemeContextValue) => (
                <SafeAreaView style={ [styles.container, themeContext.theme.contentContainer] }>
                    <View style={ {backgroundColor:'white', flex:1, flexDirection:'column', justifyContent:'flex-start', alignItems:'stretch'} }>
                        <Text style={ {fontSize:20, textAlign:'left'} }>
                            SearchResultsScreen
                        </Text>
                    </View>
                </SafeAreaView>
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
