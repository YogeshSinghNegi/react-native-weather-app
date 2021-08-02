import * as AppColors from '../utils/AppColors';
import * as AppStrings from '../utils/AppStrings';

import { StyleSheet, TextInput } from "react-native";

import React from 'react';

const WeatherTextInput = (props) => {

    const zipCodeTextInputHandler = (value) => {
      props.onChangeText(value);
    };

    return (
        <TextInput
          placeholder = {AppStrings.ENTER_ZIP_CODE}
          style = {Styles.input}
          placeholderTextColor = {AppColors.darkColor}
          keyboardType = {'number-pad'}
          returnKeyType = {'done'}
          onChangeText = {zipCodeTextInputHandler}
          value = {props.value}
        /> 
    );
};

const Styles = StyleSheet.create({
  input: {
    width: '80%',
    color: AppColors.darkColor,
    marginBottom: 30,
    height: 45,
    textAlign: 'center',
    borderColor: AppColors.darkColor,
    borderWidth: 1,
    borderRadius: 22.5,
  },
});

export default WeatherTextInput;