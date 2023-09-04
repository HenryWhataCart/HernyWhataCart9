import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

const getRol = (name = '') => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/searchRol/?name=${name}`);

      dispatch({
        type: ACTION_TYPES.GET_ROL_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.GET_ROL_FAILURE,
        payload: error.message
      });
    }
  };
};

export default getRol;