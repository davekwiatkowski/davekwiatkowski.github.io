import { FC } from 'react';
import getUrlFor from '../../util/getUrlFor';

const BlogPostPageImage:FC<{ node: any }> = ({ node }) => {
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
      <figcaption className="text-sm italic text-center text-stone-600">
        {node.caption}
      </figcaption>
      )}
    </figure>
  );
};

export default BlogPostPageImage;
