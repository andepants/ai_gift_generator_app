import React from 'react';
import {SafeAreaView, Text, TouchableHighlight, Button} from 'react-native';

const LoginScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: Login</Text>
    <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
  </SafeAreaView>
);

export default LoginScreen;