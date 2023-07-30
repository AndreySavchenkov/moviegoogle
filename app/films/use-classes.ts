import classNames from 'classnames/bind';

import classes from './page.module.scss';

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn('page');
  const cnHeader = cn('page__header');
  const cnFilms = cn('page__films');
  const cnPagination = cn('page__pagination');
  const cnNotFound = cn('page__not-found');

  return {
    cnRoot,
    cnHeader,
    cnFilms,
    cnPagination,
    cnNotFound,
  };
};
