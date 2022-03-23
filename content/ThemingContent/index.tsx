import React, { useCallback, useContext } from 'react';
import styles from './ThemingContent.module.scss';
import Grid from '../../components/Grid';
import Cell from '../../components/Cell';
import RichText from '../../components/RichText';
import ButtonsContainer from '../../components/ButtonsContainer';
import { DarkModeContext, MouseCssCustomPropsContext } from '../../pages/_app';

function ThemingContent() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [mouseCssCustomProps, setMouseCssCustomProps] = useContext(MouseCssCustomPropsContext);

  const handleDarkModeCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDarkMode(e.target.checked);
    },
    [setDarkMode],
  );

  const handleMouseCssCustomPropsCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMouseCssCustomProps(e.target.checked);
    },
    [setMouseCssCustomProps],
  );

  return (
    <>
      <div className="s-typography -keep-margin-bottom">
        <h1 className={styles.title}>Theming</h1>
        <p>
          <label htmlFor="darkModeCheckbox">
            <input
              id="darkModeCheckbox"
              type="checkbox"
              onChange={handleDarkModeCheckboxChange}
              defaultChecked={darkMode}
            />
            Dark mode
          </label>
          <br />
          <label htmlFor="mouseCssCustomPropsCheckbox">
            <input
              id="mouseCssCustomPropsCheckbox"
              type="checkbox"
              onChange={handleMouseCssCustomPropsCheckboxChange}
              defaultChecked={mouseCssCustomProps}
            />
            Link mouse position to CSS custom props
          </label>
        </p>
      </div>
      <Grid cols={2} gap="small" noColsMaxMq="xs">
        <Cell>
          <RichText>
            <h3>No theme class</h3>
            <p className="th-shaded">Shaded</p>
            <ButtonsContainer>
              <button type="button" className="btn btn--primary">
                Primary
              </button>
              <button type="button" className="btn btn--secondary">
                Secondary
              </button>
            </ButtonsContainer>
          </RichText>
        </Cell>
        <Cell theme="blackOnWhite">
          <RichText>
            <h3>blackOnWhite</h3>
            <p className="th-shaded">Shaded</p>
            <ButtonsContainer>
              <button type="button" className="btn btn--primary">
                Primary
              </button>
              <button type="button" className="btn btn--secondary">
                Secondary
              </button>
            </ButtonsContainer>
          </RichText>
        </Cell>
        <Cell theme="whiteOnBlack">
          <RichText>
            <h3>whiteOnBlack</h3>
            <p className="th-shaded">Shaded</p>
            <ButtonsContainer>
              <button type="button" className="btn btn--primary">
                Primary
              </button>
              <button type="button" className="btn btn--secondary">
                Secondary
              </button>
            </ButtonsContainer>
          </RichText>
        </Cell>
        <Cell theme="whiteOnBrandPrimary">
          <RichText>
            <h3>whiteOnBrandPrimary</h3>
            <p className="th-shaded">Shaded</p>
            <ButtonsContainer>
              <button type="button" className="btn btn--primary">
                Primary
              </button>
              <button type="button" className="btn btn--secondary">
                Secondary
              </button>
            </ButtonsContainer>
          </RichText>
        </Cell>
        <Cell theme="electricOnWhite">
          <RichText>
            <h3>electricOnWhite</h3>
            <p className="th-shaded">Shaded</p>
            <ButtonsContainer>
              <button type="button" className="btn btn--primary">
                Primary
              </button>
              <button type="button" className="btn btn--secondary">
                Secondary
              </button>
            </ButtonsContainer>
          </RichText>
        </Cell>
      </Grid>
    </>
  );
}

export default ThemingContent;
