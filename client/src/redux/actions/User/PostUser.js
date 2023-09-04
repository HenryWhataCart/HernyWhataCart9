import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'


const createUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/createUser/', userData);

      dispatch({
        type: ACTION_TYPES.CREATE_USER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.CREATE_USER_FAILURE,
        payload: error.message
      });
    }
  };
};

export default createUser;