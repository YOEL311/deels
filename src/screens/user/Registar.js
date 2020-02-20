import React, {Component} from 'react';
import {Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';
import {styles} from './StyleUser';
export default class RegistarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Registar</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />
        </View>

        <View style={styles.inputContainer}>
          {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <View style={styles.inputContainer}>
          {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Registar</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() =>
            this.props.navigation.navigate('ForgotPasswordScreen')
          }>
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          // onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')}
          onPress={() => this.props.navigation.navigate('SignScreen')}>
          <Text>alrady registar?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
