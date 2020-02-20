import React, {Component} from 'react';
import {Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';
import {styles} from './StyleUser';

// import IconFontisto from 'react-native-vector-icons/Fontisto';
// import { Icon } from 'native-base';

export default class RegistarView extends Component {
  constructor(props) {
    super(props);
    state = {
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Registar</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('SignScreen')}>
          <Text>alrady registar?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
