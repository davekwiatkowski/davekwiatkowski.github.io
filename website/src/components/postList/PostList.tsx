import { FC } from 'react';
import usePostListData from '../../util/data/usePostListData';
import LoadingSignal from '../common/LoadingSignal';
import PostListItem from './PostListItem';

const PostList: FC = () => {
  const postListData = usePostListData();

  return (
    <div className="w-full pt-4 p-8">
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
