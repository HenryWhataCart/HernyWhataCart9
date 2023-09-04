import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

export const getBusinessRequest = () => {
  return {
    type: ACTION_TYPES.GET_BUSINESS_REQUEST,
  };
};

export const getBusinessSuccess = (businesses) => {
  return {
    type: ACTION_TYPES.GET_BUSINESS_SUCCESS,
    payload: businesses,
  };
};

export const getBusinessFailure = (error) => {
  return {
    type: ACTION_TYPES.GET_BUSINESS_FAILURE,
    payload: error,
  };
};

export const getBusiness = (name='') => {
  return async (dispatch) => {
    try {
      dispatch(getBusinessRequest());

      const url = `http://localhost:3001/searchBusiness/?name=${name}`;

      const response = await axios.get(url);

      const businesses = response.data;

      dispatch(getBusinessSuccess(businesses));
    } catch (error) {
      dispatch(getBusinessFailure(error.message));
    }
  };
};