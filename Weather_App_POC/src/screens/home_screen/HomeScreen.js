import * as AppStrings from '../../utils/AppStrings';

import { Alert, Text, View } from 'react-native';
import React, { useState } from 'react';

import {Styles} from './Styles';
import WeatherButton from '../../components/WeatherButton';
import WeatherTextInput from '../../components/WeatherTextInput';

const HomeScreen = (props) => {

  const [enteredZipCode, setEnteredZipCode] = useState('');

    const zipCodeTextInputHandler = (value) => {
      setEnteredZipCode(value);
    }

  const getWeatherBtnHandler = () => {
    const zipCode = enteredZipCode.trim();
    if (zipCode == '') {
      Alert.alert(
        AppStrings.ALERT_HEADER,
        AppStrings.ALERT_ZIP_EMPTY
      );
      return;
    } else if (zipCode.length != 6) {
      Alert.alert(
        AppStrings.ALERT_HEADER,
        AppStrings.ALERT_ZIP_NOT_VALID_LENGTH
      );
      return;
    }
    props.navigation.navigate(AppStrings.WEATHER, {zipCode: enteredZipCode});
  }

  //This code did not run
  //Need to check why
  /*
  const validateZipCode = () => {
    const errorText = '';
    const isValid = true;
    const zipCode = enteredZipCode.trim();
    if (zipCode == '') {
      errorText = 'Please enter Zip Code to continue.';
      isValid = false;
    } else if (zipCode.length != 6) {
      errorText = 'Please enter 6 digit Zip Code to continue.';
      isValid = false;
    }
    if (!isValid) {
      Alert.alert(
        'Zip Code Error!',
        errorText
      );
    }
    return isValid;
  }
  */
    return (
      <View style={Styles.itemContainer}>
        <Text style = {Styles.welcome}>Welcome to Weather App</Text>
        <WeatherTextInput
          value = {enteredZipCode}
          onChangeText = {zipCodeTextInputHandler}
        />
        <WeatherButton
          onPress = {getWeatherBtnHandler}
        />
      </View>
    );
};

export default HomeScreen;