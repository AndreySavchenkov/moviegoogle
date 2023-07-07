import classNames from 'classnames/bind';

import classes from './navigation.module.scss';

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn('navigation');
  const cnLink = (isActive: boolean) => {
    return cn('navigation__link', isActive && 'navigation__link--active')
  }

  return {
    cnRoot,
    cnLink
  };
};
