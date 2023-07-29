import React, {FC} from 'react';
import Image from "next/image";
import Actors from "@components/full-film/components/actors/actors";
import {useClasses} from "./use-classes";
import {MovieT} from "@shared/types";
import {blurData} from "@shared/constants";
import Facts from "@components/full-film/components/facts/facts";

type FullFilmProps = {
  film: MovieT;
}

const FullFilm: FC<FullFilmProps> = ({film}) => {
  const {
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
  } = useClasses();

  const infoRows = [
    {title: 'Рейтинг IMDB', value: film.rating.imdb},
    {title: 'Голоса', value: film.votes.imdb},
    {title: 'Год', value: film.year},
    {title: 'Длительность', value: film.movieLength},
  ];

  console.log('film ->', film)

  return (
    <section className={cnRoot}>
      <h1 className={cnTitle}>
        {film.name} {film.alternativeName && <span className={cnSecondaryTitle}>({film.alternativeName})</span>}
      </h1>
      <section className={cnTopContainer}>
        <div>
          <Image src={film.poster.url} alt="film logo" width={300} height={400} placeholder='blur' blurDataURL={blurData} />
        </div>
        <div className={cnTopContainerInfo}>
          {infoRows.map((row, index) => {
            if (row.value) {
              return (
                <div key={index} className={cnRow}>
                  <span className={cnTopContainerInfoTitle}>{row.title}:</span>
                  <span className={cnTopContainerInfoValue}>{row.value}</span>
                </div>
              )
            } else {
              return false;
            }
          })}

          <div className={cnRow}>
            <span className={cnTopContainerInfoTitle}>Страны:</span>
            <div className={cnRow}>
              {film.countries.map((country, index) => (
                <span key={index} className={cnTopContainerInfoValue}>{country.name}</span>
              ))}
            </div>
          </div>

          <div className={cnRow}>
            <span className={cnTopContainerInfoTitle}>Жанры:</span>
            <div className={cnRow}>
              {film.genres.map((genre, index) => (
                <span key={index} className={cnTopContainerInfoValue}>{genre.name}</span>
              ))}
            </div>
            <p className={cnDescription}>{film.description}</p>

            <div className={cnBackdrop}>
              <Image src={film.backdrop.url} alt="backdrop" fill placeholder='blur' blurDataURL={blurData}/>
            </div>
          </div>

          <Actors actors={film.persons}/>
          <Facts facts={film?.facts}/>
        </div>

      </section>

    </section>
  );
};

export default FullFilm;