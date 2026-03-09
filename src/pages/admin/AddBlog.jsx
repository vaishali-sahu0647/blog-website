import { useState } from "react"

function AddBlog(){

const [title,setTitle] = useState("")
const [content,setContent] = useState("")
const [author,setAuthor] = useState("")
const [status,setStatus] = useState("draft")

const handleSubmit = (e) => {

e.preventDefault()

const blogs = JSON.parse(localStorage.getItem("blogs")) || []

const newBlog = {

id: Date.now(),
title: title,
content: content,
author: author,
status: status,
date: new Date().toLocaleDateString()

}

blogs.push(newBlog)

localStorage.setItem("blogs", JSON.stringify(blogs))

alert("Blog Saved")

}

return(

<div style={{padding:"40px"}}>

<h2>Add Blog</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Blog Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<br/><br/>

<textarea
placeholder="Blog Content"
onChange={(e)=>setContent(e.target.value)}
/>

<br/><br/>

<input
type="text"
placeholder="Author Name"
onChange={(e)=>setAuthor(e.target.value)}
/>

<br/><br/>

<select onChange={(e)=>setStatus(e.target.value)}>

<option value="draft">Draft</option>
<option value="published">Published</option>

</select>

<br/><br/>

<button type="submit">
Save Blog
</button>

</form>

</div>

)

}

export default AddBlog