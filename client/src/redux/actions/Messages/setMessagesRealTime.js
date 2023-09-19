import ACTION_TYPES from "../../actionTypes"

const setMessage = (message) => {
    return {
        type: ACTION_TYPES.SET_MESSAGE_SUCCESS,
        payload: message    
    }
}

export default setMessage