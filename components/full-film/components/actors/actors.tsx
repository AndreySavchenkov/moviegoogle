'use client';

import React, {FC, useState} from 'react';
import CustomButton from "@shared/ui/button/button";
import CustomUser from "@shared/ui/user/user";
import { useClasses } from './use-classes';

type ActorsProps = {
  actors: any[];
}

const Actors: FC<ActorsProps> = ({actors}) => {
  const [isShowActors, setIsShowActors] = useState(false);

  const { cnRoot, cnItems, cnItemsActor } = useClasses();

  if (!isShowActors) {
    return (
      <section className={cnRoot}>
        <CustomButton onClick={() => setIsShowActors(prevActors => !prevActors)}>Посмотреть актеров</CustomButton>
      </section>
    )
  }

  return (
    <section className={cnRoot}>
      <CustomButton onClick={() => setIsShowActors(prevActors => !prevActors)}>Скрыть актеров</CustomButton>

      <div className={cnItems}>
        {actors.map((person, index) => (
          <div key={index} className={cnItemsActor}>
            <CustomUser name={person.name} src={person.photo} description={person.profession}/>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Actors;