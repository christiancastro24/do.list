import { addNewItem, removeItem } from "./actions"


export const addNewItemThunk = (item) => (dispatch) => {

    const listTodo = JSON.parse(localStorage.getItem("list")) || []
    listTodo.push(item)
    localStorage.setItem("list", JSON.stringify(listTodo))
    dispatch(addNewItem(item))
}


export const removeItemThunk = (id) => (dispatch, getStore) => {

    const { list } = getStore()
    const listTodo = list.filter(itemRemov => itemRemov !== id)
    localStorage.setItem("list", JSON.stringify(listTodo))
    dispatch(removeItem(listTodo))

}