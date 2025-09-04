const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const isConvertible = (fileName: string) => /\.(png|jpg|jpeg)$/i.test(fileName);

const parseOutputFileName = (fileName: string, extension: string) =>
  `${fileName.replace(/\.(png|jpg|jpeg)$/i, '')}.${extension}`;

const saveImage = async (image: Buffer, fileName: string) => {
  const outputDirectory = path.join(__dirname, '..', 'dist', 'static');
  await fs.promises.writeFile(path.join(outputDirectory, fileName), image);
};

const safeConvertAVIFImage = async (originalImage: Buffer, fileName: string) => {
  try {
    const avifImage = await sharp(originalImage).avif({ quality: 75 }).toBuffer();
    await saveImage(avifImage, parseOutputFileName(fileName, 'avif'));
  } catch (error) {
    if (error instanceof Error) {
      console.warn(`AVIF 변환 실패 : ${fileName} ${error.message}`);
      return null;
    }
  }
};

const safeConvertWebpImage = async (originalImage: Buffer, fileName: string) => {
  try {
    const webpImage = await sharp(originalImage).webp({ quality: 75 }).toBuffer();
    await saveImage(webpImage, parseOutputFileName(fileName, 'webp'));
  } catch (error) {
    if (error instanceof Error) {
      console.warn(`WebP 변환 실패 : ${fileName} ${error.message}`);
      return null;
    }
  }
};

const tryConvertImage = async () => {
  const inputDirectory = path.join(__dirname, '..', 'src', 'assets', 'images');
  const files = await fs.promises.readdir(inputDirectory);

  for (const file of files) {
    const filePath = path.join(inputDirectory, file);

    if (!isConvertible(filePath)) continue;
    console.log(filePath);
    const buffer = await fs.promises.readFile(filePath);
    await safeConvertAVIFImage(buffer, file);
    await safeConvertWebpImage(buffer, file);
  }
};

if (require.main === module) {
  (async () => {
    await tryConvertImage();
    console.log('✅ 이미지 변환 완료');
  })();
}
