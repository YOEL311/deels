import React, {Component} from 'react';
import {Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';
// import IconFontisto from 'react-native-vector-icons/Fontisto';
// import { Icon } from 'native-base';
import {styles} from './StyleUser';
import {loginUser} from '../../actions/AuthActions';
export class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'nofarn100@gmail.com',
      password: '123456',
    };
  }

  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };
  login() {
    const {email, password} = this.state;
    this.props.loginUser(email, password);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            // placeholder="Email"
            placeholder="nofarn100@gmail.com"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            // placeholder="Password"
            placeholder="123456"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => {
            this.login();
          }}
          // this.onClickListener('login')}>
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')}
          // onPress={() => this.onClickListener('restore_password')}
        >
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          // this.props.navigation.navigate('RegistarScreen')}
          onPress={() => this.onClickListener('register')}>
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

import {connect} from 'react-redux';
const mapStateToProps = state => {
  const {error, loading, user} = state.auth;
  console.log('state', user);
  return {error, loading, user};
};

export default connect(mapStateToProps, {loginUser})(LoginView);
