import ACTION_TYPES from "../../actionTypes"
import axios from "axios"

const setNotification = (phoneNumber,value)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.put(`http://localhost:3001/updateNotification`, {phoneNumber,value})
            dispatch({
                type:ACTION_TYPES.SET_NOTIFICATION_SUCCESS,
                payload: {phoneNumber, value}
            })
        } catch (error) {
            dispatch({
                type: ACTION_TYPES.SET_NOTIFICATION_FAILURE,
                payload: error.message
            })
        }
        
    }
}

export default setNotification
