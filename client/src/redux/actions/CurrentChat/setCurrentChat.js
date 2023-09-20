import ACTION_TYPES from "../../actionTypes"

export const setCurrentChat = (chat) => {
    return {
        type: ACTION_TYPES.SET_CURRENT_CHAT,
        payload: chat,
    }
  }