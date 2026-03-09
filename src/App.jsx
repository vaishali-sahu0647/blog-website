import { Routes, Route } from "react-router-dom"
import Home from "./pages/public/Home"
import BlogDetail from "./pages/public/BlogDetail"

import Login from "./pages/admin/Login"
import Dashboard from "./pages/admin/Dashboard"
import BlogList from "./pages/admin/BlogList"
import AddBlog from "./pages/admin/AddBlog"
import EditBlog from "./pages/admin/EditBlog"
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute"



function App(){
  return(
    <>
    
       <Navbar/>
       <Routes>
     

      {/* Public Routes */}

      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<BlogDetail />} />

      {/* Admin Routes */}

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
      <Route path="/admin/edit-blog/:id" element={
        <PrivateRoute>
         <EditBlog />
        </PrivateRoute>
        } />

    </Routes>
     </>
   
  
  
  
  
  )
}
export default App