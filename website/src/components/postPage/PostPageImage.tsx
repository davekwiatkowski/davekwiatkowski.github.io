import { FC } from 'react';
import getUrlFor from '../../util/getUrlFor';
import { PostImageData } from '../../util/data/usePostData';

const PostPageImage:FC<{ node: PostImageData }> = ({ node }) => {
  if (!node || !node.asset || !node.asset._ref) {
    return null;
  }

  return (
    <figure className="mb-4">
      <img
        src={getUrlFor(node).url()}
        alt={node.caption ?? undefined}
      />
      {node.caption && (
      <figcaption className="text-sm italic text-center text-TEXT_DE_EMP">
        {node.caption}
      </figcaption>
      )}
    </figure>
  );
};

export default PostPageImage;
