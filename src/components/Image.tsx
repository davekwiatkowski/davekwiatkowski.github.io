import React, { FC, CSSProperties } from 'react';

export interface IImageProps {
  description: string;
  source: string;
  style?: CSSProperties;
}

const Image: FC<IImageProps> = (props) => (
  <img
    src={props.source}
    alt={props.description}
    title={props.description}
    style={props.style}
  />
);

export default Image;