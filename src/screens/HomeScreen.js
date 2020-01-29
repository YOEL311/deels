import React from 'react'
import { View, Button, StatusBar, Text } from 'react-native'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <StatusBar backgroundColor="#374a65" barStyle="light-content" />
                
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('DetailsScreen')}
                />
                <Button
                    title="Toggle draewr"
                    onPress={() => this.props.navigation.toggleDrawer()}
                />

            </View>
        );
    }
}
