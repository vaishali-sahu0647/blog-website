function BlogList(){

const blogs = JSON.parse(localStorage.getItem("blogs")) || []


const deleteBlog = (id) => {

let blogs = JSON.parse(localStorage.getItem("blogs")) || []

blogs = blogs.filter((blog) => blog.id !== id)

localStorage.setItem("blogs", JSON.stringify(blogs))

window.location.reload()

}
return(

<div style={{padding:"40px"}}>

<h2>All Blogs</h2>

<table border="1" cellPadding="10">

<thead>

<tr>

<th>Title</th>
<th>Author</th>
<th>Status</th>
<th>Date</th>
<th>Action</th>

</tr>

</thead>

<tbody>

{blogs.map((blog)=>(

<tr key={blog.id}>

<td>{blog.title}</td>
<td>{blog.author}</td>
<td>{blog.status}</td>
<td>{blog.date}</td>
<td>

<button onClick={() => deleteBlog(blog.id)}>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default BlogList