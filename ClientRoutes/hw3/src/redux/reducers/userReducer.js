import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {} //represent single post 
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
        console.log('reducer');
            return {
                ...state,
                items: action.payload,
            };
        case NEW_POST:
            return{
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}

// const INITIAL_STATE = {
//     microService: 'Dogs',
// }

// const userReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case 'UPDATE_SERVICE':
//             return {
//                 ...state,
//                 microservice: action.microservice,
//             };
//         default:
//             return state;
//     }
// };

// export default userReducer;