import React from 'react';
import { SafeAreaView, View, StyleSheet, ViewStyle, LayoutChangeEvent } from 'react-native';
import { NavigationStackProp, NavigationStackState } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../themes/ThemeContext';
import { IconButton, Colors } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export interface VideoScreenParams {

}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, VideoScreenParams>;
}

export interface State {
    orientation: 'portrait' | 'landscape';
    containerWidth?: number;
    containerHeight?: number;
}

export class VideoScreen extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);

        this.setDefaultScreenParams();
        this.initState();
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

    private initState() {
        let windowWidth = Dimensions.get('window').width;
        let windowHeight = Dimensions.get('window').height;

        let state: State = {
            orientation: windowWidth > windowHeight ? 'landscape' : 'portrait',
        };

        this.state = state;
    }

    private goBack() {
        this.props.navigation.goBack();
    }

    private onContainerLayout = (event:LayoutChangeEvent) => {
        let layout = event.nativeEvent.layout;

        this.setState({
            orientation: layout.width > layout.height ? 'landscape' : 'portrait',
            containerWidth: layout.width,
            containerHeight: layout.height,
        });
    };

    public render() {
        const screenParams = this.props.navigation.state.params!;

        return (
            <ThemeConsumer>
                {(themeContext: ThemeContextValue) => (
                    <SafeAreaView style={[styles.container, themeContext.theme.contentContainer]}>
                        <View onLayout={this.onContainerLayout} style={{ backgroundColor: 'blue', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            {this.state.containerWidth && this.state.containerHeight ? (
                                <YoutubePlayer
                                    width={this.state.containerWidth}
                                    height={400}
                                    videoId={"Wzrw7WTBVuk"}
                                    play={true}
                                    // volume={50}
                                    webViewStyle={{borderWidth:3, borderColor:'red'}}
                                    webViewProps={{ allowsFullscreenVideo:false }}
                                    playerParams={{
                                        preventFullScreen: true,
                                        cc_lang_pref: "us",
                                        showClosedCaptions: false
                                    }}
                                />
                            ) : null}

                            <IconButton
                                icon="close"
                                color={Colors.white}
                                size={scale(30)}
                                onPress={() => { this.goBack() }}
                                style={{ position: 'absolute', top: scale(0), right: scale(0) }}
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
