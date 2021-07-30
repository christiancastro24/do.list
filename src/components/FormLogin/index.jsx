import axios from "axios"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, Redirect, useHistory } from "react-router-dom"
import { Button, TextField } from "@material-ui/core"
import { toast } from "react-toastify";
import { ContainerRegister, ImageAndForm } from "./styles"
import registerImage from "../../assets/Login.svg"
import * as yup from "yup"

export const FormLogin = ({ autenticado, setAutenticado }) => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string().required('Campo obrigatório').email('Email inválido'),
        password: yup.string().min(8, 'Minímo de 8 caracteres').required('Campo obrigatório')
    })


    const { register, handleSubmit} = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSub = (data) => {
        axios.post("https://capstone-class-app.herokuapp.com/login/", data)
        .then(res => {

            const { accessToken } = res.data

            console.log(res.data.access)

            localStorage.setItem("@TodoList:user", JSON.stringify(accessToken))

            setAutenticado(true)

            return history.push("/dashboard")

        })
        .catch(res => toast.error('Email ou senha inválido'))
    }

    if(autenticado) {
        return <Redirect to={"/dashboard"} />
    }
    
    return (
        <div>
            <ImageAndForm>
            <ContainerRegister onSubmit={handleSubmit(onSub)}>
                <h1>Login</h1>
                <TextField 
                  required 
                  size="small" 
                  label="E-mail" 
                  variant="outlined" 
                  {...register("email")}
                />
                <br /><br />

                <TextField 
                  required 
                  size="small" 
                  type="password"
                  label="Senha" 
                  variant="outlined" 
                  {...register("password")}
                />

            <br /><br />
            <div>
                <Button variant="contained" color="primary" type="submit">Entrar</Button>
                <p>Não possui uma conta? <Link to={"/register"}>Registre-se</Link></p>
            </div>
        </ContainerRegister>
            <img src={registerImage} alt={registerImage} />
        </ImageAndForm>
    </div>
    )
}