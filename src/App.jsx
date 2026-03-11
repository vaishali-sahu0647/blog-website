import { Routes, Route, useLocation} from "react-router-dom"
import Home from "./pages/public/Home"
import BlogDetail from "./pages/public/BlogDetail"

import Login from "./pages/admin/Login"
import Dashboard from "./pages/admin/Dashboard"
import BlogList from "./pages/admin/BlogList"
import AddBlog from "./pages/admin/AddBlog"
import EditBlog from "./pages/admin/EditBlog"
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute"
import LatestBlogs from "./components/LatestBlogs"



function App(){
  const location = useLocation()
  const isAdminPage = location.pathname.startsWith("/admin");
  
  return(
    <>
    
     {!isAdminPage && <Navbar/>}
      
       <Routes>
     

      

      <Route path="/" element={<Home />} />
      <Route 
    path="/blogs" 
    element={
    <LatestBlogs 
    blogs={
    (JSON.parse(localStorage.getItem("blogs")) || [])
    .filter(blog => blog.status === "published")
    }
/>
}
/>
      

      <Route path="/blog/:id" element={<BlogDetail />} />

     

      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
        } />
      <Route path="/admin/blogs" element={
        <PrivateRoute>
        <BlogList />
        </PrivateRoute>} />
      <Route path="/admin/add-blog" element={
        <PrivateRoute>
          <AddBlog />
        </PrivateRoute>
        } />
      <Route path="/admin/add-blog/:id" element={
        <PrivateRoute>
          <AddBlog />
         
        </PrivateRoute>
        } />

    </Routes>
     </>
   
  
  
  
  
  )
}
export default App