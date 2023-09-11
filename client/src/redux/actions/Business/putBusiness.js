import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'


const updateBusiness = (id, updatedFields) => {
  return async (dispatch) => {
    try {

      await axios.put(`/updateBusiness/${id}`, updatedFields);

      dispatch({
        type: ACTION_TYPES.UPDATE_BUSINESS_SUCCESS,
        payload: updatedFields
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.UPDATE_BUSINESS_FAILURE,
        payload: error.message
      });
    }
  };
};

export default updateBusiness;