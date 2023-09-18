import ACTION_TYPES from './actionTypes'

const initialState = {
    superUser: [],
    business: [],
    user: [],
    validation: true,
    darkMode: false,
    chats: [],
    messages: []
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
        case ACTION_TYPES.POST_SUPERUSER_REQUEST:
            return{
                ...state
            }
        case ACTION_TYPES.POST_SUPERUSER_SUCCESS:
        return {
            ...state,superUser: [...state.superUser, action.payload]
        };
        case ACTION_TYPES.POST_SUPERUSER_FAILURE:
        return state;
        case ACTION_TYPES.DELETE_SUPERUSER_REQUEST:
            return{
                ...state
            }
        case ACTION_TYPES.DELETE_SUPERUSER_SUCCESS:
        return {
            ...state, superUser: state.superUser.filter(superU => superU.id !== action.payload)
        };
        case ACTION_TYPES.DELETE_SUPERUSER_FAILURE:
        return state;
        case ACTION_TYPES.PUT_SUPERUSER_REQUEST:
            return{
                ...state
            }
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
            business:action.payload
        };
        case ACTION_TYPES.CREATE_BUSINESS_REQUEST:
            return{
                ...state
            }
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
            state.business.forEach((busine)=>{
                if(busine.id === action.payload.id){
                    busine.name = action.payload.name
                    busine.email = action.payload.email
                    busine.phone = action.payload.phone
                }
            })
        return {
            ...state,
            business: [...state.business]
        };
        case ACTION_TYPES.UPDATE_BUSINESS_FAILURE:
        return state;

        // User actions
        case ACTION_TYPES.GET_USER_SUCCESS:
        return {
            ...state,
            user: [...action.payload]
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

        // login

        case ACTION_TYPES.GET_LOGIN_DATA:
            return {
                ...state,
                loginData: action.payload
            }

        // validation

        case ACTION_TYPES.GET_USER_VALIDATION_SUCCESS:
            return {
                ...state,
                validation: action.payload
            }

        case ACTION_TYPES.GET_USER_VALIDATION_FAILURE:
            return state

        case ACTION_TYPES.SET_DARK_MODE:
            return {...state, darkMode: action.payload}

        // chats
        case ACTION_TYPES.GET_CHATS_SUCCESS:
            return {
                ...state,
                chats: action.payload
            }

        case ACTION_TYPES.GET_CHATS_FAILURE:
            return state

        //messages
        case ACTION_TYPES.GET_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: action.payload
            }

        case ACTION_TYPES.SET_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case ACTION_TYPES.SET_NOTIFICATION_SUCCESS:
            state.chats.forEach((chat)=>{
                if(chat.phone == action.payload.phoneNumber){
                    chat.notification = action.payload.value
                }
            })
        return {
            ...state,
            chats: [...state.chats]
        };
        case ACTION_TYPES.SET_NOTIFICATION_FAILURE:
            return{
                ...state
            }
    }
    };

export default reducer;
