const defaultState = {
    user: 0,
    isAutorized: false,
}

const SET_USER = "SET_USER"
const SET_AUTORIZATION_STATUS = "SET_AUTORIZATION_STATUS"

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_USER":
            return{...state, user: action.payload}
        case "SET_AUTORIZATION_STATUS":
            return{...state, isAutorized: action.payload}    

        default:
            return state    
    }
}

export const setUser = (payload) => ({type: SET_USER, payload})
export const setAutorizationStatus = (payload) => ({type: SET_AUTORIZATION_STATUS, payload})