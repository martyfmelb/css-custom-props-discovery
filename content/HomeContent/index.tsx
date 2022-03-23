import Link from 'next/link';
import React from 'react';
import styles from './HomeContent.module.scss';

function HomeContent() {
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
              Use CSS custom properties directly to implement container queries.
            </p>
          </a>
        </Link>

        <Link href="/container-queries-mixinified">
          <a className={styles.card}>
            <h2>Container Queries Mixinified &rarr;</h2>
            <p>
              Container queries using Sass mixins for better maintainability.
            </p>
          </a>
        </Link>

        <Link href="/scroll-based-effects">
          <a className={styles.card}>
            <h2>Scroll-based Effects &rarr;</h2>
            <p>
              One tiny piece of JS fuels many CSS custom property-driven effects.
            </p>
          </a>
        </Link>

        <Link href="/responsive-design-tokens">
          <a className={styles.card}>
            <h2>Responsive design tokens &rarr;</h2>
            <p>
              Use a single token, get all the breakpoints.
            </p>
          </a>
        </Link>
      </div>
    </>
  );
}

export default HomeContent;
