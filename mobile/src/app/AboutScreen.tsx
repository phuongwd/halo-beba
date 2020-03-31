import React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import { NavigationStackProp, NavigationStackState } from 'react-navigation-stack';

export interface Props {
    navigation: NavigationStackProp<NavigationStackState>;
}

/**
 * Describes who created the application.
 */
export class AboutScreen extends React.Component<Props, object> {

    public render() {
        return (
            <SafeAreaView style={ {flex:1} }>
                <View style={ {flex:1, flexDirection:'column', justifyContent:'flex-start', alignItems:'stretch'} }>
                    <Text style={ {fontSize:20, textAlign:'left'} }> AboutScreen </Text>
                    <Button title="Go back" onPress={() => {this.props.navigation.goBack()}} />
                </View>
            </SafeAreaView>
        );
    }

}
