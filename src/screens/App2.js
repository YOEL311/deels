import React, { useState, createContext, useContext, useEffect } from 'react';
import { StyleSheet, View, Button, Text, StatusBar } from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { HomeScreen, DetailsScreen } from '../router/routers'

import Icon from "react-native-vector-icons/AntDesign";


export const CustomDrawer = props => {
    return (
        <View style={{ flex: 1, }}>
            <Icon
                style={{ paddingLeft: 10 }}
                onPress={() => props.navigation.closeDrawer()}
                name="close"
                size={30}
            />
            <DrawerNavigatorItems {...props} />
        </View>
    );

};

const DrawerNavigation = createDrawerNavigator(
    {
        Home: HomeScreen,
        Home2: DetailsScreen,

    },
    {
        contentComponent: CustomDrawer,
    },
);

const ApplicationContainer = createAppContainer(DrawerNavigation);

export default () => {
    return <ApplicationContainer />
};


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: 'center',
        padding: 16,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: "white",
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: "white",
    },
    highlight: {
        fontWeight: '700',
    },
});


