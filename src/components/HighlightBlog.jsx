import { Link } from "react-router-dom";

function HighlightBlog({ blog }) {
  if (!blog) return null;

  return (
    <div className="max-w-6xl mx-auto my-16 px-4">

      <h2 className="text-3xl font-bold text-center mb-10">
        Highlight Blog
      </h2>

      <div className="relative rounded-xl overflow-hidden shadow-2xl">

        {/* Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[450px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-end justify-end p-8">

          {/* Content Box Right Side */}
          <div className="backdrop-blur-md bg-gray-300/30 
          p-6 rounded-xl text-white max-w-md
          flex flex-col items-center text-center
          transition duration-500 hover:bg-gray-300/40">

            <h3 className="text-2xl font-bold mb-3">
              {blog.title}
            </h3>

            <p className="text-gray-100 mb-5">
              {blog.content.substring(0, 200)}...
            </p>

            <Link
              to={`/blog/${blog.id}`}
              className="bg-white text-gray-900 px-6 py-2 
              rounded-md font-medium
              transition hover:scale-105 hover:bg-gray-200"
            >
              Read Full Blog →
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HighlightBlog;