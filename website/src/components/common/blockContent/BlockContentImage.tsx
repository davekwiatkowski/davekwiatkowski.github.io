import { FC } from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import getUrlFor from '../../../util/getUrlFor';
import Image from '../Image';

type BlockImageData = SanityImageSource & {
  asset: { _ref?: string };
  caption?: string;
};

const BlockContentImage:FC<{ node: BlockImageData }> = ({ node }) => {
  if (!node || !node.asset || !node.asset._ref) {
    return null;
  }

  return (
    <figure className="my-8">
      <Image
        className="w-full rounded-lg"
        src={getUrlFor(node).url()}
        alt={node.caption ?? ''}
      />
      {
        node.caption && (
          <figcaption className="text-center text-sm italic mt-3 text-TEXT_DE_EMP">
            {node.caption}
          </figcaption>
        )
      }
    </figure>
  );
};

export default BlockContentImage;
