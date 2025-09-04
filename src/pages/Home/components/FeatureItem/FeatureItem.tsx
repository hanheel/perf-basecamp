import { getImageSrc } from '../../../../utils/changeImageExtension';
import styles from './FeatureItem.module.css';

type FeatureItemProps = {
  title: string;
  imageSrc: string;
};

const FeatureItem = ({ title, imageSrc }: FeatureItemProps) => {
  const webmSrc = getImageSrc(imageSrc, 'webm');
  const mp4Src = getImageSrc(imageSrc, 'mp4');
  // TODO : 유틸로 빼기
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <div className={styles.featureItem}>
      {isProduction ? (
        <video className={styles.featureImageContainer} autoPlay loop muted playsInline>
          <source className={styles.featureImage} src={webmSrc} type="video/webm" />
          <source className={styles.featureImage} src={mp4Src} type="video/mp4" />
        </video>
      ) : (
        <img className={styles.featureImage} src={imageSrc} alt={title} />
      )}

      <div className={styles.featureTitleBg} />
      <h4 className={styles.featureTitle}>{title}</h4>
    </div>
  );
};

export default FeatureItem;
