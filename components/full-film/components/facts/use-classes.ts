import classNames from 'classnames/bind';

import classes from './facts.module.scss';

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn('facts');
  const cnContainer = cn('facts__container');
  const cnCount = cn('facts__container__count');
  const cnFact = cn('facts__container__fact');

  return {
    cnRoot,
    cnContainer,
    cnCount,
    cnFact,
  };
};
