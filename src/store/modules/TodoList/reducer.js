import { ADD_TODO, REMOVE_TODO } from './actionTypes'

const defaultState = JSON.parse(localStorage.getItem("list")) || [];


export const toDoListReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, action.item]
        
        case REMOVE_TODO:
            return action.itemRemoved

        default:
            return state;
   }
}