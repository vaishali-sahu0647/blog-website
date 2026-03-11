import { Link } from "react-router-dom"

function LatestBlogs({blogs}){

return(

<div className="max-w-6xl mx-auto py-12 px-4">

<h2 className="text-3xl font-bold text-center mb-10">
Latest Blogs
</h2>

<div className="grid md:grid-cols-3 gap-8">

{blogs.map((blog)=>(

<div
key={blog.id}
className="bg-white rounded-xl shadow-md overflow-hidden
hover:shadow-xl hover:-translate-y-1 transition duration-300"
>

<img
src={blog.image}
alt={blog.title}
className="w-full h-[200px] object-cover"
/>

<div className="p-5 flex flex-col h-full bg-gray-200">
<h5 className="text-xl font-semibold mb-2">
{blog.title}
</h5>

<p className="text-gray-600 mb-3">
{blog.content.substring(0,100)}...
</p>

<p className="text-sm text-gray-400 mb-4">
Author: {blog.author}
</p>


<Link
to={`/blog/${blog.id}`}
className="bg-black text-white px-4 py-2
rounded-md inline-block
hover:bg-gray-800 transition"
>
Read More
</Link>

</div>

</div>

))}

</div>

</div>

)

}

export default LatestBlogs