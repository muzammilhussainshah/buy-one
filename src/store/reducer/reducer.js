import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    carts:[]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CARTS:
            return ({
                ...state,
                trandingMovies: action.payload
            })
         
        default:
            return state;
    }

}