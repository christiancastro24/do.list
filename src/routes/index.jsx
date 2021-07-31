import { Switch, Route} from 'react-router-dom'
import { Dashboard } from '../components/FormDashboard'
import { FormLogin } from '../components/FormLogin'
import { FormRegister } from '../components/FormRegister'
import { Input } from '../components/Input'
import { Home } from '../pages/Home'
import { useState, useEffect } from "react"

export const Routes = () => {

    const [autenticado, setAutenticado] = useState(false)

    
    useEffect(() => {
        const accesso = JSON.parse(localStorage.getItem("@TodoList:user"))
        
        if(accesso) {
           return setAutenticado(true)
        }
    }, [autenticado])

    return (
        <div>
            <Switch>
                
                <Route exact path="/"> <Home /> </Route>

                <Route path="/dashboard"> <Input /> <Dashboard autenticado={autenticado}/>   </Route>

                <Route path="/register"> <FormRegister autenticado={autenticado}/> </Route>

                <Route path="/login"> <FormLogin autenticado={autenticado} setAutenticado={setAutenticado}/> </Route>
            </Switch>
        </div>
    )
}