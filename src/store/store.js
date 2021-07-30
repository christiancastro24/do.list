import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk"

import { toDoListReducer } from "./modules/TodoList/reducer"

const reducers = combineReducers({ list: toDoListReducer })

export const store = createStore(reducers, applyMiddleware(thunk))