import classNames from 'classnames/bind';

import classes from './page.module.scss';

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn('film');
  const cnTitle = cn('film__title');
  const cnSecondaryTitle = cn('film__title--secondary');
  const cnTopContainer = cn('film__top-container');
  const cnTopContainerInfo = cn('film__top-container-info');
  const cnTopContainerInfoTitle = cn('film__top-container-info-title');
  const cnTopContainerInfoValue = cn('film__top-container-info-value');
  const cnRow = cn('row');
  const cnDescription = cn('film__description');
  const cnBackdrop = cn('film__backdrop')

  return {
    cnRoot,
    cnTitle,
    cnSecondaryTitle,
    cnTopContainer,
    cnRow,
    cnTopContainerInfo,
    cnTopContainerInfoTitle,
    cnTopContainerInfoValue,
    cnDescription,
    cnBackdrop,
  };
};
