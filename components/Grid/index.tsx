import React from 'react';
import classNames from 'classnames';
import styles from './Grid.module.scss';

type GridProps = {
  cols?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'none',
};

const Grid: React.FC<GridProps> = function Grid({
  gap, cols, children,
}) {
  return (
    <div
      className={
            classNames(styles.grid, {
              [styles.cols2]: cols === 2,
              [styles.cols3]: cols === 3,
              [styles.cols4]: cols === 4,
              [styles.gapSmall]: gap === 'small',
            })
          }
    >
      { children }
    </div>
  );
};

Grid.defaultProps = {
  cols: 1,
  gap: 'none',
};

export default Grid;
