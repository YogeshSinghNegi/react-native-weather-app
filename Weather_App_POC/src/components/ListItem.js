import * as AppColors from '../utils/AppColors';

import {Image, StyleSheet, Text, View} from 'react-native';

import Moment from 'moment';
import React from 'react';

const ListItem = ({ item }) => (
    <View style={Styles.outView}>
        <View style={{...Styles.dataView,...{flex: 1}}}>
            <Text style={Styles.dataText}>{Moment(item.dt_txt,'YYYY-MM-DD h:mm:ss').format('h:mm a')}</Text>
        </View>
        <View style={{...Styles.dataView,...{flex: 1}}}>
            <Text style={Styles.tempText}>{Math.trunc(item.main.temp)} °</Text>
            
        </View>
        <Image
            style={Styles.image}
            source={{ uri: 'http://openweathermap.org/img/wn/'+item.weather[0].icon +'@2x.png'}}
        />
    </View>
);

const Styles = StyleSheet.create({
    outView: { 
        flexDirection: 'row', 
        alignItems: 'center',
        backgroundColor: AppColors.lightThemeColor,
        padding: 20
    },
    image: { 
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    dataView: { 
        // flexDirection: 'row' 
        padding: 10
    },
    dataText: { 
        fontSize: 20 
    },
    tempText: { 
        fontSize: 20 
    },
});

export default ListItem;