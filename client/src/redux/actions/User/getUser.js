import axios from 'axios';
import ACTION_TYPES from '../../actionTypes'

const getUser = (businessId = '', name = '') => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/userSearch/?name=${name}&businessId=${businessId}`);

      dispatch({
        type: ACTION_TYPES.GET_USER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type:ACTION_TYPES.GET_USER_FAILURE,
        payload: error.message
      });
    }
  };
};

export default getUser;