import { FC } from 'react';
import usePostListData from '../../util/data/usePostListData';
import LoadingSignal from '../common/LoadingSignal';
import PostListItem from './PostListItem';

const PostList: FC = () => {
  const postListData = usePostListData();

  return (
    <div className="flex flex-row flex-wrap justify-between w-full max-w-screen-xl gap-4">
      {postListData ? (
        postListData
          .sort(
            (a, b) => new Date(b.publishedAt).getTime()
                - new Date(a.publishedAt).getTime(),
          )
          .map((post, index: number) => (
            <PostListItem
              index={index}
              key={post.publishedAt}
              post={post}
              postNumber={postListData.length - 1 - index + 1}
            />
          ))
      ) : (
        <LoadingSignal />
      )}
    </div>
  );
};

export default PostList;
