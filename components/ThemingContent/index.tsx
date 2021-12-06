import React, { useCallback, useRef, useState } from 'react';
import styles from './ThemingContent.module.scss';
import themeableStyles from '../../traits/Themeable/Themeable.module.scss';
import Grid from '../Grid';
import Cell from '../Cell';
import RichText from '../RichText';
import ButtonsContainer from '../ButtonsContainer';

const ThemingContent = function () {
  const darkMode = useRef(false);

  const handleCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    darkMode.current = e.target.checked;
    document.documentElement.classList.toggle(themeableStyles.darkMode, darkMode.current);
  }, []);

  return (
    <>
      <h1 className={styles.title}>Theming</h1>

      <label>
        <input type="checkbox" onChange={handleCheckboxChange} />
        Dark mode
      </label>

      <Grid cols={2} gap="small">
        <Cell>
          <RichText>
            <h3>No theme class</h3>
            <p className="th-shaded">Shaded</p>
            <ButtonsContainer>
              <button type="button" className="btn btn--primary">Primary</button>
              <button type="button" className="btn btn--secondary">Secondary</button>
            </ButtonsContainer>
          </RichText>
        </Cell>
        <Cell theme="blackOnWhite">
          <RichText>
            <h3>blackOnWhite</h3>
            <p className="th-shaded">Shaded</p>
            <ButtonsContainer>
              <button type="button" className="btn btn--primary">Primary</button>
              <button type="button" className="btn btn--secondary">Secondary</button>
            </ButtonsContainer>
          </RichText>
        </Cell>
        <Cell theme="whiteOnBlack">
          <RichText>
            <h3>whiteOnBlack</h3>
            <p className="th-shaded">Shaded</p>
            <ButtonsContainer>
              <button type="button" className="btn btn--primary">Primary</button>
              <button type="button" className="btn btn--secondary">Secondary</button>
            </ButtonsContainer>
          </RichText>
        </Cell>
        <Cell theme="whiteOnBrandPrimary">
          <RichText>
            <h3>whiteOnBrandPrimary</h3>
            <p className="th-shaded">Shaded</p>
            <ButtonsContainer>
              <button type="button" className="btn btn--primary">Primary</button>
              <button type="button" className="btn btn--secondary">Secondary</button>
            </ButtonsContainer>
          </RichText>
        </Cell>
        <Cell theme="electricOnWhite">
          <RichText>
            <h3>electricOnWhite</h3>
            <p className="th-shaded">Shaded</p>
            <ButtonsContainer>
              <button type="button" className="btn btn--primary">Primary</button>
              <button type="button" className="btn btn--secondary">Secondary</button>
            </ButtonsContainer>
          </RichText>
        </Cell>
      </Grid>
    </>
  );
};

export default ThemingContent;
