'use client';

import React, {FC, useState} from 'react';
import {useClasses} from './use-classes';
import CustomButton from "@shared/ui/button/button";

type FactsProps = {
  facts?: { value: string, type: string, spoiler: boolean }[]
}

const Facts: FC<FactsProps> = ({facts}) => {
  const [isShowFacts, setIsShowFacts] = useState(false);

  const {cnRoot, cnFact, cnContainer, cnCount} = useClasses();

  if(!facts?.length) {
    return false;
  }

  if (!isShowFacts) {
    return (
      <div className={cnRoot}>
        <CustomButton onClick={() => setIsShowFacts(prevFactsState => !prevFactsState)}>Посмотреть факты</CustomButton>
      </div>
    )
  }


  return (
    <div className={cnRoot}>
      <CustomButton onClick={() => setIsShowFacts(prevFactsState => !prevFactsState)}>Скрыть факты</CustomButton>


      {facts?.map((fact, index) => (
        <div className={cnContainer}>
          <span className={cnCount}>{index + 1}.</span>
          <div key={index} className={cnFact} dangerouslySetInnerHTML={{__html: fact.value}}/>
        </div>
      ))}
    </div>
  );
};

export default Facts;