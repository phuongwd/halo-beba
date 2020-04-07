import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../themes/ThemeContext';

export interface VideoScreenParams {

}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, VideoScreenParams>;
}

export interface State {

}

export class VideoScreen extends React.Component<Props, State> {

    public constructor(props:Props) {
        super(props);

        this.setDefaultScreenParams();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: VideoScreenParams = {
            
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
                            VideoScreen
                        </Text>
                    </View>
                </SafeAreaView>
            )}
            </ThemeConsumer>
        );
    }

}

export interface VideoScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<VideoScreenStyles>({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});
