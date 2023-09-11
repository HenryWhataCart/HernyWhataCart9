import ACTION_TYPES from "../../actionTypes"

export const getLoginData = (loginData) => {
    
    return {
        type: ACTION_TYPES.GET_LOGIN_DATA,
        payload: loginData,
    }
  }