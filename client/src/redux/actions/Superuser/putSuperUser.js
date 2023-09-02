import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

export const putSuperUserRequest = () => {
  return {
    type: ACTION_TYPES.PUT_SUPERUSER_REQUEST
  };
};

export const putSuperUserSuccess = () => {
  return {
    type: ACTION_TYPES.PUT_SUPERUSER_SUCCESS
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

      const url = `http://localhost:3001/updateSuperuser/${userId}`;

      // Realizar la petición PUT a la API enviando el objeto con los campos actualizados
      await axios.put(url, updatedFields);

      dispatch(putSuperUserSuccess());
    } catch (error) {
      dispatch(putSuperUserFailure(error.message));
    }
  };
};