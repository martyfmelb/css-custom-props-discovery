import React from 'react';
import styles from './ButtonsContainer.module.scss';

type ButtonsContainerProps = {
}

const ButtonsContainer: React.FC<ButtonsContainerProps> = function ({ children }) {
  return <div className={styles.root}>{ children }</div>;
};

export default ButtonsContainer;
