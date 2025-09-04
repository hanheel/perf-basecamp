import { changeImageExtension } from '../../../../utils/changeImageExtension';
import styles from './FeatureItem.module.css';

type FeatureItemProps = {
  title: string;
  imageSrc: string;
};

const FeatureItem = ({ title, imageSrc }: FeatureItemProps) => {
  const webmSrc = changeImageExtension(imageSrc, 'webm');
  const mp4Src = changeImageExtension(imageSrc, 'mp4');

  return (
    <div className={styles.featureItem}>
      <video className={styles.featureImageContainer} autoPlay loop muted playsInline>
        <source className={styles.featureImage} src={webmSrc} type="video/webm" />
        <source className={styles.featureImage} src={mp4Src} type="video/mp4" />
        <img className={styles.featureImage} src={imageSrc} alt={title} />
      </video>
      <div className={styles.featureTitleBg} />
      <h4 className={styles.featureTitle}>{title}</h4>
    </div>
  );
};

export default FeatureItem;
