import Image from 'next/image';
import {useClasses} from '@app/use-classes';
import Actors from "@app/components/actors/actors";

const getFilm = async () => {
  const res = await fetch(`https://api.kinopoisk.dev/v1.3/movie/random`, {
    headers: {'X-API-KEY': 'JTXBSKR-C3JME8X-Q0X18JC-VPDQN9T'},
  });
  return res.json();
};

export default async function Home() {
  const film = await getFilm();

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
  ]

  console.log('film->', film);

  return (
    <main className={cnRoot}>
      <h1 className={cnTitle}>
        {film.name} {film.alternativeName && <span className={cnSecondaryTitle}>({film.alternativeName})</span>}
      </h1>
      <section className={cnTopContainer}>
        <div>
          <Image src={film.poster.url} alt="film logo" width={300} height={400}/>
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
          </div>


        </div>
      </section>

      <p className={cnDescription}>{film.description}</p>

      <div className={cnBackdrop}>
        <Image src={film.backdrop.url} alt="backdrop" fill/>
      </div>


      <Actors actors={film.persons} />

      {/*<span>Facts:</span>*/}
      {/*{film.facts.map((fact, index) => (*/}
      {/*  <span key={index}>{fact.value}</span>*/}
      {/*))}*/}
    </main>
  );
}
