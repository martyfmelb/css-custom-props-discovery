import React from 'react';
import styles from './ThemingContent.module.scss';
import Grid from '../Grid';
import Cell from '../Cell';

const ThemingContent = function () {
  return (
    <>
      <h1 className={styles.title}>Theming</h1>

      <Grid cols={2} gap="small">
        <Cell>
          <p>No theme class</p>
          <p className="th-shaded">Shaded</p>
          <button type="button" className="btn btn--primary">Primary</button>
          <button type="button" className="btn btn--secondary">Secondary</button>
        </Cell>
        <Cell theme="blackOnWhite">
          <p>blackOnWhite</p>
          <p className="th-shaded">Shaded</p>
          <button type="button" className="btn btn--primary">Primary</button>
          <button type="button" className="btn btn--secondary">Secondary</button>
        </Cell>
        <Cell theme="whiteOnBlack">
          <p>whiteOnBlack</p>
          <p className="th-shaded">Shaded</p>
          <button type="button" className="btn btn--primary">Primary</button>
          <button type="button" className="btn btn--secondary">Secondary</button>
        </Cell>
        <Cell theme="whiteOnRed">
          <p>whiteOnRed</p>
          <p className="th-shaded">Shaded</p>
          <button type="button" className="btn btn--primary">Primary</button>
          <button type="button" className="btn btn--secondary">Secondary</button>
        </Cell>
        <Cell theme="electricOnWhite">
          <p>electricOnWhite</p>
          <p className="th-shaded">Shaded</p>
          <button type="button" className="btn btn--primary">Primary</button>
          <button type="button" className="btn btn--secondary">Secondary</button>
        </Cell>
      </Grid>
    </>
  );
};

export default ThemingContent;
