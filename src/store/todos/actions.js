import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from "./types"

export const addTodo = (payload) =>{
    return {
        type: ADD_TODO,
        payload
    }
}

export const removeTodo = (payload) =>{
    return {
        type: REMOVE_TODO,
        payload
    }
}

export const checkTodo = (payload) =>{
    console.log('todo checked')
    return {
        type: CHECK_TODO,
        payload
    }
}