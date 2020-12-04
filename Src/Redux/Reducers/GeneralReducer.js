import {
    GET_CONTACT_DATA,
    GET_CONTACT_DATA_SUCCESS,
    GET_CONTACT_DATA_FAIL,
    UPDATE_CONTACT_DATA,
  } from '../types';
  
  const INITIAL_STATE = {
    loading: false,
    contactData: null,
  };
  
  export default (state, action) => {
    let currentState = state;
    if (state == null) {
      currentState = INITIAL_STATE;
    }
  
    switch (action.type) {
      case GET_CONTACT_DATA:
        return {
          ...currentState,
          loading: true,
          contactData: null,
        };
  
      case GET_CONTACT_DATA_SUCCESS:
        return {
          ...currentState,
          loading: false,
          contactData: action.payload,
        };
  
      case UPDATE_CONTACT_DATA:
        return {
          ...currentState,
          contactData: action.payload,
        };
  
      default:
        return currentState;
    }
  };
  