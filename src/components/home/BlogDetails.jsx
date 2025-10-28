import React, { useEffect, useState } from "react";
import { blogservices } from "../../services/api";
import { useParams } from "react-router";
import Loading from "../loading";

const BlogDetails = () => {
  const [productData, setProductData] = useState({});
  const params = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const res = await blogservices.blogdetails(params.id);
        setProductData(res);
        setLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-4xl mx-auto px-5 py-12">
      
      <div className="w-full mb-10 relative rounded-3xl overflow-hidden shadow-md">
        <img
          src={productData.thumbnail}
          alt="Blog cover"
          className="w-full h-80 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
        {productData.title}
      </h1>

      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-10">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Author avatar"
          className="w-8 h-8 rounded-full mr-2 border border-gray-300"
        />
        <span>
          By <strong className="text-gray-700">Shimanto Sarkar</strong>
        </span>
        <span className="mx-2">•</span>
        <span>October 23, 2025</span>
        <span className="mx-2">•</span>
        <span>5 min read</span>
      </div>


      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        <p className="text-lg text-gray-700 mb-6">{productData.description}</p>

        <p className="mb-6">
          In this blog, we explore some of the most breathtaking natural
          landscapes and discuss how spending time outdoors can boost your
          mental and physical health. Whether you're hiking up a trail or simply
          enjoying the sunset by the lake, nature offers countless opportunities
          for reflection and joy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 border-l-4 border-blue-500 pl-3">
          The Magic of the Mountains
        </h2>
        <p className="mb-6">
          Standing atop a mountain and looking down upon the valleys below is a
          humbling experience. The cool air, the quiet, and the vastness of the
          scenery remind us how small yet significant our existence is.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-5 italic text-gray-600 bg-blue-50 py-3 px-4 rounded-md shadow-sm">
          “In every walk with nature, one receives far more than he seeks.” – John Muir
        </blockquote>

        <p className="mt-6">
          As we continue to urbanize, it's crucial to preserve these natural
          wonders for future generations. Protecting the environment ensures
          that our children can also experience the magic that nature brings.
        </p>
      </div>

   
      <div className="mt-12 mb-6 border-t border-gray-200"></div>


      <div className="text-center text-gray-500">
        <p className="text-sm">Enjoyed this post?</p>
        <button className="mt-3 px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-medium shadow-md">
          Read More Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
