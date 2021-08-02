import * as AppStrings from '../utils/AppStrings';

export const requestApiData = (zipCode) => {
    return {
        type: AppStrings.REQUEST_API_DATA,
        payload: zipCode,
    };
};

export const receiveApiData = (data) => {
    return {
        type: AppStrings.RECEIVE_API_DATA,
        payload: data,
    };
};