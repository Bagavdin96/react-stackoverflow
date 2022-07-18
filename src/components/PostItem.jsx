import React from "react";

export function PostItem({ post }) {
  return (
    <div className="relative border h-10 px-2 mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={post.link} target="_black">
        <p className="ml-10 text-xs lg:text-base md:text-sm">{post.title}</p>
        {post.owner.profile_image && (//если есть фото профиля - отрисуй
          <img
            src={post.owner.profile_image}
            alt="PI"
            className="h-10 w-10 absolute top-0 left-1"
          />
        )}
      </a>
    </div>
  );
}
