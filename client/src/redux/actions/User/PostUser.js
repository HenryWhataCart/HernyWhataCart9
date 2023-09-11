import ACTION_TYPES from '../../actionTypes'
import axios from 'axios';

const createUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/createUser/', userData);
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