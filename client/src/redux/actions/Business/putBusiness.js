import axios from 'axios';
import { getBusiness } from './getBusiness';
import ACTION_TYPES from '../../actionTypes'


const updateBusiness = (id, updatedFields) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:3001/updateBusiness/${id}`, updatedFields);

      dispatch({
        type: ACTION_TYPES.UPDATE_BUSINESS_SUCCESS,
        payload: response.data
      });
      dispatch(getBusiness());
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.UPDATE_BUSINESS_FAILURE,
        payload: error.message
      });
    }
  };
};

export default updateBusiness;