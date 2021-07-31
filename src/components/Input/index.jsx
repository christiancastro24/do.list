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
        setTimeout(() => history.go(0), 1000)
    }

    return (
        <div>
            <Container>
             <Button style={{position: "absolute", top: "0.5rem", left: "0.8rem", height: "1.8rem", backgroundColor: "#801818", color: "#fff"}} variant="contained" onClick={logout}>Logout</Button>
        
                <h1><span style={{color: "#0095f6"}}>D</span>O<span style={{color: "pink"}}>.</span>TASK<span style={{color: "#1FDED4"}}>S</span></h1>
            </Container>
            
            <ContainerInput>
                <TextField label="Adicione uma tarefa..." size="small" variant="filled" value={item} onChange={evt => setNewItem(evt.target.value)} />{" "}

                    {item === "" 
                    ?
                    <Button 
                      disabled 
                      variant="contained" 
                      color="primary" 
                      onClick={addItem}>Adicionar</Button>
                     :
                     <Button 
                       variant="contained" 
                       color="primary" 
                       onClick={addItem}>Adicionar</Button>
                    }
            </ContainerInput>
        </div>
    )
}