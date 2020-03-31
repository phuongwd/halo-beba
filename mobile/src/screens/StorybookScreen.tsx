import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle, StatusBar, View } from 'react-native';
import { NavigationStackProp, NavigationStackState } from 'react-navigation-stack';
import { GestureResponderEvent } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Storybook from '../../storybook';

export interface Props {
    navigation: NavigationStackProp<NavigationStackState>;
}

export class StorybookScreen extends React.Component<Props, object> {

    public constructor(props:Props) {
        super(props);
    }

    private onCloseIconPress(e:GestureResponderEvent) {
        this.props.navigation.goBack();
    };

    public render() {
        return (
            <SafeAreaView style={ styles.container }>
                <StatusBar barStyle="dark-content" />
                <View style={{flex:1}}>
                    <Storybook />
                    <Icon
                        name={ "close" }
                        style={{ fontSize:30, color:"white", position:'absolute', top:10, right:5, shadowOffset:{width:1,height:1}, shadowColor:'black', shadowOpacity:0.7 }}
                        onPress={ (e) => {this.onCloseIconPress(e)} }
                    />
                </View>
            </SafeAreaView>
        );
    }

}

export interface StorybookScreenStyles {
    container?: ViewStyle;
}

const styles = StyleSheet.create<StorybookScreenStyles>({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
});
