

import { useState } from "react"
import HeroSection from "../../components/HeroSection"
import Footer from "../../components/Footer"
import HighlightBlog from "../../components/HighlightBlog"
import LatestBlogs from "../../components/LatestBlogs"
import Categories from "../../components/Categories"
import CategoryBlogs from "../../components/CategoryBlogs"

function Home(){

const blogs = JSON.parse(localStorage.getItem("blogs")) || []

const publishedBlogs = blogs.filter(
(blog)=> blog.status === "published"
)

const featuredBlog = publishedBlogs[3]

const [category,setCategory] = useState("All")

const filteredBlogs = publishedBlogs.filter((blog)=>{
if(category === "All") return true
return blog.category === category
})

return(
<div className="mt-24">
<HeroSection/>

<HighlightBlog blog={featuredBlog}/>

{/* Latest Blogs - No Filter */}
<LatestBlogs blogs={publishedBlogs}/>

{/* Categories */}
<Categories setCategory={setCategory}/>

{/* Category Filter Blogs */}
<CategoryBlogs blogs={filteredBlogs} category={category}/>

<Footer/>
</div>

)

}

export default Home