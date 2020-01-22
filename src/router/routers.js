

import { Button, View, StyleSheet, Image, Text } from 'react-native';
import React, { useState, createContext, useContext } from 'react';
// import Icon from 'react-native-vector-icons'
import Icon from "react-native-vector-icons/Entypo";
// import {Icon, Header} from 'react-native-elements'


class HomeScreen extends React.Component {
    // static navigationOptions = {
        // title: 'Details',
    //   };
   
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('DetailsScreen')}
                />

                <Button
                    title="Toggle draewr"
                    onPress={() => this.props.navigation.toggleDrawer()}
                />
                <Icon
                    name="menu"
                    color="#ccc"
                    size={25}
                    style={{marginRight:10}} 
                />
                <Icon name="menu" 
                 style={{marginRight:10}} 
                size={30} color="#900" />

            </View>
        );
    }
}

class DetailsScreen extends React.Component {

    static navigationOptions = ({ navigation}) => ({
        title: 'Notifications',
        headerTitle: 'Notifications',
      });
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>

                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
export { HomeScreen, DetailsScreen }