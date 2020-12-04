import {
    GET_CONTACT_DATA,
    GET_CONTACT_DATA_SUCCESS,
    GET_CONTACT_DATA_FAIL
  } from '../types';

  const INITIAL_STATE = {
      loading: false,
      contactData: null,
  }

  export default (state, action) => {
    let currentState = state  
    if(state == null) currentState = INITIAL_STATE

    switch(action.type){
        case GET_CONTACT_DATA:
            return{
                ...state,
                loading:true,
                contactData: null
            }
            
        case GET_CONTACT_DATA_SUCCESS:
            return{
                ...state,
                loading:true,
                contactData: action.payload
            }

        default:
            return currentState
    }
  }