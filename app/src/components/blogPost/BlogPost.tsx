import { FC } from "react";
import { Link } from "react-router-dom";
import getUrlFor from "../../util/getUrlFor";

const BlogPost: FC<{ post: any; index: number }> = ({ post, index }) => {
  return (
    <div className="flex flex-col w-full pb-4 pr-4 sm:w-1/2 lg:w-1/3">
      <h2
        className={`pb-1 text-sm italic ${
          index === 0 ? "font-semibold" : "font-light"
        }`}>
        {new Date(post.publishedAt).toDateString()}
      </h2>
      <Link
        className="w-full"
        to={"/" + post.slug.current}
        key={post.slug.current}>
        <div
          className={`flex flex-row h-full hover:shadow-xl rounded-3xl transition hover:bg-blue-200 ${
            index === 0 ? "bg-blue-100" : "bg-white"
          }`}>
          <img
            src={getUrlFor(post.mainImage).url()}
            alt={post.title}
            className="w-[132px] h-[132px] object-cover shrink-0 rounded-l-3xl border-BG"
          />
          <div className={"text-2xl md:text-3xl font-extralight p-3"}>
            {post.title}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPost;
