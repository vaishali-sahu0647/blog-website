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

<div
className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')"
}}
>



<div className="absolute inset-0 bg-black/50"></div>

<div className="relative bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md">

<h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
Blog Admin Login
</h2>

<form onSubmit={handleLogin} className="space-y-5">

<div>
<label className="block text-gray-600 mb-1">Email</label>
<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
</div>

<div>
<label className="block text-gray-600 mb-1">Password</label>
<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
</div>

<button
type="submit"
className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
>
Login
</button>

</form>

</div>

</div>

)

}

export default Login