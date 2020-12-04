import { configure } from '@react-native-community/netinfo'
import {combineReducers} from 'redux'
import generalReducer from './GeneralReducer'
import configureStore from '../CreateStore';

export const reducers = combineReducers({
    general: generalReducer
})

export default () => {
    const {store} = configureStore(reducers);
    return store;
}