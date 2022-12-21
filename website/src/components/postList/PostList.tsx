import { FC } from 'react';
import usePostListData from '../../util/data/usePostListData';
import LoadingSignal from '../common/LoadingSignal';
import PostListItem from './PostListItem';

const PostList: FC = () => {
  const postListData = usePostListData();

  return (
    <div>
      <div className="flex flex-row flex-wrap max-w-screen-xl">
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
                index={index}
              />
            ))
        ) : (
          <LoadingSignal />
        )}
      </div>
    </div>
  );
};

export default PostList;
