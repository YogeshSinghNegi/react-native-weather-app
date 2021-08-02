import Config from "react-native-config";
import React from 'react';
import axios from 'axios';

const NetworkHelper = (zipCode) => {

};

NetworkHelper.getWeatherData = (zipCode) => {
    try {
        return axios.get(Config.API_BASE_URL + 'zip=' + zipCode + '&appid=b6907d289e10d714a6e88b30761fae22')
        .then((response) => {

            ///I am interested in list only hence returning only list and saving in store 
            const data = response.data.list.reduce((listData, item) => {
                (listData[item.dt_txt.split(" ")[0]] = listData[item.dt_txt.split(" ")[0]] || []).push(item);
                return listData;
            }, {});
            const weatherArray = [];
            for (const key in data) {
                const dict = {
                "key": key, 
                "data": data[key]
                };
                weatherArray.push(dict);
            }
            return weatherArray;
        });
    } catch (e) {
        console.error(e);
    }
};

export default NetworkHelper;