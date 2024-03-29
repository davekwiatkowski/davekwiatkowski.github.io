import {
  FC, useMemo, useState,
} from 'react';
import { Link } from 'react-router-dom';
import getUrlFor from '../../util/getUrlFor';
import { IPostListItemData } from '../../util/data/usePostListData';
import Image from '../common/Image';
import postListItemWidths from '../../constants/postListItemWidths';

const PostListItem: FC<{ post: IPostListItemData; postNumber: number, index:number, }> = ({ post, postNumber, index }) => {
  const { title } = post;
  const slug = post.slug.current;
  const backgroundColor = post.mainImage.asset.metadata.palette.dominant.background;

  const [isHovering, setIsHovering] = useState(false);

  const date = useMemo(() => new Date(post.publishedAt).toLocaleDateString(), [post.publishedAt]);
  const imageSrc = useMemo(() => getUrlFor(post.mainImage).url(), [post.mainImage]);
  const widthClassName = useMemo(() => postListItemWidths[index % postListItemWidths.length], [index]);

  return (
    <div className={`w-full sm:w-[calc(50%-8px)] ${widthClassName} hover:translate-y-[-4px] hover:drop-shadow-lg transition-all duration-200`}>
      <Link
        className="relative block w-full"
        to={`/blog/${slug}`}
        key={slug}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <div
          className="w-full h-[240px] sm:h-[280px] md:-[300px] lg:h-[400px] transition-all duration-200 rounded-[40px] overflow-hidden"
          style={{ backgroundColor }}
        >
          <Image
            src={imageSrc}
            alt={title}
            endingOpacity={isHovering ? 1 : 0.1}
            className={`${isHovering && 'scale-110'} w-full h-full object-cover object-top transition-all duration-200 rounded-3xl md:rounded-[50px]`}
          />
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full p-8 sm:p-12 ${!isHovering && 'mix-blend-plus-lighter'}`}
          style={{ color: isHovering ? '#fff' : backgroundColor }}
        >
          <div className="flex flex-col justify-between w-full h-full">
            <div
              className="text-4xl xl:font-bold lg:text-6xl"
            >
              {title}
            </div>
            <div className="flex flex-row items-baseline justify-between">
              <div
                className="text-xs italic sm:text-lg"
              >
                {date}
              </div>
              <div
                className="text-xs sm:text-lg"
              >
                {postNumber}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostListItem;
