import React from 'react';
import { ILoading } from './loading.types';
import { IStyleProps } from '../../types/app/common';
import styles from './loading.module.scss';
import cn from 'classnames';

export const Loading = ({ absolute, style, className, classNameIndicator, spinner }: ILoading & IStyleProps) => {
  if (spinner) {
    return (
      <div className={cn(styles['spinner'], classNameIndicator)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div
      className={cn(styles.container, className, {
        [styles.containerAbsolute]: absolute,
      })}
      style={style}
    >
      <div
        className={cn(styles.indicator, classNameIndicator, {
          [styles.indicatorAbsolute]: absolute,
        })}
      >
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
