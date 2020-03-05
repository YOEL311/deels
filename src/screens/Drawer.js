/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import {logOUtUser} from '../actions';
import {useSelector, useDispatch} from 'react-redux';
import I18n from '../Utilitis/i18n';

const Drawer = props => {
  const user = useSelector(state => state.auth.user);
  const displayNameUser = user?.user.displayName;

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
          {I18n.t('hello')}{' '}
          {displayNameUser !== undefined ? displayNameUser : I18n.t('juest')}
        </Text>
      </View>
      <ScrollView persistentScrollbars>
        <DrawerNavigatorItems {...props} />
      </ScrollView>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {BtnToggleLogInOut(props)}
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

const BtnToggleLogInOut = ({navigation}) => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const isLogin = user !== null ? true : false;
  const toogleBtn = !isLogin ? 'login' : 'logout';

  return (
    <View style={{justifyContent: 'center', padding: 20}}>
      <IconSimple
        style={styles.iconStyle}
        name={toogleBtn}
        color={'gray'}
        size={30}
        onPress={() => {
          if (!isLogin) {
            navigation.navigate('SignScreen');
          } else {
            dispatch(logOUtUser(navigation));
          }
        }}
      />
      <Text style={styles.textIconStyle}>{toogleBtn} </Text>
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
export default Drawer;
