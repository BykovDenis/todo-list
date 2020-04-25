import handleActions from 'redux-actions/lib/handleActions';
import initialState from '../data';
import { GET_AIRLINES_DATA_LOADING, GET_AIRLINES_DATA_SUCCESS, GET_AIRLINES_DATA_ERROR } from '../constants';

export default handleActions(
  {}, initialState);
