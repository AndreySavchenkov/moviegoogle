import classNames from 'classnames/bind';

import classes from './page.module.scss';

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn('page');
  const cnHeader = cn('page__header');
  const cnFilms = cn('page__films');

  return {
    cnRoot,
    cnHeader,
    cnFilms,
  };
};