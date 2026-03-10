
import { useParams } from "react-router-dom"

function BlogDetail(){

const { id } = useParams()

const blogs = JSON.parse(localStorage.getItem("blogs")) || []

const blog = blogs.find((b)=> b.id == id)

if(!blog){
return <h3 className="text-center mt-24 text-xl">Blog Not Found</h3>
}

return(

<div className="max-w-4xl mx-auto px-4 py-24">

{/* Blog Card */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden">

{/* Image */}
<img
src={blog.image}
alt={blog.title}
className="w-full h-[400px] object-cover"
/>

<div className="p-6">

{/* Title */}
<h1 className="text-3xl font-bold mb-4 text-gray-800">
{blog.title}
</h1>

{/* Author + Date */}
<div className="flex justify-between text-gray-500 text-sm mb-4">

<span>
👤 {blog.author}
</span>

<span>
📅 {blog.date}
</span>

</div>

{/* Category + Tags */}
<div className="flex gap-3 mb-4">

{blog.category && (
<span className="bg-black text-white text-xs px-3 py-1 rounded-full">
{blog.category}
</span>
)}

{blog.tags && (
<span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
{blog.tags}
</span>
)}

</div>

<hr className="my-5"/>

{/* Content */}
<p className="text-gray-700 leading-8 text-lg">
{blog.content}
</p>

</div>

</div>

</div>

)

}

export default BlogDetail

