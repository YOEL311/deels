import React from 'react';
import { StyleSheet, View, ScrollView, Text, StatusBar } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import IconAnt from "react-native-vector-icons/AntDesign";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import toGoOut from './LogOut'
const CustomDrawer = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(27, 31,35, 0.1)' }}>
            <IconAnt
                style={{ alignSelf: 'flex-end', paddingVertical: 10, paddingHorizontal: 20 }}
                // onPress={() => props.navigation.closeDrawer()}
                name="close"
                color={'black'}
                size={30}
            />
            <ScrollView persistentScrollbars>
                {/* <DrawerNavigatorItems {...props} /> */}
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                {btnToggleLogInOut()}

                <View style={{ justifyContent: 'center', padding: 20 }}>
                    <IconSimpleLine style={styles.iconStyle}
                        name="settings"
                        color={'gray'}
                        size={30}
                    // onPress={() => props.navigation.navigate('SettingScreen')}
                    />
                    <Text style={styles.textIconStyle}>
                        Settings
                </Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    iconStyle: {
        padding: 20
    },
    textIconStyle: {
        color: 'gray',
        fontSize: 20
    }
})

import { useState } from 'react';

const btnToggleLogInOut = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    return (
        <View style={{ justifyContent: 'center', padding: 20 }}>
            <IconSimple style={styles.iconStyle}
                name={isLogIn ? "logout" : "login"}
                color={'gray'}
                size={30}
                onPress={() => { setIsLogIn(!isLogIn) }}
            />
            <Text style={styles.textIconStyle}>
                {isLogIn ? "logOut" : "logIn"}
            </Text>
        </View>
    )
}

export default CustomDrawer;


// import { connect } from 'react-redux';
// const mapStateToProps = () => {
//     // const { friends } = state || "hkjh"
//     return ({ sss: "ssgs " })
// };
// export default connect(mapStateToProps)(CustomDrawer);