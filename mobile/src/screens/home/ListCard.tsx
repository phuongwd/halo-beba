import React from 'react';
import { View, Text, StyleProp, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';
import { scale } from 'react-native-size-matters';
import { themes } from "../../themes/themes";

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
            {(themeContext:ThemeContextValue) => (
                <View style={ [styles.container, themeContext.theme.contentContainer, this.props.style] }>
                    <Text>Component: ListCard</Text>
                </View>
            )}
            </ThemeConsumer>
        );
    }
}

export interface ListCardStyles {
    [index:string]: ViewStyle | TextStyle | ImageStyle;
    container: ViewStyle;
}

const styles = StyleSheet.create<ListCardStyles>({
    container: {
        alignSelf: 'stretch',

        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',

        backgroundColor: themes.getCurrentTheme().theme.variables?.colors?.surface,
        padding: scale(5),
        borderRadius: scale(7),
        
        shadowColor: 'black',
        shadowOffset: {width:0, height:0},
        shadowOpacity: 0.2,
        elevation: 2,
    },
});
