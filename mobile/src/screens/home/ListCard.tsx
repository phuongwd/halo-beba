import React from 'react';
import { View, Text, StyleProp, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';

export interface Props {
    style?: StyleProp<ViewStyle>;
}

export interface State {
    
}

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
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'orange',
        padding: 15,
    },
});
