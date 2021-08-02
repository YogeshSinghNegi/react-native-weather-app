import * as AppStrings from '../utils/AppStrings';

import { call, put, takeLatest } from 'redux-saga/effects';

import NetworkHelper from '../utils/NetworkHelper';
import { receiveApiData } from './actions';

// worker Saga: will be fired on AppStrings.REQUEST_API_DATA actions
function* getWeatherAPIData(action) {
  try {
    // do api call
    const data = yield call(NetworkHelper.getWeatherData, action.payload);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of weather data. If "AppStrings.REQUEST_API_DATA" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

export default function* mySaga() {
  yield takeLatest(AppStrings.REQUEST_API_DATA, getWeatherAPIData);
}