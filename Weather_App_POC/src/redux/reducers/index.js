import WeatherReducer from './WeatherReducer';
import { combineReducers } from 'redux';

const AppReducers = combineReducers({
    weather: WeatherReducer,
});

export default AppReducers;