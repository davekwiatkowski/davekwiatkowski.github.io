import { FC, useEffect } from 'react';

const Redirect:FC<{ url: string }> = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null;
};

export default Redirect;
