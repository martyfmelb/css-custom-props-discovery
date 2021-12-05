import React from 'react';
import classNames from 'classnames';
import {
  getThemeClass, MaybeThemeable, THEME_DEFAULT, ThemeSupportAll,
} from '../../traits/Themeable/types';
import styles from '../Grid/Grid.module.scss';

type CellProps = MaybeThemeable<{}, ThemeSupportAll>;

const Cell: React.FC<CellProps> = function Cell({ theme, children }) {
  return (
    <div className={classNames(styles.cell, getThemeClass(theme))}>
      { children }
    </div>
  );
};

export default Cell;
