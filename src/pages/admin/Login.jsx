import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const navigate = useNavigate()

const handleLogin=(e)=>{

e.preventDefault();

if(email==="admin@gmail.com" && password==="1234"){

localStorage.setItem("admin","true")

navigate("/admin/dashboard")

}else{

alert("Wrong Email or Password")

}

}

return(

<div style={{padding:"40px"}}>

<h2>Admin Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
value={password}
placeholder="Enter Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button type="submit">
Login
</button>

</form>

</div>

)

}

export default Login