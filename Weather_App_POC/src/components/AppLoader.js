import * as AppColors from '../utils/AppColors';

import { ActivityIndicator, StyleSheet, View } from  'react-native';

import React from 'react';

const AppLoader = (props) => {
    return (
        <View style = {Styles.activity}>
            <ActivityIndicator style = {{color: AppColors.darkColor}}/>
        </View>
    );
};

const Styles = StyleSheet.create({
    activity: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AppLoader;