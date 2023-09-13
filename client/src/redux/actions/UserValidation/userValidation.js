import ACTION_TYPES from "../../actionTypes";
import axios from "axios"

const getValidation = (data, businessId) => {
    return async (dispatch) => {
        const {id} = data
        try {
        let response
        if (data.privilege !== "SuperAdmin") {
            response = await axios.get(`/userValidation/?BusinessId=${businessId}&id=${id}`)
        }
        dispatch({
          type: ACTION_TYPES.GET_USER_VALIDATION_SUCCESS,
          payload: response.data.validation
        });
      } catch (error) {
        dispatch({
          type:ACTION_TYPES.GET_USER_VALIDATION_FAILURE
        });
      }
    };
  };

  export default getValidation