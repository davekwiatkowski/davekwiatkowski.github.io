import {
  FC, useCallback, useState,
} from 'react';

const Image: FC<{ src: string, alt: string, className?: string, endingOpacity?: number, style?: React.CSSProperties }> = ({
  src, alt, className, endingOpacity = 1, style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <img
      src={src}
      onLoad={onLoad}
      alt={alt}
      className={`${className} transition-opacity duration-200`}
      style={{ ...(style || {}), opacity: isLoaded ? endingOpacity : 0 }}
    />
  );
};

export default Image;
