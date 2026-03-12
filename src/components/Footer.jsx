import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

function Footer(){

return(

<footer className="bg-black text-white pt-10 pb-6">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-4 gap-8">


<div>
<h4 className="text-2xl font-bold mb-3">Blog CMS</h4>

<p className="text-gray-300">
Sharing knowledge, ideas and stories from around the world.
Read blogs about technology, culture, travel and lifestyle.
</p>
</div>



<div>

<h5 className="text-lg font-semibold mb-3">Quick Links</h5>

<ul className="space-y-2">

<li>
<Link to="/" className="text-gray-300 hover:text-white" onClick={() => window.scrollTo(0, 0)}>
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



<div>

<h5 className="text-lg font-semibold mb-3">Categories</h5>

<ul className="space-y-2 text-gray-300">


<li>Travel</li>
<li>Lifestyle</li>
<li>Culture</li>
<li>Fashion</li>

</ul>

</div>



<div>

<h5 className="text-lg font-semibold mb-3">Follow Us</h5>

<p className="text-gray-300 mb-3">
Stay connected on social media
</p>

<div className="flex gap-4 text-xl">

<a href="#" className="hover:text-gray-400">
<FaFacebook/>
</a>


<a href="#" className="hover:text-gray-400">
<FaInstagram/>
</a>

<a href="#" className="hover:text-gray-400">
<FaTwitter/>
</a>

<a href="#" className="hover:text-gray-400">
<FaYoutube/>
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

