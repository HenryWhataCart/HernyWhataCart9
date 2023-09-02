import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

const getUser = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/userSearch/?name=${name}`);

      dispatch({
        type: ACTION_TYPES.GET_USER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type:ACTION_TYPES. GET_USER_FAILURE,
        payload: error.message
      });
    }
  };
};

export default getUser;