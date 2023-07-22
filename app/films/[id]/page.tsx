import {MovieT} from "@shared/types";
import FullFilm from "@components/full-film/full-film";

const getFilmById = async (id: string) => {
  const res = await fetch(`${process.env.BASE_API_URL}v1.3/movie/${id}`, {
    headers: process.env.API_KEY ? {'X-API-KEY': process.env.API_KEY} : {},
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