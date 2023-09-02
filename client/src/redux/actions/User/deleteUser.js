import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/deleteUser/${id}`);
      
      dispatch({
        type: ACTION_TYPES.DELETE_USER_SUCCESS,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.DELETE_USER_FAILURE,
        payload: error.message
      });
    }
  };
};

export default deleteUser;