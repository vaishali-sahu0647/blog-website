
import { Link } from "react-router-dom"

function Navbar(){

return(
<>
<div className="bg-black text-white text-center py-1">
Sharing Knowledge, Ideas & Stories From Around the World
</div>
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow py-3">
<div className="container">
   <img 
src="https://wikilovesfolklore.org/wp-content/uploads/2024/11/cropped-Wiki_Loves_Folklore_banner_logo-1536x570.webp"
alt="logo"
style={{height:"60px"}}
className="me-2"
/>


<Link className="navbar-brand fw-bold" to="/">
Blog CMS
</Link>

<button 
className="navbar-toggler" 
type="button" 
data-bs-toggle="collapse" 
data-bs-target="#navbarNav"
>
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarNav">

<ul className="navbar-nav ms-auto">

<li className="nav-item">
<Link className="nav-link" to="/">Home</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/blogs">Blogs</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/admin/login">Admin</Link>
</li>

</ul>

</div>

</div>

</nav>
</>

)

}

export default Navbar