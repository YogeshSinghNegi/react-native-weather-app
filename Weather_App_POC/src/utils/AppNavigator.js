import * as AppColors from '../utils/AppColors';
import * as AppStrings from './AppStrings';

import HomeScreen from '../screens/home_screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import WeatherScreen from '../screens/weather_screen/WeatherScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name = {AppStrings.HOME}
                component = {HomeScreen}
                options = {{
                    title: AppStrings.HOME, 
                    headerTintColor: AppColors.darkColor
                }}
                />
            <Stack.Screen 
                name = {AppStrings.WEATHER}
                component = {WeatherScreen}
                options = {{
                    title: AppStrings.WEATHER,
                    headerTintColor: AppColors.darkColor
                }}
                />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;