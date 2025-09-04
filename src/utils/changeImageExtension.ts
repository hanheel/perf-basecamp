// TODO : 겹치는거 constants 분리

const SIZES = ['400', '800', '1600'];

export const getImageSrc = (imageSrc: string, extension: string) => {
  if (process.env.NODE_ENV === 'production') {
    const fileName = imageSrc
      .split('/')
      .pop()
      ?.replace(/\.(png|jpg|jpeg|gif)$/i, '');
    return `./static/${fileName}/${fileName}.${extension}`;
  }
  return imageSrc;
};

export const getOptimizedImageSrcSet = (imageSrc: string, extension: string) => {
  const fileName = imageSrc
    .split('/')
    .pop()
    ?.replace(/\.(png|jpg|jpeg|gif)$/i, '');
  const srcSet = SIZES.map((size) => {
    return `./static/${fileName}/${fileName}-${size}.${extension} ${size}w`;
  });
  return srcSet.join(', ');
};

export const getAnimationSrc = (imageSrc: string, extension: string) => {
  const fileName = imageSrc
    .split('/')
    .pop()
    ?.replace(/\.(png|jpg|jpeg|gif)$/i, '');
  return `./static/${fileName}/${fileName}.${extension}`;
};
