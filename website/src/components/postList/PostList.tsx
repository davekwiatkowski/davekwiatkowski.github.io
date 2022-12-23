import { FC } from 'react';
import usePostListData from '../../util/data/usePostListData';
import LoadingSignal from '../common/LoadingSignal';
import PostListItem from './PostListItem';

const PostList: FC = () => {
  const postListData = usePostListData();

  return (
    <div className="flex flex-row flex-wrap max-w-screen-xl w-full">
      {postListData ? (
        postListData
          .sort(
            (a, b) => new Date(b.publishedAt).getTime()
                - new Date(a.publishedAt).getTime(),
          )
          .map((post, index: number) => (
            <PostListItem
              key={post.publishedAt}
              post={post}
              index={postListData.length - 1 - index}
            />
          ))
      ) : (
        <LoadingSignal />
      )}
    </div>
  );
};

export default PostList;
