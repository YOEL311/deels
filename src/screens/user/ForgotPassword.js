import {Text, View, TextInput, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import {styles} from './StyleUser';
import {forgotPassword} from '../../actions/AuthActions';

import {useDispatch} from 'react-redux';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('yoel301@gmail.com');

  const toSendEmailRessetPassword = () => {
    dispatch(forgotPassword(email));
  };
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

      <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => {
          toSendEmailRessetPassword();
        }}>
        <Text style={styles.loginText}>Send email to reset password </Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('SignScreen')}>
        <Text>Login</Text>
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
