import axios from 'axios';
import { DELETE_SUPERUSER_REQUEST, DELETE_SUPERUSER_SUCCESS, DELETE_SUPERUSER_FAILURE } from '../actionType';

export const deleteSuperUserRequest = () => {
  return {
    type: DELETE_SUPERUSER_REQUEST
  };
};

export const deleteSuperUserSuccess = () => {
  return {
    type: DELETE_SUPERUSER_SUCCESS
  };
};

export const deleteSuperUserFailure = (error) => {
  return {
    type: DELETE_SUPERUSER_FAILURE,
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

      dispatch(deleteSuperUserSuccess());
    } catch (error) {
      dispatch(deleteSuperUserFailure(error.message));
    }
  };
};