import React, { useState, createContext, useContext, useEffect } from 'react';
import { StyleSheet, View, Button, Text, StatusBar } from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { DrawerNavigatorItems } from 'react-navigation-drawer';


// const ss = sdd();


const BlueContext = createContext(true);

const HomeScreen = ({ navigation }) => {
    const { blue, setBlue } = useContext(BlueContext);
    const bg = blue ? 'blue' : 'red';

    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={[styles.body, { backgroundColor: bg }]}>
                <Text
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                    style={styles.sectionTitle}>
                    Open Drawer
        </Text>
                <Text style={styles.sectionDescription}>
                    Click <Text style={styles.highlight}>Open Drawer</Text> and click the
                    button to change the color. Then come back here and check it out!
        </Text>

                <Text
                    onPress={() => {
                        setBlue(!blue);
                    }}
                    style={{ fontSize: 22, color: 'white' }}>
                    Click me to toggle my color
        </Text>
            </View>
        </>
    );
};

class HomeScreen2 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}
const CustomDrawer = props => {
    const { blue, setBlue } = useContext(BlueContext);
    const textColor = blue ? 'blue' : 'red';
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <DrawerNavigatorItems {...props} />
            <Text style={{ fontSize: 32 }}>Drawer</Text>
            <Text
                onPress={() => {
                    console.log(props);
                    setBlue(!blue);
                }}
                style={{ fontSize: 22, color: textColor }}>
                Click me to toggle my color
      </Text>
            <Button title={"exit"} onPress={() => {
                //do exit
            }} ></Button>


        </View>
    );

};

const DrawerNavigation = createDrawerNavigator(
    {
        Home: HomeScreen,
        Home2: HomeScreen2,

    },
    {
        contentComponent: CustomDrawer,
    },
);

const ApplicationContainer = createAppContainer(DrawerNavigation);

export default () => {
    const [blue, setBlue] = useState(true);
    return (
        <BlueContext.Provider value={{ blue, setBlue }}>
            <ApplicationContainer />
        </BlueContext.Provider>
    );
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


