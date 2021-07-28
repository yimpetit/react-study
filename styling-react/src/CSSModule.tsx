import React from 'react';
import styles from './styles/CSSModule.module.scss';
const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      hello <span className="something">world</span>
    </div>
  )
}

export default CSSModule;
