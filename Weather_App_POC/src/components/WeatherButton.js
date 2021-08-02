import * as AppColors from '../utils/AppColors';
import * as AppStrings from '../utils/AppStrings';

import { Button } from 'react-native-elements';
import React from 'react';
import { StyleSheet } from 'react-native';

const WeatherButton = (props) => {

    return (
        <Button 
          title = {AppStrings.GET_WEATHER} 
          buttonStyle = {Styles.button}
          onPress = {props.onPress}
        />
    );
};

const Styles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.darkColor,
        color: AppColors.whiteColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 45,
        borderRadius: 22.5,
        width: 200,
        fontSize: 18,
        textAlign: 'center',
      }
  });

export default WeatherButton;