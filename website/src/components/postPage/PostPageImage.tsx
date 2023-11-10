import { FC } from 'react';
import getUrlFor from '../../util/getUrlFor';
import { PostImageData } from '../../util/data/usePostData';
import Image from '../common/Image';

const PostPageImage:FC<{ node: PostImageData }> = ({ node }) => {
  if (!node || !node.asset || !node.asset._ref) {
    return null;
  }

  return (
    <figure className="mb-4">
      <Image
        src={getUrlFor(node).url()}
        alt={node.caption ?? ''}
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
