import React, { Component } from 'react';
import firebase from "react-native-firebase";
import { View, AsyncStorages } from 'react-native';

export default class Notifi extends Component {
    // state = {}

    async checkPermission() {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            this.getToken();
        } else {
            this.requestPermission();
        }
    }

    //Get Device Registration Token
    async getToken() {
        let fcmToken
        // await AsyncStorage.getItem('fcmToken');
        if (true) {
            fcmToken = await firebase.messaging().getToken();
            if (fcmToken) {
                console.log('fcmToken:', fcmToken);
                // await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }
    }


    async    componentDidMount() {
        console.log("componeent did");

        // firebase.initializeApp();
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            console.log("good hasPermission");
            // user has permissions
        } else {
            console.log("not hasPermission");

            // user doesn't have permission
        }

        this.getToken();
        this.checkPermission()









    }

    render() {
        return (
            <View></View>
        );
    }
}



