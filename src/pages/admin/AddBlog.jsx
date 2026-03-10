import { useState } from "react"

function AddBlog(){

const [title,setTitle] = useState("")
const [content,setContent] = useState("")
const [author,setAuthor] = useState("")
const [image,setImage] = useState("")
const [status,setStatus] = useState("draft")
const [category,setCategory] = useState("")
const [tags,setTags] = useState("")
const handleSubmit = (e) => {

e.preventDefault()

const blogs = JSON.parse(localStorage.getItem("blogs")) || []

const newBlog = {

id: Date.now(),
title: title,
content: content,
author: author,
image: image,
status: status,
category: category,
tags: tags,
date: new Date().toLocaleDateString()

}

blogs.push(newBlog)

localStorage.setItem("blogs", JSON.stringify(blogs))

alert("Blog Saved")

}

return(

<div className="container py-5">

<h2 className="mb-4">Add Blog</h2>

<form onSubmit={handleSubmit} className="card p-4 shadow">

<div className="mb-3">

<input
type="text"
placeholder="Blog Title"
className="form-control"
onChange={(e)=>setTitle(e.target.value)}
/>

</div>

<div className="mb-3">

<textarea
placeholder="Blog Content"
className="form-control"
rows="5"
onChange={(e)=>setContent(e.target.value)}
/>

</div>

<div className="mb-3">

<input
type="text"
placeholder="Author Name"
className="form-control"
onChange={(e)=>setAuthor(e.target.value)}
/>

</div>
<div className="mb-3">

<select
className="form-select"
onChange={(e)=>setCategory(e.target.value)}
>

<option value="">Select Category</option>
<option value="Travel">Travel</option>
<option value="Lifestyle">Lifestyle</option>
<option value="Culture">Culture</option>
<option value="Fashion">Fashion</option>

</select>

</div>
<div className="mb-3">

<input
type="text"
placeholder="Tags (example: React, JavaScript)"
className="form-control"
onChange={(e)=>setTags(e.target.value)}
/>

</div>


<div className="mb-3">

<input
type="text"
placeholder="Image URL"
className="form-control"
onChange={(e)=>setImage(e.target.value)}
/>

</div>

<div className="mb-3">

<select
className="form-select"
onChange={(e)=>setStatus(e.target.value)}
>

<option value="draft">Draft</option>
<option value="published">Published</option>

</select>

</div>

<button className="btn btn-dark">
Save Blog
</button>

</form>

</div>

)

}

export default AddBlog