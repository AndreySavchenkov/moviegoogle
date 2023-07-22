import classNames from 'classnames/bind';

import classes from './actors.module.scss';

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn('actors');
  const cnItems = cn('actors__items');
  const cnItemsActor = cn('actors__items-actor');

  return {
    cnRoot,
    cnItems,
    cnItemsActor,
  };
};
