import { AppDataManager } from "../../App Context/AppContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom";

export default function PriviateRoute ({children}) {

    const context = useContext(AppDataManager);
    const isAuth = localStorage.getItem("isAuth");

    return isAuth ? children : <Navigate to="/login"/>

    // if(isAuth == false){
    //     return <Navigate to="/login"/>;
    // }

    // return children;    
}