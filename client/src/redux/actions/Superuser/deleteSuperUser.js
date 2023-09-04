import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'


export const deleteSuperUserRequest = () => {
  return {
    type: ACTION_TYPES.DELETE_SUPERUSER_REQUEST
  };
};

export const deleteSuperUserSuccess = (userId) => {
  return {
    type: ACTION_TYPES.DELETE_SUPERUSER_SUCCESS,
    payload:userId
  };
};

export const deleteSuperUserFailure = (error) => {
  return {
    type: ACTION_TYPES.DELETE_SUPERUSER_FAILURE,
    payload: error
  };
};

export const deleteSuperUser = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(deleteSuperUserRequest());

      const url = `http://localhost:3001/deleteSuperUser/${userId}`;

      // Realizar la petición DELETE a la API
      await axios.delete(url);

      dispatch(deleteSuperUserSuccess(userId));
    } catch (error) {
      dispatch(deleteSuperUserFailure(error.message));
    }
  };
};