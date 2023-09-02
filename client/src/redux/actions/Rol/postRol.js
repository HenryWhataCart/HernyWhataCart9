import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

const createRol = (rolData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/createRol/', rolData);

      dispatch({
        type: ACTION_TYPES.CREATE_ROL_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.CREATE_ROL_FAILURE,
        payload: error.message
      });
    }
  };
};

export default createRol;