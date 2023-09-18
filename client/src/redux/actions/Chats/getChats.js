import ACTION_TYPES from "../../actionTypes"
import axios from "axios"

export const getChats = (businessId) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`/contactsSearch?businessId=${businessId}`)
  
            dispatch({
                type: ACTION_TYPES.GET_CHATS_SUCCESS,
                payload: response.data
            })

        } catch (error) {
            dispatch({
                type:ACTION_TYPES.GET_CHATS_FAILURE,
                payload: error.message
            })
        }
    }
}