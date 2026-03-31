import React from "react";
import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";
const NewsCard = ({ news }) => {
  const {id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  // Format date
  const formattedDate = new Date(author.published_date).toDateString();

  return (
    <div className="card bg-base-100 shadow-md p-4 space-y-3">

      {/* 🔹 Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* 🔹 Title */}
      <h2 className="font-bold text-lg">{title}</h2>

      {/* 🔹 Image */}
      <img
        src={thumbnail_url}
        alt="news"
        className="w-full h-52 object-cover rounded-md"
      />

      {/* 🔹 Details */}
      <p className="text-sm text-gray-600">
        {details.length > 150
          ? details.slice(0, 150) + "..."
          : details}
        <Link to={`/news-details/${id}`} className="text-orange-500 cursor-pointer ml-1">
          Read More
        </Link>
      </p>

      {/* 🔹 Footer */}
      <div className="flex justify-between items-center pt-2 border-t">

        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(Math.round(rating.number))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 ml-2">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>

      </div>
    </div>
  );
};

export default NewsCard;