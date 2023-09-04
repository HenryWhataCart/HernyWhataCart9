import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'


const updateUser = (id, updatedUserData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:3001/updateUser/${id}`, updatedUserData);

      dispatch({
        type: ACTION_TYPES.UPDATE_USER_SUCCESS,
        payload: response.data
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