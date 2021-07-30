import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNewItemThunk } from "../../store/modules/TodoList/thunks"
import { Button, TextField } from "@material-ui/core"
import { ContainerInput, Container } from "./styles"
import { useHistory } from "react-router-dom"

export const Input = () => {

    const [item, setNewItem] = useState("")

    const dispatch = useDispatch()

    const history = useHistory()

    const addItem = () => {
        dispatch(addNewItemThunk(item))
        setNewItem("")
    }

    const logout = () => {
        localStorage.removeItem("@TodoList:user")
        setTimeout(() => history.go(0), 1500)
    }

    return (
        <div>
            <Container>
             <button onClick={logout}>Logout</button>
                <h1><span style={{color: "#0095f6"}}>T</span>ODO LIS<span style={{color: "#1FDED4"}}>T</span></h1>
            </Container>
            
            <ContainerInput>
                <TextField label="Sua tarefa..." size="small" variant="filled" value={item} onChange={evt => setNewItem(evt.target.value)} />{" "}
                    <Button variant="contained" color="primary" onClick={addItem}>Adicionar</Button>
            </ContainerInput>
        </div>
    )
}