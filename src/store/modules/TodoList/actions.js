import { ADD_TODO, REMOVE_TODO } from "./actionTypes"

export const addNewItem = (item) => ({ type: ADD_TODO, item})

export const removeItem = (itemRemoved) => ({ type: REMOVE_TODO, itemRemoved})