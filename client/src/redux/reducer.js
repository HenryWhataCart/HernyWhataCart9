import ACTION_TYPES from './actionTypes'

const initialState = {
    SuperUser:[]
  }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_SUPERUSER_SUCCESS:
            return {
                ...state,SuperUser:[...state.SuperUser,action.playload]
            } 
    
        default:
            return state
    }
}

export default reducer