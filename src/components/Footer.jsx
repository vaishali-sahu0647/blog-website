// import { Link } from "react-router-dom"

// function Footer(){

// return(

// <footer className="bg-dark text-white pt-5 pb-3">

// <div className="container">

// <div className="row">

// {/* About */}
// <div className="col-md-4 mb-4">
// <h4 className="fw-bold">Blog CMS</h4>
// <p>
// Sharing knowledge, ideas and stories from around the world.
// Read blogs about technology, culture, travel and lifestyle.
// </p>
// </div>


// {/* Quick Links */}
// <div className="col-md-2 mb-4">
// <h5>Quick Links</h5>
// <ul className="list-unstyled">

// <li>
// <Link className="text-white text-decoration-none" to="/">Home</Link>
// </li>

// <li>
// <Link className="text-white text-decoration-none" to="/blogs">Blogs</Link>
// </li>

// <li>
// <Link className="text-white text-decoration-none" to="/admin/login">Admin</Link>
// </li>

// </ul>
// </div>


// {/* Categories */}
// <div className="col-md-3 mb-4">
// <h5>Categories</h5>

// <ul className="list-unstyled">

// <li>Technology</li>
// <li>Travel</li>
// <li>Lifestyle</li>
// <li>Culture</li>

// </ul>
// </div>


// {/* Social */}
// <div className="col-md-3 mb-4">

// <h5>Follow Us</h5>

// <p>Stay connected on social media</p>

// <div className="d-flex gap-3">

// <a href="#" className="text-white fs-4">
// <i className="bi bi-facebook"></i>
// </a>

// <a href="#" className="text-white fs-4">
// <i className="bi bi-instagram"></i>
// </a>

// <a href="#" className="text-white fs-4">
// <i className="bi bi-twitter"></i>
// </a>

// <a href="#" className="text-white fs-4">
// <i className="bi bi-youtube"></i>
// </a>

// </div>

// </div>

// </div>


// <hr className="border-light"/>

// <div className="text-center">
// © 2026 Blog CMS | All Rights Reserved
// </div>

// </div>

// </footer>

// )

// }

// export default Footer


import { Link } from "react-router-dom"

function Footer(){

return(

<footer className="bg-black text-white pt-10 pb-6">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-4 gap-8">

{/* About */}
<div>
<h4 className="text-2xl font-bold mb-3">Blog CMS</h4>

<p className="text-gray-300">
Sharing knowledge, ideas and stories from around the world.
Read blogs about technology, culture, travel and lifestyle.
</p>
</div>


{/* Quick Links */}
<div>

<h5 className="text-lg font-semibold mb-3">Quick Links</h5>

<ul className="space-y-2">

<li>
<Link to="/" className="text-gray-300 hover:text-white">
Home
</Link>
</li>

<li>
<Link to="/blogs" className="text-gray-300 hover:text-white">
Blogs
</Link>
</li>


</ul>

</div>


{/* Categories */}
<div>

<h5 className="text-lg font-semibold mb-3">Categories</h5>

<ul className="space-y-2 text-gray-300">


<li>Travel</li>
<li>Lifestyle</li>
<li>Culture</li>
<li>Fashion</li>

</ul>

</div>


{/* Social */}
<div>

<h5 className="text-lg font-semibold mb-3">Follow Us</h5>

<p className="text-gray-300 mb-3">
Stay connected on social media
</p>

<div className="flex gap-4 text-xl">

<a href="#" className="hover:text-gray-400">
<i className="bi bi-facebook"></i>
</a>

<a href="#" className="hover:text-gray-400">
<i className="bi bi-instagram"></i>
</a>

<a href="#" className="hover:text-gray-400">
<i className="bi bi-twitter"></i>
</a>

<a href="#" className="hover:text-gray-400">
<i className="bi bi-youtube"></i>
</a>

</div>

</div>

</div>


<hr className="border-gray-700 my-6"/>

<div className="text-center text-gray-400 text-sm">
© 2026 Blog CMS | All Rights Reserved
</div>

</div>

</footer>

)

}

export default Footer

