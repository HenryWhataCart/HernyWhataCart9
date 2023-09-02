import axios from 'axios';
import { POST_SUPERUSER_REQUEST, POST_SUPERUSER_SUCCESS, POST_SUPERUSER_FAILURE } from '../types';

export const postSuperUserRequest = () => {
  return {
    type: POST_SUPERUSER_REQUEST
  };
};

export const postSuperUserSuccess = (superUser) => {
  return {
    type: POST_SUPERUSER_SUCCESS,
    payload: superUser
  };
};

export const postSuperUserFailure = (error) => {
  return {
    type: POST_SUPERUSER_FAILURE,
    payload: error
  };
};

export const postSuperUser = (superUser) => {
  return async (dispatch) => {
    try {
      dispatch(postSuperUserRequest());

      const url = 'http://localhost:3001/createSuperUser/';

      // Realizar la petición POST a la API enviando el objeto del superusuario
      const response = await axios.post(url, superUser);

      const createdSuperUser = response.data;

      dispatch(postSuperUserSuccess(createdSuperUser));
    } catch (error) {
      dispatch(postSuperUserFailure(error.message));
    }
  };
};