import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

export const putSuperUserRequest = () => {
  return {
    type: ACTION_TYPES.PUT_SUPERUSER_REQUEST
  };
};

export const putSuperUserSuccess = (updatedFields) => {
  return {
    type: ACTION_TYPES.PUT_SUPERUSER_SUCCESS,
    payload: updatedFields
  };
};

export const putSuperUserFailure = (error) => {
  return {
    type: ACTION_TYPES.PUT_SUPERUSER_FAILURE,
    payload: error
  };
};

export const putSuperUser = (userId, updatedFields) => {
  return async (dispatch) => {
    try {
      dispatch(putSuperUserRequest());

      await axios.put(`/updateSuperuser/${userId}`, updatedFields);
      dispatch(putSuperUserSuccess(updatedFields));
    } catch (error) {
      dispatch(putSuperUserFailure(error.message));
    }
  };
};