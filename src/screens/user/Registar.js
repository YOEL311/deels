import {Text, View, TextInput, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import {styles} from './StyleUser';
import {loginUser, registarUser} from '../../actions/AuthActions';

import {useSelector, useDispatch} from 'react-redux';

function Register({navigation}) {
  const [name, setName] = useState('yoel');
  const [email, setEmail] = useState('yoel301@gmail.com');
  const [password, setPassword] = useState('123456');

  const toRegistar = () => {
    dispatch(registarUser(email, password, name));
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
          placeholder="Yoour Name"
          // keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={nameChange => setName(nameChange)}
        />
      </View>

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
        // onPress={() => this.onClickListener("login")}
        onPress={() => {
          toRegistar();
        }}>
        <Text style={styles.loginText}>Registar</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('SignScreen')}>
        <Text>alrady registar?</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Register;
