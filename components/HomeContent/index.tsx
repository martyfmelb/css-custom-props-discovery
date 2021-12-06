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
              Use classes and CSS custom properties together to implement theming.
            </p>
          </a>
        </Link>

        <Link href="/container-queries">
          <a className={styles.card}>
            <h2>Container Queries &rarr;</h2>
            <p>
              Use classes and CSS custom properties together to implement container queries.
            </p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default HomeContent;
