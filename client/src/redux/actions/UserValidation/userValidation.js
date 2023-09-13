import axios from "axios"
import ACTION_TYPES from "../../actionTypes";

const getValidation = (data, businessId) => {
    return async (dispatch) => {
        const slicedId = data.id.slice(6)
        let response
      try {
        if (data.metadata.privilege !== "SuperAdmin") {
            response = await axios.get(`/userValidation/?BusinessId=${businessId}&id=${slicedId}`)
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