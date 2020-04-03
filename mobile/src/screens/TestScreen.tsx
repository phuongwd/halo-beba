import React from 'react';
import { View, SafeAreaView, Text,Button } from 'react-native';
import { NavigationStackProp, NavigationStackState } from 'react-navigation-stack';

export interface Props {
    navigation: NavigationStackProp<NavigationStackState>;
}

/**
 * Use this screen for testing.
 */
export class TestScreen extends React.Component<Props, object> {

    public render() {
        return (
            <SafeAreaView style={ {flex:1} }>
                <View style={ {flex:1, flexDirection:'column', justifyContent:'flex-start', alignItems:'stretch'} }>
                    <Text style={ {fontSize:20, textAlign:'left'} }> TestScreen </Text>
                    <Button title="About" onPress={() => {this.props.navigation.navigate('RootModalStackNavigator_AboutScreen')}} />
                </View>
            </SafeAreaView>
        );
    }

}
