import * as AppStrings from '../../utils/AppStrings';

const WeatherReducer = (state = {}, action) => {
    switch (action.type) {
        case AppStrings.RECEIVE_API_DATA:
            return action.payload;
        default:
            return state;
    }
};

export default WeatherReducer;