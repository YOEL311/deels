import {Text, View, TextInput, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import {styles} from './StyleUser';
import {loginUser} from '../../actions/AuthActions';

import {useSelector, useDispatch} from 'react-redux';
const Login = ({navigation}) => {
  // function Login({navigation}) {
  const [email, setEmail] = useState('nofarn100@gmail.com');
  const [password, setPassword] = useState('123456');

  const toLogin = () => {
    dispatch(loginUser(email, password));
  };
  // const user = useSelector(state => state.auth.user);
  // console.log('counter', user);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          // placeholder="Email"//TODO
          placeholder="nofarn100@gmail.com"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={emailChange => setEmail(emailChange)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          // placeholder="Password"
          placeholder="123456" //TODO
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={passwordCange => setPassword(passwordCange)}
        />
      </View>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => {
          toLogin();
        }}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text>Forgot your password?</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('RegistarScreen')}>
        <Text>Register</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;
