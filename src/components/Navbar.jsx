
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">

      
      <div className="bg-black text-white text-center py-1 text-sm">
        Sharing Knowledge, Ideas & Stories From Around the World
      </div>

      
      <nav className="bg-white shadow">

        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

          
          <div className="flex items-center gap-3">
            <img
              src="https://wikilovesfolklore.org/wp-content/uploads/2024/11/cropped-Wiki_Loves_Folklore_banner_logo-1536x570.webp"
              alt="logo"
              className="h-10"
            />

            <Link to="/" className="text-xl font-bold text-gray-800">
              Blog CMS
            </Link>
          </div>

        
          <ul className="flex gap-6 text-gray-700 font-medium">

            <li>
              <Link to="/" className="hover:text-black no-underline">
                Home
              </Link>
            </li>

            <li>
              <Link to="/blogs" className="hover:text-black no-underline">
                Blogs
              </Link>
            </li>

             <li>
              <Link to="/admin/login" className="hover:text-black no-underline">
                login
              </Link>
            </li>


          </ul>

        </div>

      </nav>

    </div>
  );
}

export default Navbar;

