import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import styles from './ScrollBasedEffectsContent.module.scss';

type SectionProps = {
  className: string
};

const Section: React.FC<SectionProps> = function ({ children, className }) {
  return (
    <div className={classNames(styles.section, className)}>
      <div className={styles.sectionTop} />
      <div className={styles.sectionLeft} />
      <div className={styles.sectionRight} />
      <div className={styles.sectionBottom} />
      { children }
    </div>
  );
};

const ScrollBasedEffectsContent = function () {
  const scrollHandler = useCallback(() => {
    document.documentElement.style.setProperty('--scroll-x', `${window.scrollX}px`);
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <div className={styles.root3d}>
      <h1>Scroll-based Effects</h1>
      <div className={styles.backgroundOrnament}></div>
      <Section className={classNames(styles.sectionWidth80)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth60)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth100)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth40)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth60)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth80)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth60)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth100)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth40)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth60)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth80)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth60)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth100)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth40)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth60)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth80)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth60)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth100)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth40)}>
        <h2>Section 3D</h2>
      </Section>
      <Section className={classNames(styles.sectionWidth60)}>
        <h2>Section 3D</h2>
      </Section>
    </div>
  );
};

export default ScrollBasedEffectsContent;
