import { getAssetSrc } from '../../../../utils/changeImageExtension';
import styles from './FeatureItem.module.css';

type FeatureItemProps = {
  title: string;
  imageSrc: string;
};

const FeatureItem = ({ title, imageSrc }: FeatureItemProps) => {
  const webmSrc = getAssetSrc(imageSrc, 'webm');
  const mp4Src = getAssetSrc(imageSrc, 'mp4');

  return (
    <div className={styles.featureItem}>
      <video className={styles.featureImageContainer} autoPlay loop muted playsInline>
        <source src={webmSrc} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
      </video>
      <img className={styles.featureImage} src={imageSrc} alt={title} />

      <div className={styles.featureTitleBg} />
      <h4 className={styles.featureTitle}>{title}</h4>
    </div>
  );
};

export default FeatureItem;
