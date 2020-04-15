import * as React from 'react';
import { View, Text } from 'react-native';


export default class Online_Suche extends React.Component {

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: 'Online-Suche' });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>ONLINE-SUCHE</Text>
            </View>
        );
    }
}