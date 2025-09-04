export const changeImageExtension = (imageSrc: string, extension: string) => {
  if (process.env.NODE_ENV === 'production') {
    const fileName = imageSrc
      .split('/')
      .pop()
      ?.replace(/\.(png|jpg|jpeg|gif)$/i, '');
    return `./static/${fileName}/${fileName}.${extension}`;
  }
  return imageSrc;
};
