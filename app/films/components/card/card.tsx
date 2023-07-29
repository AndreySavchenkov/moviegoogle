'use client'

import React, {FC} from 'react';
import Image from "next/image";
import {useClasses} from './use-classes';
import {useRouter} from "next/navigation";
import {blurData} from "@shared/constants";
import {Card} from "@nextui-org/react";

type CardProps = {
  id: number;
  name?: string;
  image: string;
  rating?: number;
  year?: number;
  votes?: number;
  description?: string;
}

const CustomCard: FC<CardProps> = ({id, name, image, rating, votes, description, year}) => {
  const {
    cnRoot, cnImage, cnContent, cnContentTitle, cnInfo,
    cnInfoTitle,
    cnInfoValue,
    cnContentInner,
    cnContentDescription,
    cnContentDescriptionText,
  } = useClasses();

  const router = useRouter();

  const infoRows = [
    {title: 'Год', value: year},
    {title: 'Рейтинг IMDB', value: rating},
    {title: 'Голоса', value: votes},
  ]

  const routeToFilmPage = () => {
    router.push(`/films/${id}`)
  }

  return (
    <Card
      isPressable
      isHoverable
      css={{borderRadius: '28px'}}
    >
      <div className={cnRoot} onClick={routeToFilmPage}>
        <div className={cnImage}>
          <Image src={image} fill alt='film image' placeholder='blur' blurDataURL={blurData}/>
        </div>
        <div className={cnContent}>
          <span className={cnContentTitle}>{name}</span>

          <div className={cnContentInner}>
            {infoRows.map((row, index) => (
              <div key={index} className={cnInfo}>
                <span className={cnInfoTitle}>{row.title}:</span>
                <span className={cnInfoValue}>{row.value}</span>
              </div>
            ))}
          </div>

          {description && (
            <div className={cnContentDescription}>
              <p className={cnContentDescriptionText}>{description}</p>
            </div>
          )}

        </div>
      </div>
    </Card>
  );
};

export default CustomCard;