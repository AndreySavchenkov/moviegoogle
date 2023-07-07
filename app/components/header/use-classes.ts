import classNames from 'classnames/bind';

import classes from './header.module.scss';

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn('header');
  const cnContainer = cn('header__container');

  return {
    cnRoot,
    cnContainer,
  };
};
