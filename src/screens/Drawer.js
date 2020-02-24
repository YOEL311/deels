import React from 'react';
import {StyleSheet, View, ScrollView, Text, StatusBar} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import toGoOut from './LogOut';
import {loginUser, logOUtUser} from '../actions';
const CustomDrawer = props => {
  console.log(props);
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(27, 31,35, 0.1)'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <IconAnt
          style={{
            alignSelf: 'flex-end',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
          onPress={() => props.navigation.closeDrawer()}
          name="close"
          color={'black'}
          size={30}
        />

        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            paddingHorizontal: 20,
          }}>
          שלום {props.user !== null ? props?.user?.user?.displayName : 'אורח'}
        </Text>
      </View>

      <ScrollView persistentScrollbars>
        <DrawerNavigatorItems {...props} />
      </ScrollView>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {btnToggleLogInOut(props)}
        <View style={{justifyContent: 'center', padding: 20}}>
          <IconSimpleLine
            style={styles.iconStyle}
            name="settings"
            color={'gray'}
            size={30}
            onPress={() => props.navigation.navigate('SettingScreen')}
          />
          <Text style={styles.textIconStyle}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    padding: 20,
  },
  textIconStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'gray',
    fontSize: 20,
  },
});

import {useState} from 'react';

const btnToggleLogInOut = props => {
  const toogleBtn = props.user === null ? 'login' : 'logout';
  return (
    <View style={{justifyContent: 'center', padding: 20}}>
      <IconSimple
        style={styles.iconStyle}
        name={toogleBtn}
        color={'gray'}
        size={30}
        onPress={() => {
          if (props.user === null) {
            return props.navigation.navigate('SignScreen');
            // props.loginUser({ email: "nofarn100@gmail.com", password: "123456" })
          } else {
            return props.logOUtUser(props.navigation);
          }
        }}
      />
      <Text style={styles.textIconStyle}>{toogleBtn}</Text>
    </View>
  );
};

import {connect} from 'react-redux';
const mapStateToProps = state => {
  const {error, loading, user} = state.auth;
  console.log('state', user);
  user && console.log(user?.user?.displayName);
  return {error, loading, user};
};

export default connect(mapStateToProps, {loginUser, logOUtUser})(CustomDrawer);
