import React from 'react';
import Icon from '@components/Iconfont';
import STYLES from './index.module.scss';
export default () => {
  return (
    <div className={STYLES.wrap}>
      This Is Index
      <Icon type="nav-base" size={20}></Icon>
    </div>
  );
};
