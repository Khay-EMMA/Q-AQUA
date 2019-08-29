import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  YellowBox,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Platform,
  ActivityIndicator
} from "react-native";
import PhoneInput from "react-native-phone-input";
import Toast from "react-native-simple-toast";
import * as firebase from "firebase";
import ApiKey from "../constants/ApiKey";
export default class SupplierSignUp extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <KeyboardAvoidingView behaviour='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <TextInput
            placeholder='First Name'
            maxLength={30}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
          <TextInput
            placeholder='Last Name'
            maxLength={30}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
          <TextInput
            placeholder='Email'
            maxLength={40}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
          <TextInput
            placeholder='Water Source'
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
          <TextInput
            placeholder='Phone Number'
            keyboardType='numeric'
            maxLength={11}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
          <TextInput
            placeholder='Location'
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
          <TextInput
            placeholder='vehicle Number'
            maxLength={10}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
          <TextInput
            placeholder='Password'
            maxLength={50}
            secureEntryText={true}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
          />

          <TouchableOpacity>
            <Text>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60
  },
  inputField: {
    backgroundColor: "#F3F3F3",
    width: 302,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginVertical: 9
  }
});
