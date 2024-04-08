import BlockContent from '@sanity/block-content-to-react';
import { FC, useMemo } from 'react';
import BlockContentLink from './BlockContentLink';
import BlockContentImage from './BlockContentImage';
import sanityClient from '../../../constants/sanityClient';

const CustomBlockContent: FC<{ blocks: any }> = ({ blocks }) => {
  const sanityConfig = useMemo(() => sanityClient.config(), []);

  return (
    <BlockContent
      className="unreset text-justify"
      blocks={blocks}
      projectId={sanityConfig.projectId}
      dataset={sanityConfig.dataset}
      serializers={{
        marks: {
          link: BlockContentLink,
        },
        types: {
          image: BlockContentImage,
        },
      }}
    />
  );
};

export default CustomBlockContent;
