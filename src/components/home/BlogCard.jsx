import { Link } from "react-router";
import ReadMoreButton from "./ReadMoreButton";

const BlogCard = ({ data }) => {
  return (
    <Link
      to={`/blogs/${data.id}`}
      className="group block bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
          src={data.thumbnail} 
          alt={data.title}
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {data.title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
          {data.description}
        </p>

        {/* Read More Button */}
        {/* <div className="flex items-center justify-between">
          <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
            Read more
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </div> */}

        <ReadMoreButton />
      </div>
    </Link>
  );
};

export default BlogCard;
