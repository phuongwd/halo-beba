import React from 'react';
import { SafeAreaView, View, StyleSheet, ViewStyle, LayoutChangeEvent } from 'react-native';
import { NavigationStackProp, NavigationStackState } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../themes/ThemeContext';
import { IconButton, Colors, ActivityIndicator } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';
// @ts-ignore
import YoutubePlayer, { getYoutubeMeta } from 'react-native-youtube-iframe';

export interface VideoScreenParams {
    videoId: string;
}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState, VideoScreenParams>;
}

export interface State {
    orientation: 'portrait' | 'landscape';

    containerWidth?: number;
    containerHeight?: number;

    playerWidth?: number;
    playerHeight?: number;

    aspectRatio?: number;
}

export class VideoScreen extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);

        this.setDefaultScreenParams();
        this.initState();
        this.setVideoAspectRatio();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: VideoScreenParams = {
            videoId: 'Wzrw7WTBVuk',
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

    private setVideoAspectRatio() {
        const screenParams = this.props.navigation.state.params!;

        if (screenParams.videoId) {
            getYoutubeMeta(screenParams.videoId).then((meta:any) => {
                if (meta && meta.width && meta.height) {
                    this.setState({
                        aspectRatio: meta.width / meta.height
                    }, () => {
                        this.setPlayerDimensions();
                    });
                }
            });
        }
    }

    private onContainerLayout = (event: LayoutChangeEvent) => {
        let layout = event.nativeEvent.layout;

        let orientation: 'portrait' | 'landscape' = layout.width > layout.height ? 'landscape' : 'portrait';
        let containerWidth: number = layout.width;
        let containerHeight: number = layout.height;

        this.setState({
            orientation: orientation,
            containerWidth: containerWidth,
            containerHeight: containerHeight,
        }, () => {
            if (containerWidth && containerHeight) {
                this.setPlayerDimensions();
            }
        });
    };

    private setPlayerDimensions() {
        if (this.state.aspectRatio && this.state.containerWidth && this.state.containerHeight) {
            let orientation: 'portrait' | 'landscape' = this.state.containerWidth > this.state.containerHeight ? 'landscape' : 'portrait';
            let playerWidth: number;
            let playerHeight: number;

            if (orientation === 'portrait') {
                // portrait
                playerWidth = this.state.containerWidth;
                playerHeight = playerWidth / this.state.aspectRatio;
            } else {
                // landscape
                playerHeight = this.state.containerHeight;
                playerWidth = playerHeight * this.state.aspectRatio;
            }

            if (playerWidth && playerHeight) {
                this.setState({
                    playerWidth: playerWidth,
                    playerHeight: playerHeight,
                });
            }
        }
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
                        <View onLayout={this.onContainerLayout} style={{ backgroundColor: 'black', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            {this.state.playerWidth && this.state.playerHeight && this.state.aspectRatio ? (
                                <YoutubePlayer
                                    width={this.state.playerWidth}
                                    height={this.state.playerHeight}
                                    videoId={ screenParams.videoId }
                                    play={true}
                                    // volume={50}
                                    // webViewStyle={{borderWidth:3, borderColor:'red'}}
                                    webViewProps={{ allowsFullscreenVideo: false }}
                                    initialPlayerParams={{
                                        preventFullScreen: true,
                                        cc_lang_pref: "us",
                                        showClosedCaptions: false,
                                    }}
                                />
                            ) : (
                                    <ActivityIndicator
                                        size="large"
                                        animating={true}
                                        color={Colors.purple800}
                                    />
                                )}

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
