import { useHistory } from "react-router-dom"
import { Container } from "./styles"
import { Button } from "@material-ui/core"

export const Home = () => {

    const history = useHistory()

    const handleGo = (path) => {
        history.push(path)
    }

    const firstSpan = {color: "#1FDED4"}
    const secondSpan = {color: "pink", fontSize: "3rem"}
    const thirdSpan = {color: "#0095F6"}
    const firstButton = {background: "transparent", border: "1px solid"}
    const secondButton = {background: "#2b2929", color: "#fff", width: "8rem", height: "2.4rem", fontWeight: "bold", borderRadius: "6px"}

    return (
        <Container>
            <h1><span style={firstSpan}>D</span>O<span style={secondSpan}>.</span>TASK<span style={thirdSpan}>S</span></h1>
            <h4>Todo list é um aplicativo para criar suas tarefas do diárias</h4>

            <Button style={firstButton} variant="contained" onClick={() => handleGo("/register")}>Cadastre-se</Button>
            {" "}
            <Button style={secondButton} variant="contained" onClick={() => handleGo("/login")}>Login</Button>
        </Container>
    )
}