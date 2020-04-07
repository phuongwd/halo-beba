import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../themes/ThemeContext';
import { WebView } from 'react-native-webview';
import { IconButton, Colors } from 'react-native-paper';
import { scale } from 'react-native-size-matters';

export interface VideoScreenParams {

}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, VideoScreenParams>;
}

export interface State {

}

export class VideoScreen extends React.Component<Props, State> {

    public constructor(props: Props) {
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

    private getHtml(): string {
        return `
            <iframe
                width="100%" height="100%"
                src="https://www.youtube.com/embed/Wzrw7WTBVuk"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope"
            >
            </iframe>
        `;
    }

    private goBack() {
        this.props.navigation.goBack();
    }

    public render() {
        const screenParams = this.props.navigation.state.params!;

        return (
            <ThemeConsumer>
                {(themeContext: ThemeContextValue) => (
                    <SafeAreaView style={[styles.container, themeContext.theme.contentContainer]}>
                        <View style={{ backgroundColor: 'blue', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                            <WebView
                                source={{ html: this.getHtml() }}
                                style={{ flex: 1, alignSelf: 'stretch', borderColor: 'green', borderWidth: 10 }}
                            />

                            <IconButton
                                icon="close"
                                color={Colors.white}
                                size={scale(30)}
                                onPress={() => {this.goBack()}}
                                style={{position:'absolute', top:scale(10), right:scale(10)}}
                            />
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
