import { ENTER_TODO, ADD_TODO } from "./types"

export const enterTodo = () =>{
    return {
        type: ENTER_TODO
    }
}

export const addTodo = (toDoValue) =>{
    return {
        type: ADD_TODO,
        todos: toDoValue
    }
}

// export const removePost = (payload) =>{
//     console.log('remove post')
//     return {
//         type: REMOVE_POST,
//         payload
//     }
// }