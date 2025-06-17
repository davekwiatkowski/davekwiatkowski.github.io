import { FC } from 'react';

const Redirect:FC<{ url: string }> = ({ url }) => {
  window.location.href = url;
  return null;
};

export default Redirect;
