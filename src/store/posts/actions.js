import { SET_POSTS, REMOVE_POST } from "./types";

export const setPosts = (payload) =>{
    console.log('set post')
    return {
        type: SET_POSTS,
        payload
    }
}

export const removePost = (payload) =>{
    console.log('remove post')
    return {
        type: REMOVE_POST,
        payload
    }
}