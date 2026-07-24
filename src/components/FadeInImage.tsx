import { useState } from 'react';

type FadeInImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

/**
 * Renders an image that stays hidden until it has *fully* loaded, then appears
 * gracefully. This prevents the glitchy partial render where an image paints
 * halfway and then fills in the rest.
 */
function FadeInImage({ className = '', onLoad, loading = 'eager', ...props }: FadeInImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      {...props}
      loading={loading}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      className={`transition-opacity duration-300 ease-out ${
        loaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    />
  );
}

export default FadeInImage;
