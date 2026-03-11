import { useState ,useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"

function AddBlog(){

const [title,setTitle] = useState("")
const [content,setContent] = useState("")
const [author,setAuthor] = useState("")
const [image,setImage] = useState("")
const [status,setStatus] = useState("draft")
const [category,setCategory] = useState("")
const [tags,setTags] = useState("");
const { id } = useParams()
const navigate = useNavigate()

const handleSubmit = (e) => {

e.preventDefault()

const blogs = JSON.parse(localStorage.getItem("blogs")) || []

if(id){

const updatedBlogs = blogs.map((blog)=>{

if(blog.id == id){

return{
...blog,
title,
content,
author,
image,
status,
category,
tags
}

}

return blog

})

localStorage.setItem("blogs",JSON.stringify(updatedBlogs))

alert("Blog edit successfully")

navigate("/admin/dashboard")

}else{

const newBlog = {
id: Date.now(),
title,
content,
author,
image,
status,
category,
tags,
date: new Date().toLocaleDateString()
}

blogs.push(newBlog)

localStorage.setItem("blogs",JSON.stringify(blogs))

alert("Blog Saved")

navigate("/admin/dashboard")

}

}
useEffect(() => {

if(id){

const blogs = JSON.parse(localStorage.getItem("blogs")) || []

const blog = blogs.find((b)=> b.id == id)

if(blog){

setTitle(blog.title)
setContent(blog.content)
setAuthor(blog.author)
setImage(blog.image)
setStatus(blog.status)
setCategory(blog.category)
setTags(blog.tags)

}

}

},[id])

return(
   <div
className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-20"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80')"
}}
>

<div className="absolute inset-0 bg-black/50"></div>

<div className="relative w-full max-w-4xl bg-white/90 backdrop-blur-lg shadow-2xl rounded-xl p-8">

<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
Create New Blog
</h2>

<form onSubmit={handleSubmit} className="space-y-6">



<div>

<label className="text-sm font-semibold text-gray-700">
Blog Title
</label>

<input
type="text"
value={title}
placeholder="Enter blog title"
className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
onChange={(e)=>setTitle(e.target.value)}
/>

</div>



<div>

<label className="text-sm font-semibold text-gray-700">
Blog Content
</label>

<textarea
rows="5"
placeholder="Write blog content..."
value={content}
className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
onChange={(e)=>setContent(e.target.value)}
/>

</div>



<div className="grid md:grid-cols-2 gap-5">



<div>

<label className="text-sm font-semibold text-gray-700">
Author
</label>

<input
type="text"
placeholder="Author Name"
value={author}
className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
onChange={(e)=>setAuthor(e.target.value)}
/>

</div>


<div>

<label className="text-sm font-semibold text-gray-700">
Category
</label>

<select
value={category}
className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
onChange={(e)=>setCategory(e.target.value)}
>

<option value="">Select Category</option>
<option value="Travel">Travel</option>
<option value="Lifestyle">Lifestyle</option>
<option value="Culture">Culture</option>
<option value="Fashion">Fashion</option>

</select>

</div>



<div>

<label className="text-sm font-semibold text-gray-700">
Tags
</label>

<input
value={tags}
type="text"
placeholder=""
className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
onChange={(e)=>setTags(e.target.value)}
/>

</div>



<div>

<label className="text-sm font-semibold text-gray-700">
Status
</label>

<select
value={status}
className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
onChange={(e)=>setStatus(e.target.value)}
>

<option value="draft">Draft</option>
<option value="published">Published</option>

</select>

</div>

</div>


<div>

<label className="text-sm font-semibold text-gray-700">
Image URL
</label>

<input
type="text"
value={image}
placeholder="Paste image URL"
className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
onChange={(e)=>{
setImage(e.target.value)
}}
/>

</div>




<div className="text-center">

<button
className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-2 rounded-lg hover:scale-105 transition transform shadow-lg"
>
{id ? "Edit Blog" : "Publish Blog"}
</button>

</div>

</form>

</div>

</div>

)

}

export default AddBlog