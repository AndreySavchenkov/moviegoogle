import {MovieT} from "@shared/types";
import FullFilm from "@components/full-film/full-film";

const getFilmById = async (id: string) => {
  const res = await fetch(`https://api.kinopoisk.dev/v1.3/movie/${id}`, {
    headers: {'X-API-KEY': 'JTXBSKR-C3JME8X-Q0X18JC-VPDQN9T'},
  });
  return res.json();
};

export default async function Film({params}: { params: { id: string } }) {
  const film: MovieT = await getFilmById(params.id);

  return (
    <main>
      <FullFilm film={film}/>
    </main>
  )
}