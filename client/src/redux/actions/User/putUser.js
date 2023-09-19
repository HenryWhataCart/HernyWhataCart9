import ACTION_TYPES from '../../actionTypes'
import axios from 'axios';

const updateUser = (id, updatedUserData) => {
  return async (dispatch) => {
    try {
      
      await axios.put(`/updateUser/${id}`, updatedUserData);

      dispatch({
        type: ACTION_TYPES.UPDATE_USER_SUCCESS,
        payload: updatedUserData
      });
      
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.UPDATE_USER_FAILURE,
        payload: error.message
      });
    }
  };
};

export default updateUser;