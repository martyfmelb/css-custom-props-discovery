import Link from 'next/link';
import React from 'react';
import styles from './HomeContent.module.scss';

const HomeContent = function () {
  return (
    <>
      <h1 className={styles.title}>CSS custom properties</h1>

      <div className={styles.grid}>
        <Link href="/theming">
          <a className={styles.card}>
            <h2>Theming &rarr;</h2>
            <p>
              Use Sass variables and CSS custom properties together for content-sensitive
              theming.
            </p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default HomeContent;
