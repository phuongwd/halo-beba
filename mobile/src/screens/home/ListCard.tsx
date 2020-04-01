import React from 'react';
import { View, Text, StyleProp, StyleSheet, ViewStyle, TextStyle, ImageStyle, Platform } from 'react-native';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';
import { scale } from 'react-native-size-matters';
import { themes } from "../../themes/themes";
import { Surface, List, Divider } from "react-native-paper";

export interface Props {
    style?: StyleProp<ViewStyle>;
}

export interface State {

}

/**
 * Card with article titles that can be pressed, or FAQ questions that when
 * pressed will expand the answer.
 */
export class ListCard extends React.Component<Props, State> {
    static defaultProps: Props = {

    };

    constructor(props: Props) {
        super(props);
        this.initState();
    }

    private initState() {
        let state: State = {

        };

        this.state = state;
    }

    public render() {
        return (
            <ThemeConsumer>
                {(themeContext: ThemeContextValue) => (
                    <Surface style={[styles.container, this.props.style]}>
                        <List.Item
                            title="First Item"
                            right={props => <List.Icon {...props} icon="chevron-right" />}
                            onPress={() => {}}
                            style={{paddingVertical:3}}
                        />

                        <Divider style={{marginHorizontal:scale(15)}} />

                        <List.Item
                            title="Second Item"
                            right={props => <List.Icon {...props} icon="chevron-right" />}
                            onPress={() => {}}
                            style={{paddingVertical:3}}
                        />
                    </Surface>
                )}
            </ThemeConsumer>
        );
    }
}

export interface ListCardStyles {
    [index: string]: ViewStyle | TextStyle | ImageStyle;
    container: ViewStyle;
}

const styles = StyleSheet.create<ListCardStyles>({
    container: {
        alignSelf: 'stretch',

        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',

        backgroundColor: themes.getCurrentTheme().theme.variables?.colors?.surface,
        paddingVertical: scale(10),
        borderRadius: scale(7),

        // shadowColor: 'black',
        // shadowOffset: {width:0, height:0},
        // shadowOpacity: 0.2,
        elevation: Platform.OS === 'ios' ? 4 : 10,
    },
});
