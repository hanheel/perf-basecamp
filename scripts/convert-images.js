const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const isConvertible = (fileName) => /\.(png|jpg|jpeg)$/i.test(fileName);

const parseOutputFileName = (fileName, extension) =>
  `${fileName.replace(/\.(png|jpg|jpeg|gif)$/i, '')}.${extension}`;

const saveImage = async (image, fileName) => {
  const outputDirectory = path.join(__dirname, '..', 'dist', 'static');
  await fs.promises.writeFile(path.join(outputDirectory, fileName), image);
};

const safeConvertAVIFImage = async (originalImage, fileName) => {
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

const safeConvertWebpImage = async (originalImage, fileName) => {
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
  const fileNames = await fs.promises.readdir(inputDirectory);

  for (const fileName of fileNames) {
    if (!isConvertible(fileName)) continue;
    console.log(`변환 시작 : ${fileName}`);
    const filePath = path.join(inputDirectory, fileName);
    const buffer = await fs.promises.readFile(filePath);
    await safeConvertAVIFImage(buffer, fileName);
    await safeConvertWebpImage(buffer, fileName);
  }
};

if (require.main === module) {
  (async () => {
    await tryConvertImage();
    console.log('✅ 이미지 변환 완료');
  })();
}
