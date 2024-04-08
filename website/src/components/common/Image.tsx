import {
  FC, useCallback, useState,
} from 'react';

const Image: FC<{
  src: string,
  alt: string,
  className?: string,
  endingOpacity?: number,
  style?: React.CSSProperties
  onImageLoad?: () => void;
}> = ({
  src,
  alt,
  className = '',
  endingOpacity = 1,
  style,
  onImageLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setIsLoaded(true);
    onImageLoad?.();
  }, [onImageLoad]);

  return (
    <img
      src={src}
      onLoad={onLoad}
      alt={alt}
      className={`
        ${className ?? ''} 
        transition-opacity duration-200
      `}
      style={{ ...(style || {}), opacity: isLoaded ? endingOpacity : 0 }}
    />
  );
};

export default Image;
