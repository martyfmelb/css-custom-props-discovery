import React, {useCallback, useRef, useState} from 'react';
import styles from './ThemingContent.module.scss';
import themeableStyles from '../../traits/Themeable/Themeable.module.scss';
import Grid from '../Grid';
import Cell from '../Cell';

const ThemingContent = function () {
  const darkMode = useRef(false);

  const handleCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    darkMode.current = e.target.checked;
    document.documentElement.classList.toggle(themeableStyles.darkMode, darkMode.current);
  }, []);

  return (
    <>
      <h1 className={styles.title}>Theming</h1>

      <label><input type="checkbox" onChange={handleCheckboxChange} />Dark mode</label>

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
        <Cell theme="whiteOnBrandPrimary">
          <p>whiteOnBrandPrimary</p>
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
