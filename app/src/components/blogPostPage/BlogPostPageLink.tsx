import { FC } from 'react';

const BlogPostPageLink: FC<{ mark: any }> = ({ mark, children }) => (
  <a
    target="_blank"
    href={mark.href}
    rel="noreferrer"
    className="cursor-pointer"
  >
    {children}
  </a>
);

export default BlogPostPageLink;
