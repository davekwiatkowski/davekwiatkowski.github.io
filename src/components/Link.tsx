import React, { FC } from 'react';
import './Link.css';

interface ILinkProps {
  text: string;
  url: string;
  isPrecededBySpace?: boolean;
  isSucceededBySpace?: boolean;
}

const Link: FC<ILinkProps> = (props) => (
  <span className='Link'>
    {props.isPrecededBySpace && ' '}
    <a target='_blank'
      rel='noopener noreferrer'
      href={props.url}>
      {props.text}
    </a>
    {props.isSucceededBySpace && ' '}
  </span>
);

export default Link;