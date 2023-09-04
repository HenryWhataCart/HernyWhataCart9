import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

const deleteBusiness = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/deleteBusiness/${id}`);
      
      dispatch({
        type: ACTION_TYPES.DELETE_BUSINESS_SUCCESS,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.DELETE_BUSINESS_FAILURE,
        payload: error.message
      });
    }
  };
};

export default deleteBusiness;