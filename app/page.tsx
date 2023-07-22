import {MovieT} from "@shared/types";
import FullFilm from "@components/full-film/full-film";

const getRandomFilm = async () => {
  const res = await fetch(`https://api.kinopoisk.dev/v1.3/movie/random`, {
    headers: {'X-API-KEY': 'JTXBSKR-C3JME8X-Q0X18JC-VPDQN9T'},
  });
  return res.json();
};

export default async function RandomFilm() {
  const film: MovieT = await getRandomFilm();

  return (
    <main>
      <FullFilm film={film} />
    </main>
  );
}
