import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect, useHistory } from "react-router-dom"
import { Button, TextField } from "@material-ui/core"
import { ContainerRegister, ImageAndForm } from "./styles"
import { toast } from "react-toastify";
import registerImage from "../../assets/Register.svg"
import * as yup from "yup"
import axios from "axios";

export const FormRegister = ({ autenticado }) => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string().email('Email inválido'),
        firstname: yup.string(),
        lastname: yup.string(),
        password: yup.string().min(8, 'Minímo de 8 digitos'),
        confirmPassword: yup.string().oneOf([yup.ref("password")], 'As senhas precisam ser iguais')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSub = (data) => {
        axios.post("https://capstone-class-app.herokuapp.com/register", data)
        .then(res => {
            console.log(res.data)
            toast.success('Cadastro concluído')
            return history.push("/login")

        })
        .catch(res => toast.error('Email já cadastrado'))
    }
    
    if(autenticado) {
        return <Redirect to={"/dashboard"} />
    }

    return (
        <div>
            <br />
            <ImageAndForm>
            <img src={registerImage} alt={registerImage} />

            <ContainerRegister onSubmit={handleSubmit(onSub)}>
            <h1>Cadastro</h1>

                <TextField 
                  required 
                  size="small" 
                  label="E-mail" 
                  variant="outlined"
                  {...register("email")}
                  />
                <br />
                {errors.email && errors.email.message}
                <br />

                <TextField 
                  required 
                  size="small" 
                  label="Senha" 
                  variant="outlined" 
                  type="password" 
                  {...register("password")} 
                  />
                  <br />

                  <br />
                  <TextField 
                  required 
                  size="small" 
                  label="Confirmar senha" 
                  variant="outlined" 
                  type="password" 
                  {...register("confirmPassword")} 
                  />
                  <br />
                  {errors.confirmPassword && errors.confirmPassword.message}

                <br />
                <TextField 
                  required 
                  size="small" 
                  label="Primeiro nome" 
                  variant="outlined" 
                  {...register("firstname")} 
                  />
                
                <br /><br />

                <TextField 
                  required 
                  size="small" 
                  label="Sobrenome" 
                  variant="outlined" 
                  {...register("lastname")} 
                  />
                
                <br /><br />

                

                

                <br /><br />
                <Button color="primary" variant="contained" type="submit">Cadastre-se</Button>
            <p>Já possui uma conta? <Link to={"/login"}>Entrar</Link></p>
            </ContainerRegister>
            </ImageAndForm>
        </div>
    )
}