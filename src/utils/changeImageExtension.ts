export const changeImageExtension = (imageSrc: string, extension: string) =>
  imageSrc.replace(/\.(png|jpg|jpeg|gif)$/, `.${extension}`);
