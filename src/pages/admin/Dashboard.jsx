function Dashboard(){

const blogs = JSON.parse(localStorage.getItem("blogs")) || []

const published = blogs.filter(b => b.status === "published")
const draft = blogs.filter(b => b.status === "draft")

return(

<div >

<h2>Admin Dashboard</h2>

<div >

<h3>Total Blogs: {blogs.length}</h3>

<h3>Published Blogs: {published.length}</h3>

<h3>Draft Blogs: {draft.length}</h3>

</div>

</div>

)

}

export default Dashboard