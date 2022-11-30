import { ADD_TODO } from "./types"

const initialState = [];

const todos = (state = initialState, action)=>{
    switch(action.type){
        // case ENTER_TODO:
        //     return state.value;
        case ADD_TODO:
            return {
                ...state.todos,
                todos: [
                    ...state.todos,
                    action.todo
                ]
            }
        // case CHECK_TODO:
        //     return console.log('check');
        // case REMOVE_TODO:
        //     return console.log('removed');
        default:
            return state;
    }
}

export default todos