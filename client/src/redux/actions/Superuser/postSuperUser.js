import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

export const postSuperUserRequest = () => {
  return {
    type: ACTION_TYPES.POST_SUPERUSER_REQUEST
  };
};

export const postSuperUserSuccess = (superUser) => {
  return {
    type: ACTION_TYPES.POST_SUPERUSER_SUCCESS,
    payload: superUser
  };
};

export const postSuperUserFailure = (error) => {
  return {
    type: ACTION_TYPES.POST_SUPERUSER_FAILURE,
    payload: error
  };
};

export const postSuperUser = (superUser) => {
  return async (dispatch) => {
    try {
      dispatch(postSuperUserRequest());

      const response = await axios.post('/createSuperUser/', superUser);
      const createdSuperUser = response.data;

      dispatch(postSuperUserSuccess(createdSuperUser));
    } catch (error) {
      dispatch(postSuperUserFailure(error.message));
    }
  };
};