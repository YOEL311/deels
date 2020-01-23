import React from 'react';
import { StyleSheet, View, ScrollView, Text, StatusBar } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import IconAnt from "react-native-vector-icons/AntDesign";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import toGoOut from './LogOut'
export const CustomDrawer = props => {
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(27, 31,35, 0.1)' }}>
            <IconAnt
                style={{ alignSelf: 'flex-end', paddingVertical: 10, paddingHorizontal: 20 }}
                onPress={() => props.navigation.closeDrawer()}
                name="close"
                color={'black'}
                size={30}
            />
            <ScrollView persistentScrollbars>
                <DrawerNavigatorItems {...props} />
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                <View style={{ justifyContent: 'center', padding: 20 }}>
                    <IconSimple style={styles.iconStyle}
                        onPress={() => props.navigation.closeDrawer()}
                        name="logout"
                        color={'gray'}
                        size={30}
                        onPress={() => toGoOut()}
                    />
                    <Text style={styles.textIconStyle}>
                        LogOut
                    </Text>
                </View>

                <View style={{ justifyContent: 'center', padding: 20 }}>
                    <IconSimpleLine style={styles.iconStyle}
                        onPress={() => props.navigation.closeDrawer()}
                        name="settings"
                        color={'gray'}
                        size={30}
                        onPress={() => props.navigation.navigate('SettingScreen')}
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