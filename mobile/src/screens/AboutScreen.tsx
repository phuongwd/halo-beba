import React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import { NavigationStackProp, NavigationStackState, NavigationStackOptions } from 'react-navigation-stack';

export interface AboutScreenParams {
    showSearchInput?: boolean;
}

export interface Props {
    navigation: NavigationStackProp<NavigationStackState>;
}

/**
 * Describes who created the application.
 */
export class AboutScreen extends React.Component<Props, object> {

    public constructor(props:Props) {
        super(props);
        this.setDefaultScreenParams();
    }

    private setDefaultScreenParams() {
        let defaultScreenParams: AboutScreenParams = {
            showSearchInput: false,
        };

        if (this.props.navigation.state.params) {
            this.props.navigation.state.params = Object.assign({}, defaultScreenParams, this.props.navigation.state.params);
        } else {
            this.props.navigation.state.params = defaultScreenParams;
        }
    }

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
