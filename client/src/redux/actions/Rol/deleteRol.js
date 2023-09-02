import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

const deleteRol = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/deleteRol/${id}`);
      
      dispatch({
        type: ACTION_TYPES.DELETE_ROL_SUCCESS,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.DELETE_ROL_FAILURE,
        payload: error.message
      });
    }
  };
};

export default deleteRol;