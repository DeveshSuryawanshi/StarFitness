import { AppDataManager } from "../../App Context/AppContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom";

export default function PriviateRoute ({children}) {

    const context = useContext(AppDataManager);

    if(context.isAuth == false){
        return <Navigate to="/login"/>;
    }

    return children;    
}