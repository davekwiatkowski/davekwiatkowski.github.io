import {
  FC, useCallback,
} from 'react';

const Image: FC<{
  src: string,
  alt: string,
  className?: string,
  onImageLoad?: () => void;
}> = ({
  src,
  alt,
  className = '',
  onImageLoad,
}) => {
  const onLoad = useCallback(() => {
    onImageLoad?.();
  }, [onImageLoad]);

  return (
    <img
      src={src}
      onLoad={onLoad}
      alt={alt}
      className={className ?? ''}
    />
  );
};

export default Image;
