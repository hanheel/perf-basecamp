const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const isConvertible = (fileName) => /\.(png|jpg|jpeg)$/i.test(fileName);

const parseOutputFileName = (fileName, extension) =>
  `${fileName.replace(/\.(png|jpg|jpeg|gif)$/i, '')}.${extension}`;

// TODO : name이 아닌 base로 수정
const moveOriginalImage = async (fileName) => {
  const { name } = path.parse(fileName);
  const originDirectory = path.join(__dirname, '../dist/static');
  const targetDirectory = path.join(__dirname, '../dist/static', name);
  if (!fs.existsSync(targetDirectory)) {
    fs.mkdirSync(targetDirectory, { recursive: true });
  }
  await fs.promises.rename(
    path.join(originDirectory, fileName),
    path.join(targetDirectory, fileName)
  );
};

const saveImage = async (image, filePath, extension) => {
  const { name } = path.parse(filePath);
  const outputDirectory = path.join(__dirname, '../dist/static', name);
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }
  await fs.promises.writeFile(
    path.join(outputDirectory, parseOutputFileName(name, extension)),
    image
  );
};

const safeConvertAVIFImage = async (originalImage, filePath) => {
  try {
    const avifImage = await sharp(originalImage).avif({ quality: 75 }).toBuffer();
    await saveImage(avifImage, filePath, 'avif');
  } catch (error) {
    if (error instanceof Error) {
      console.warn(`AVIF 변환 실패 : ${filePath} ${error.message}`);
      return null;
    }
  }
};

const safeConvertWebpImage = async (originalImage, filePath) => {
  try {
    const webpImage = await sharp(originalImage).webp({ quality: 75 }).toBuffer();
    await saveImage(webpImage, filePath, 'webp');
  } catch (error) {
    if (error instanceof Error) {
      console.warn(`WebP 변환 실패 : ${filePath} ${error.message}`);
      return null;
    }
  }
};

const tryConvertImage = async () => {
  const inputDirectory = path.join(__dirname, '../src/assets/images');
  const fileNames = await fs.promises.readdir(inputDirectory);

  for (const fileName of fileNames) {
    if (!isConvertible(fileName)) continue;
    console.log(`변환 시작 : ${fileName}`);
    const filePath = path.join(inputDirectory, fileName);

    const buffer = await fs.promises.readFile(filePath);
    await safeConvertAVIFImage(buffer, filePath);
    await safeConvertWebpImage(buffer, filePath);

    await moveOriginalImage(fileName);
  }
};

if (require.main === module) {
  (async () => {
    await tryConvertImage();
    console.log('✅ 이미지 변환 완료');
  })();
}
