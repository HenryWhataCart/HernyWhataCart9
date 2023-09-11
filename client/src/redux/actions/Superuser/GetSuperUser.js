import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

export const getSuperUserRequest = () => {
  return {
    type: ACTION_TYPES.GET_SUPERUSER_REQUEST
  };
}; 

export const getSuperUserSuccess = (superUser) => {
  return {
    type: ACTION_TYPES.GET_SUPERUSER_SUCCESS,
    payload: superUser
  };
};

export const getSuperUserFailure = (error) => {
  return {
    type: ACTION_TYPES.GET_SUPERUSER_FAILURE,
    payload: error
  };
};

export const getSuperUser = (name = '') => {
  return async (dispatch) => {
    try {
       dispatch(getSuperUserRequest());
      const response = await axios.get(`/getSuperUser/?name=${name}`);
      const superUser = response.data;

      dispatch(getSuperUserSuccess(superUser));
    } catch (error) {
      dispatch(getSuperUserFailure(error.message));
    }
  };
};
