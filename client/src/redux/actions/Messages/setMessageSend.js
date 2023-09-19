import ACTION_TYPES from "../../actionTypes"

const setMessageSend = (message) => {
    return {
        type: ACTION_TYPES.SET_MESSAGE_SEND_SUCCESS,
        payload: message    
    }
}

export default setMessageSend