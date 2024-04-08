import { FC } from 'react';
import getUrlFor from '../../../util/getUrlFor';
import { PostImageData } from '../../../util/data/usePostData';
import Image from '../Image';

const BlockContentImage:FC<{ node: PostImageData }> = ({ node }) => {
  if (!node || !node.asset || !node.asset._ref) {
    return null;
  }

  return (
    <figure className="mb-4">
      <Image
        className="w-full"
        src={getUrlFor(node).url()}
        alt={node.caption ?? ''}
      />
      {
        node.caption && (
          <figcaption className="text-center text-sm italic mt-4 text-TEXT_DE_EMP">
            {node.caption}
          </figcaption>
        )
      }
    </figure>
  );
};

export default BlockContentImage;
