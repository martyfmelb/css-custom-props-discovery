import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import styles from './ScrollBasedEffectsContent.module.scss';
import useScrollCssCustomProps from '../../traits/ScrollCssCustomProps';

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

function ScrollBasedEffectsContent() {
  useScrollCssCustomProps();

  return (
    <div className="negate-page-container-padding">
      <div className={styles.root3d}>
        <div className="page-container-padding -suppress-bottom">
          <div className="s-typography -keep-margin-bottom">
            <h1>Scroll-based Effects</h1>
          </div>
        </div>
        <div className={classNames(styles.backgroundOrnament, styles.pattern1)} />
        <div className={classNames(styles.backgroundOrnament, styles.pattern2)} />
        <Section className={classNames(styles.sectionWidth80)}>
          <h2>Section 3D</h2>
        </Section>
        <Section className={classNames(styles.sectionWidth60)}>
          <h2>Section 3D</h2>
        </Section>
        <div className="page-container-padding -suppress-vertical">
          <div className="s-typography -keep-margins">
            <h2>Heading 2 Matrimonii institutio originem rationalistam habere potest</h2>
            <h3>Heading 3 Pellentesque habitant morbi tristique senectus et netus et malesuada</h3>
            <p>
              Amas. Reliqua duo vitae tuae communicare vis. Ita, cum boni ludi assertores, venereum
              cenam et consilium habeas, quomodo commodas tuas ad bene opportunas mores bene
              opportunas alignas.
            </p>
          </div>
        </div>
        <Section className={classNames(styles.sectionWidth80)}>
          <div className="s-typography">
            Proposita sunt tibi ipsi Ulysseo ut vel si momentaneum tentaris
            dissolvere non potes, et potentiam dissolvendi tractatum artis removere ut utrumque in
            relatione perfecte investis.
          </div>
        </Section>
        <div className="page-container-padding -suppress-vertical">
          <div className="s-typography -keep-margins">
            <h4 className="s-tg-c1">Itaque cum consilio venimus</h4>
            <p>
              Consilii ergo ascendis: Pretiosa officia emendo ornamenta facies, et pactum signabis
              cum imperio quod bona miscet et difficile est explicare. Fortasse etiam religioni
              oniunges quae dicit dissolutionem puniri in vita post mortem.
            </p>
          </div>
        </div>
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
        <Section className={classNames(styles.sectionWidth80)}>
          <h2>Let&apos;s get seriously nested</h2>
          <Section className={
            classNames(styles.sectionWidth80, styles.sectionDepthHalf, styles.sectionZPlusHalfAndRotate)
            }
          >
            <h2>Let&apos;s get out in front</h2>
            <Section className={
              classNames(styles.sectionWidth80, styles.sectionDepthHalf, styles.sectionZPlusHalfAndRotate)
              }
            >
              <h2>Let&apos;s get closer</h2>
            </Section>
          </Section>
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
    </div>
  );
}

export default ScrollBasedEffectsContent;
