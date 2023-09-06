import ACTION_TYPES from './actionTypes'

const initialState = {
    superUser: [],
    business: [],
    user: [],
    rol: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // SuperUser actions
        case ACTION_TYPES.GET_SUPERUSER_SUCCESS:
        return {
            ...state,
            superUser: [...state.superUser, ...action.payload]
        };
        case ACTION_TYPES.GET_SUPERUSER_FAILURE:
        return state;
        case ACTION_TYPES.POST_SUPERUSER_SUCCESS:
        return {
            ...state,superUser:[...state.superUser, action.payload]
        };
        case ACTION_TYPES.POST_SUPERUSER_FAILURE:
        return state;
        case ACTION_TYPES.DELETE_SUPERUSER_SUCCESS:
        return {
            ...state, superUser: state.superUser.filter(superU => superU.id !== action.payload)
        };
        case ACTION_TYPES.DELETE_SUPERUSER_FAILURE:
        return state;
        case ACTION_TYPES.PUT_SUPERUSER_SUCCESS:
            // const index = state.superUser.indexOf(action.payload.id)
            state.superUser.forEach((superU)=>{
                if(superU.id === action.payload.id){
                    superU.name = action.payload.name
                    superU.email = action.payload.email
                    superU.password = action.payload.password
                }
            })
        return {
            ...state,
            superUser: [...state.superUser]
        };
        case ACTION_TYPES.PUT_SUPERUSER_FAILURE:
        return state;

        // Business actions
        case ACTION_TYPES.GET_BUSINESS_SUCCESS:
        return {
            ...state,
            business: action.payload
        };
        case ACTION_TYPES.GET_BUSINESS_FAILURE:
        return state;
        case ACTION_TYPES.CREATE_BUSINESS_SUCCESS:
        return {
            ...state,
            business:[...state.business,action.payload]
        };
        case ACTION_TYPES.CREATE_BUSINESS_FAILURE:
        return state;
        case ACTION_TYPES.DELETE_BUSINESS_SUCCESS:
        return {
            ...state, business: state.business.filter(business => business.id !== action.payload)
        };
        case ACTION_TYPES.DELETE_BUSINESS_FAILURE:
        return state;
        case ACTION_TYPES.UPDATE_BUSINESS_SUCCESS:
        return state;
        case ACTION_TYPES.UPDATE_BUSINESS_FAILURE:
        return state;

        // User actions
        case ACTION_TYPES.GET_USER_SUCCESS:
        return {
            ...state,
            user: action.payload
        };
        case ACTION_TYPES.GET_USER_FAILURE:
        return state;
        case ACTION_TYPES.CREATE_USER_SUCCESS:
        return {
            ...state,
            user:[...state.user,action.payload]
        };
        case ACTION_TYPES.CREATE_USER_FAILURE:
        return state;
        case ACTION_TYPES.UPDATE_USER_SUCCESS:
        return state;
        case ACTION_TYPES.UPDATE_USER_FAILURE:
        return state;
        case ACTION_TYPES.DELETE_USER_SUCCESS:
        return {
            ...state,
            user:state.user.filter(users => users.id !== action.payload)
        };
        case ACTION_TYPES.DELETE_USER_FAILURE:
        return state;

        // Rol actions
        case ACTION_TYPES.GET_ROL_SUCCESS:
            return{
                ...state,
                rol:action.payload
            }
        case ACTION_TYPES.GET_ROL_FAILURE:
        return state;
        case ACTION_TYPES.CREATE_ROL_SUCCESS:
            return {
                ...state,
                rol:[...state.rol,action.payload]
            };
        case ACTION_TYPES.CREATE_ROL_FAILURE:
        return state;
        case ACTION_TYPES.DELETE_ROL_SUCCESS:
        return{
            ...state,
            rol:state.rol.filter(rols => rols.id !== action.payload)
        };
        case ACTION_TYPES.DELETE_ROL_FAILURE:
        return state;

        default:
        return state;
    }
    };

export default reducer;