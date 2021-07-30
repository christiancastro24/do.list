import { useSelector, useDispatch } from "react-redux"
import { removeItemThunk } from "../../store/modules/TodoList/thunks"
import { Items } from "./styles"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


export const Dashboard = ({ autenticado }) => {

    const list = useSelector(state => state.list)

    const history = useHistory()

    const dispatch = useDispatch()

    if(!autenticado) {
        history.push("/")
    }

    return (      
        <div>
            {list.map((items, index) => {
                
                return (
                    <Items key={index}>
                        <h5>{items.length > 26 ? items.slice(0, 26) + "..." : items}</h5> 
                        {" "}
                        <Button 
                            style={{height: "2rem", marginRight: "0.4rem"}} 
                            variant="contained" color="secondary"  
                            onClick={() => dispatch(removeItemThunk(items))}> 
                            <DeleteForeverIcon />
                          </Button>
                    </Items>
                )
            })}
        </div>
    )
}