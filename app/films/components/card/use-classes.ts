import classNames from 'classnames/bind';

import classes from './card.module.scss';

const cn = classNames.bind(classes);

export const useClasses = () => {
  const cnRoot = cn('card');
  const cnImage = cn('card__image');
  const cnNoImage = cn('card__no-image');
  const cnContent = cn('card__content');
  const cnContentInner = cn('card__content-inner');
  const cnContentTitle = cn('card__content-title');
  const cnInfo = cn('card__content-info');
  const cnInfoTitle = cn('card__content-info-title');
  const cnInfoValue = cn('card__content-info-value');
  const cnContentDescription = cn('card__content-description');
  const cnContentDescriptionText = cn('card__content-description-text');

  return {
    cnRoot,
    cnImage,
    cnContent,
    cnContentInner,
    cnContentTitle,
    cnInfo,
    cnInfoTitle,
    cnInfoValue,
    cnContentDescription,
    cnContentDescriptionText,
    cnNoImage,
  };
};
