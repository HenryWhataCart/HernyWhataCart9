import ACTION_TYPES from "../../actionTypes"

export const setDarkMode = (isEnabled) => {
    return {
        type: ACTION_TYPES.SET_DARK_MODE,
        payload: isEnabled,
    }
  }