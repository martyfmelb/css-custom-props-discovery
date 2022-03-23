import React from 'react';
import styles from './ContainerQueriesMixinifiedContent.module.scss';

const InnerLayout = function () {
  return (
    <div className={styles.innerLayout}>
      <div className={styles.innerLayout__cell}>
        Go columnar
      </div>
      <div className={styles.innerLayout__cell}>when xxxs</div>
      <div className={styles.innerLayout__cell}>
        <span className="hide-except-xxxs">xxxs</span>
        <span className="hide-except-xxs">xxs</span>
        <span className="hide-except-xs">xs</span>
        <span className="hide-except-sm">sm</span>
        <span className="hide-except-md">md</span>
        <span className="hide-except-lg">lg</span>
      </div>
    </div>
  );
};

function ContainerQueriesMixinifiedContent() {
  return (
    <>
      <div className="s-typography -keep-margin-bottom">
        <h1>Container Queries</h1>
        <h2 className="s-tg-h3">Outside the layout container, which media query is active?</h2>
      </div>

      <InnerLayout />

      <div className="s-typography -keep-margins">
        <h2 className="s-tg-h3">Inside the layout container, which media query is active?</h2>
      </div>

      <div className={styles.outerLayout}>
        <div className={styles.outerLayout__main}>
          <p>
            Itineris tramitem cresceres, tanquam rusticus victrix. Salvus, dexter lamias cito
            desiderium de festus, albus gallus.
          </p>
          <p>
            Orgia de festus luba, visum detrius! Cur contencio trabem? Parma, calceus, et amicitia.
            A falsis, abactus varius consilium.Est germanus genetrix, cesaris. Navis de neuter
            ventus, manifestum armarium! Gabalium placidus liberi est. Sunt caculaes dignus lotus,
            pius indictioes.
          </p>
          <p>
            Finiss nocere in sala! Elevatus domesticus gemna est. Nunquam vitare planeta. Compaters
            credere, tanquam teres calcaria. Pulchritudine regius tabes est. Vae.
          </p>
          <InnerLayout />
        </div>
        <div className={styles.outerLayout__sidebar}>
          <div className={styles.outerLayout__sidebarMq}>
            Sidebar
            <InnerLayout />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContainerQueriesMixinifiedContent;
