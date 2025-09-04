const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const isConvertible = (fileName) => /\.gif$/i.test(fileName);
const parseOutputFileName = (fileName, extension) =>
  `${fileName.replace(/\.(gif)$/i, '')}.${extension}`;

const safeConvertToWebm = (filePath) => {
  const fileName = path.basename(filePath, '.gif');
  try {
    const outputDirectory = path.join(__dirname, '..', 'dist', 'static');
    execSync(
      `ffmpeg -i ${filePath} -c:v libvpx-vp9 -b:v 0 -crf 41 ${outputDirectory}/${parseOutputFileName(
        fileName,
        'webm'
      )}`
    );
  } catch (error) {
    console.warn(`GIF 변환 실패 : ${fileName} ${error.message}`);
  }
};

const safeConvertToMp4 = (filePath) => {
  const fileName = path.basename(filePath, '.gif');
  try {
    const outputDirectory = path.join(__dirname, '../dist/static');
    execSync(
      `ffmpeg -i ${filePath} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 25 ${outputDirectory}/${parseOutputFileName(
        fileName,
        'mp4'
      )}`
    );
  } catch (error) {
    console.warn(`MP4 변환 실패 : ${fileName} ${error.message}`);
  }
};

const deleteGif = (filePath) => {
  const fileName = path.basename(filePath, '.gif');
  try {
    fs.unlinkSync(filePath);
    console.log(`✅ GIF 삭제 : ${filePath}`);
  } catch (error) {
    console.warn(`GIF 삭제 실패 : ${fileName} ${error.message}`);
  }
};

const tryConvertGif = async () => {
  const inputDirectory = path.join(__dirname, '../src/assets/gifs');
  const outputDirectory = path.join(__dirname, '../dist/static');
  const fileNames = fs.readdirSync(inputDirectory);

  for (const fileName of fileNames) {
    if (!isConvertible(fileName)) continue;
    console.log(`변환 시작 : ${fileName}`);

    const filePath = path.join(inputDirectory, fileName);
    const deletePath = path.join(outputDirectory, fileName);
    safeConvertToWebm(filePath);
    safeConvertToMp4(filePath);
    deleteGif(deletePath);
  }
};

if (module.parent === null) {
  (async () => {
    await tryConvertGif();
    console.log('✅ GIF 변환 완료');
  })();
}
