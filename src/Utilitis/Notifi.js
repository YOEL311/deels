import React, { Component } from 'react';
import firebase from "react-native-firebase";
import { View, AsyncStorages, Alert } from 'react-native';

export default class Notifi extends Component {
    // state = {}
    requestPermission = async () => {
        try {
            await firebase.messaging().requestPermission();
            // User has authorised
        } catch (error) {
            // User has rejected permissions
        }
    }


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
                this.writeUserData(fcmToken, "ijhjk", "אאאאאאאא")
                // await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }
    }

    messageListener = async () => {
        this.notificationListener = firebase.notifications().onNotification((notification) => {
            const { title, body } = notification;
            console.log("1");
            this.showAlert(title, body);
        });

        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            const { title, body } = notificationOpen.notification;
            console.log(notificationOpen);
            console.log("2");

            this.showAlert(title, body);
        });

        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const { title, body } = notificationOpen.notification;
            console.log("3");

            this.showAlert(title, body);
        }

        this.messageListener = firebase.messaging().onMessage((message) => {
            console.log("4");
            console.log(JSON.stringify(message));
        });
    }

    showAlert = (title, message) => {
        Alert.alert(
            title,
            message,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ], { cancelable: false },
        )
    }



    async componentDidMount() {
        console.log("componeent did");
        this.messageListener()
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            console.log("good hasPermission");
        } else {
            console.log("not hasPermission");
        }

        this.checkPermission()
        this.writeUserData("ijljl", "ijhjk", "אאאאאאאא")
    }
    componentWillUnmount() {
        this.messageListener();
    }
    writeUserData(email, fname, lname) {
        firebase.database().ref('Users/').set({
            email,
            fname,
            lname
        }).then((data) => {
            //success callback
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
    }
    render() {
        return (
            <View></View>
        );
    }
}



