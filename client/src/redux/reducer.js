import ACTION_TYPES from './actionTypes'

const initialState = {
    
  }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ACTION_1:
            return {
                ...state,
            } 
    
        default:
            return state
    }
}

export default reducer