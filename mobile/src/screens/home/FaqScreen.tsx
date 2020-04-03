import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ViewStyle } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';
import { ThemeContextValue, ThemeConsumer } from '../../themes/ThemeContext';

export interface Props {
    navigation: NavigationStackProp<NavigationStackState>;
}

export class FaqScreen extends React.Component<Props, object> {

    public constructor(props:Props) {
        super(props);
    }

    public render() {
        return (
            <ThemeConsumer>
            {(themeContext:ThemeContextValue) => (
                <SafeAreaView style={ [styles.container, themeContext.theme.contentContainer] }>
                    <View style={ {backgroundColor:'white', flex:1, flexDirection:'column', justifyContent:'flex-start', alignItems:'stretch'} }>
                        <Text style={ {fontSize:20, textAlign:'left'} }>
                            FaqScreen
                        </Text>
                    </View>
                </SafeAreaView>
            )}
            </ThemeConsumer>
        );
    }

}

export interface FaqScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<FaqScreenStyles>({
    container: {
        flex: 1,
    },
});
