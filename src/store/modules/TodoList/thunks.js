import { addNewItem, removeItem } from "./actions"
import { toast } from "react-toastify"


export const addNewItemThunk = (item) => (dispatch, getStore) => {
    const { list } = getStore()

    const itemRepeated = list.find(f => f === item)

    if(itemRepeated) {
        toast.error('Você já adicionou essa tarefa, adicione outra :)')

    } else {
        const listTodo = JSON.parse(localStorage.getItem("list")) || []
        listTodo.push(item)
        localStorage.setItem("list", JSON.stringify(listTodo))
        dispatch(addNewItem(item))
    }
}


export const removeItemThunk = (id) => (dispatch, getStore) => {

    const { list } = getStore()
    const listTodo = list.filter(itemRemov => itemRemov !== id)
    localStorage.setItem("list", JSON.stringify(listTodo))
    dispatch(removeItem(listTodo))

}