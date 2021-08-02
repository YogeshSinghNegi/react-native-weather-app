import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import AppLoader from '../../components/AppLoader';
import {Styles} from './Styles';
import { View } from  'react-native';
import WeatherList from '../../components/WeatherList';
import {requestApiData} from '../../redux/actions';

const WeatherScreen = (props) => {

    const dispatch = useDispatch();
    const weatherData = useSelector(store => store.weather);

    useEffect(() => {
      props.navigation.setOptions({
        title: props.route.name + ' for ' + props.route.params.zipCode
      });
      dispatch(requestApiData(props.route.params.zipCode));
    }, []);
    
    let weatherTable = <AppLoader />;

    if (Object.keys(weatherData).length > 0) {
        weatherTable = <WeatherList data = {weatherData} />;
    }

    return (
      <View style = {Styles.outView}>
        {weatherTable}
      </View>
    );
};

export default WeatherScreen;