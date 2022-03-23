import React from 'react';
import classNames from 'classnames';
import styles from './ResponsiveDesignTokensContent.module.scss';
import ButtonsContainer from '../../components/ButtonsContainer';

function ResponsiveDesignTokensContent() {
  return (
    <div className={styles.root}>
      <div className="s-typography">
        <h1>Heading 1 Consilia es non supponitur loqui</h1>
        <h2>Heading 2 Matrimonii institutio originem rationalistam habere potest</h2>
        <h3>Heading 3 Pellentesque habitant morbi tristique senectus et netus et malesuada</h3>
        <div className={classNames(styles.breakout, 'whiteOnBrandPrimary')}>
          <p>
            Amas. Reliqua duo vitae tuae communicare vis. Ita, cum boni ludi assertores, venereum
            cenam et consilium habeas, quomodo commodas tuas ad bene opportunas mores bene
            opportunas alignas. Proposita sunt tibi ipsi Ulysseo ut vel si momentaneum tentaris
            dissolvere non potes, et potentiam dissolvendi tractatum artis removere ut utrumque in
            relatione perfecte investis.
          </p>
        </div>
        <h4 className="s-tg-c1">Itaque cum consilio venimus</h4>
        <p>
          Consilii ergo ascendis: Pretiosa officia emendo ornamenta facies, et pactum signabis cum
          imperio quod bona miscet et difficile est explicare. Fortasse etiam religioni coniunges
          quae dicit dissolutionem puniri in vita post mortem.
        </p>
        <ButtonsContainer>
          <button type="button" className="btn btn--primary">Assentior</button>
          <button type="button" className="btn btn--secondary">Nuces sunt tibi</button>
        </ButtonsContainer>
        <p>
          Utile est, sed tu longius. Ingentem partem pretiosam mittere volueris, ubi omnes ambo
          invitas nosti ac magna inter se vota publica faciunt. Putasne omnes narrantes “OK, hic
          quaedam promissiones destinavimus augere quam incommodi nobis esset dissolvere”, sed
          melius est decernere id non explicari. Ornamenta geris omni tempore ad indicandum quod
          captus es, et omnes acquiris ut reverentiam amitteres tui, si simul non manseris.
          Critice, omnibus adquiescas consentire te praebere causas agendi haec omnia.
        </p>
        <div className={styles.search}>
          <input type="search" className={styles.searchInput} placeholder="Quaero..." />
          <button type="button" className="btn btn--primary">Quaerere</button>
        </div>
        <p>
          Laborat. Duo ex vobis tam fabulose felices sunt ut omnes artes tuas imitarentur.
          Generationes postea, quisque adhuc hoc facit sine cogitatione, quae melius facit operari.
        </p>
        <h2>Heading 2 Quomodo mundum salvare non obstante nisus contrariis</h2>
        <p>
          Sollicitus es quod dioxide carbonis Terram destruet. Vides duas optiones: omnes potes
          mittere dioxidum minus carbonum, vel geoengineering facere ut Terra ab interitu dioxide
          salvatur. Tu singula inspicias. Efficax certe esset ut dioxide minus emitteret, sed est
          carus et valde laboriosus.
        </p>
        <p>
          Vel, acidum sulphuricum imbre in atmosphaeram ut plus solis in spatium reflectat. Tantum
          parva quantitas acidi sulphurici mutare potest albedinem planetae satis ad calefactionem
          dioxidis ton ex carbone pugnare.
        </p>
      </div>
    </div>
  );
}

export default ResponsiveDesignTokensContent;
