import React, { FC, CSSProperties } from 'react';

export interface IImageProps {
  description: string;
  source: string;
  style?: CSSProperties;
}

const Image: FC<IImageProps> = (props) => (
  <figure>
    <img
      src={props.source}
      alt={props.description}
      title={props.description}
      style={props.style}
    />
    <figcaption>{props.description}</figcaption>
  </figure>
);

export default Image;