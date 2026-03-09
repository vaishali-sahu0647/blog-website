import { Navigate } from "react-router-dom"

function PrivateRoute({children}){

const isAdmin = localStorage.getItem("admin")

if(isAdmin){

return children

}else{

return <Navigate to="/admin/login" />

}

}

export default PrivateRoute