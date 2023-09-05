import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

export const createBusinessRequest = () => {
  return {
    type: ACTION_TYPES.CREATE_BUSINESS_REQUEST,
  };
};

export const createBusinessSuccess = () => {
  return {
    type: ACTION_TYPES.CREATE_BUSINESS_SUCCESS,
  };
};

export const createBusinessFailure = (error) => {
  return {
    type: ACTION_TYPES.CREATE_BUSINESS_FAILURE,
    payload: error,
  };
};

export const createBusiness = (business) => {
  return async (dispatch) => {
    try {
      dispatch(createBusinessRequest());
      const url = 'http://localhost:3001/createBusiness/';
      const response = await axios.post(url, business);
      const createBusiness = response.data;
      dispatch({
        type:ACTION_TYPES.CREATE_BUSINESS_SUCCESS,
        payload:createBusiness
      });
    } catch (error) {
      dispatch(createBusinessFailure(error.message));
    }
  };
};