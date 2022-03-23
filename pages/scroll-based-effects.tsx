import React from 'react';
import ScrollBasedEffectsContent from '../content/ScrollBasedEffectsContent';
import styles from '../content/ScrollBasedEffectsContent/ScrollBasedEffectsContent.module.scss';
import DefaultLayout from '../layouts/DefaultLayout';

function ScrollBasedEffectsPage() {
  return (
    <DefaultLayout footerExtraClasses={styles.pageFooter} suppressCssWatchMouse>
      <ScrollBasedEffectsContent />
    </DefaultLayout>
  );
}

export default ScrollBasedEffectsPage;
