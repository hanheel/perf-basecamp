import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import heroImage from '../../assets/images/hero.png';
export const ImageToGIF = (imageSrc: string) => imageSrc.replace(/\.(png|jpg|jpeg)$/, '.gif');
export const ImageToWEBM = (imageSrc: string) => imageSrc.replace(/\.(png|jpg|jpeg)$/, '.webm');
export const ImageToMP4 = (imageSrc: string) => imageSrc.replace(/\.(png|jpg|jpeg)$/, '.mp4');
import trendingGif from '../../assets/gifs/trending.gif';
import findGif from '../../assets/gifs/find.gif';
import freeGif from '../../assets/gifs/free.gif';

import FeatureItem from './components/FeatureItem/FeatureItem';
import CustomCursor from './components/CustomCursor/CustomCursor';
import AnimatedPath from './components/AnimatedPath/AnimatedPath';

import { changeImageExtension } from '../../utils/changeImageExtension';

import styles from './Home.module.css';

const cx = classNames.bind(styles);

const Home = () => {
  const wrapperRef = useRef<HTMLElement>(null);
  const heroImageWebp = changeImageExtension(heroImage, 'webp');
  const heroImageAvif = changeImageExtension(heroImage, 'avif');

  return (
    <>
      <section className={styles.heroSection}>
        <picture className={styles.heroImageContainer}>
          <source srcSet={heroImageAvif} type="image/avif" className={styles.heroImage} />
          <source srcSet={heroImageWebp} type="image/webp" className={styles.heroImage} />
          <img src={heroImage} alt="메인 배경" className={styles.heroImage} />
        </picture>
        <div className={styles.projectTitle}>
          <h1 className={styles.title}>Memegle</h1>
          <h3 className={styles.subtitle}>gif search engine for you</h3>
        </div>
        <Link to="/search">
          <button type="button" className={cx('cta', 'linkButton')}>
            start search
          </button>
        </Link>
      </section>
      <section ref={wrapperRef} className={styles.featureSection}>
        <AnimatedPath wrapperRef={wrapperRef} />
        <div className={styles.featureSectionWrapper}>
          <h2 className={styles.featureTitle}>Features</h2>
          <div className={styles.featureItemContainer}>
            <FeatureItem title="See trending gif" imageSrc={trendingGif} />
            <FeatureItem title="Find gif for free" imageSrc={findGif} />
            <FeatureItem title="Free for everyone" imageSrc={freeGif} />
          </div>
          <Link to="/search">
            <button type="button" className={styles.linkButton}>
              start search
            </button>
          </Link>
        </div>
      </section>
      <CustomCursor text="memegle" />
    </>
  );
};

export default Home;
