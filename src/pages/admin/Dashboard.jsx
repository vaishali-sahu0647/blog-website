import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Dashboard(){
const navigate = useNavigate();
const [blogs,setBlogs] = useState(
JSON.parse(localStorage.getItem("blogs")) || []
)

const published = blogs.filter(b => b.status === "published")
const draft = blogs.filter(b => b.status === "draft")




const handleDelete = (id) => {

const updated = blogs.filter(blog => blog.id !== id)

setBlogs(updated)
localStorage.setItem("blogs",JSON.stringify(updated))

}




const toggleStatus = (id) => {

const updated = blogs.map(blog => {

if(blog.id === id){

return {
...blog,
status: blog.status === "published" ? "draft" : "published"
}

}

return blog

})

setBlogs(updated)
localStorage.setItem("blogs",JSON.stringify(updated))

}
const handleLogout = () => {

localStorage.removeItem("admin")

navigate("/admin/login")

}


return(

<div className="flex min-h-screen bg-gray-100">




<div className="w-40 bg-gray-900 text-gray-200 flex flex-col">

<div className="p-4 text-lg font-bold border-b border-gray-700">
Blog CMS
</div>

<ul className="p-3 space-y-2 flex-1 text-sm">

<li className="flex items-center gap-2 bg-gray-800 p-2 rounded cursor-pointer">
<i className="fa fa-chart-line"></i> Dashboard
</li>

<li className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded cursor-pointer" onClick={() => navigate("/blogs")}>
<i className="fa fa-blog"></i> Blogs
</li>

<li className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded cursor-pointer" onClick={() => navigate("/admin/add-blog")}>
<i className="fa fa-plus"></i> Add Blog
</li>

<li 
onClick={handleLogout}
className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded cursor-pointer"
>
<i className="fa fa-right-from-bracket"></i> Logout
</li>

</ul>

</div>




<div className="flex-1 flex flex-col">




<div className="bg-white shadow px-6 py-3 flex justify-between items-center">

<h1 className="text-base font-semibold">
Admin Dashboard
</h1>

<div className="flex items-center gap-3">

<input
type="text"
placeholder="Search..."
className="border rounded px-3 py-1 text-sm"
/>

<img
src="https://i.pravatar.cc/40"
className="rounded-full w-8 h-8"
/>

</div>

</div>





<div className="p-6 max-w-4xl mx-auto w-full">




<div className="grid md:grid-cols-3 gap-4 mb-8">

<div className="bg-white p-4 rounded-lg shadow">
<p className="text-gray-500 text-sm">Total Blogs</p>
<h2 className="text-2xl font-bold mt-2">{blogs.length}</h2>
</div>

<div className="bg-white p-4 rounded-lg shadow">
<p className="text-gray-500 text-sm">Published Blogs</p>
<h2 className="text-2xl font-bold text-green-600 mt-2">
{published.length}
</h2>
</div>

<div className="bg-white p-4 rounded-lg shadow">
<p className="text-gray-500 text-sm">Draft Blogs</p>
<h2 className="text-2xl font-bold text-yellow-500 mt-2">
{draft.length}
</h2>
</div>

</div>


<div className="bg-white rounded-lg shadow p-5">

<div className="flex justify-between items-center mb-5">

<h2 className="text-base font-bold">
Blog Management
</h2>

<button
onClick={() => navigate("/admin/add-blog")}
className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700"
>
Add New Blog
</button>

</div>



<div className="overflow-x-auto">

<table className="w-full text-sm table-auto">

<thead>

<tr className="border-b text-gray-600">

<th className="py-3 text-left">Title</th>
<th className="text-center">Author</th>
<th className="text-center">Status</th>
<th className="text-center">Actions</th>

</tr>

</thead>



<tbody className="text-gray-700">

{blogs.map(blog => (

<tr key={blog.id} className="border-b hover:bg-gray-50">

<td className="py-3">{blog.title}</td>

<td className="text-center">{blog.author}</td>


<td className="text-center">

{blog.status === "published" ? (

<span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs">
Published
</span>

) : (

<span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-xs">
Draft
</span>

)}

</td>



<td>

<div className="flex justify-center gap-2">


<button
onClick={() => navigate(`/admin/add-blog/${blog.id}`)}
className="bg-yellow-400 text-white px-3 py-1 rounded text-xs hover:bg-yellow-500"
>
Edit
</button>

<button
onClick={() => handleDelete(blog.id)}
className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
>
Delete
</button>


<button
onClick={() => toggleStatus(blog.id)}
className={`text-white px-3 py-1 rounded text-xs ${
blog.status === "published"
? "bg-gray-600 hover:bg-gray-700"
: "bg-green-600 hover:bg-green-700"
}`}
>

{blog.status === "published" ? "Unpublish" : "Publish"}

</button>

</div>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</div>

</div>

</div>

)

}

export default Dashboard