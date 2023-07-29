'use client'

import {useClasses} from './use-classes';
import BaseInput from "@shared/ui/inputs/base-input/base-input";
import CustomButton from "@shared/ui/button/button";
import {Controller, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {MoviesT, MovieT} from "@shared/types";
import Card from "@app/films/components/card/card";
import Pagination from "@shared/ui/pagination/pagination";

type FormType = {
  name: string;
}

export default function Films() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [total, setTotal] = useState(0);
  const [films, setFilms] = useState<MovieT[]>();
  console.log('films->', films)
  const {
    cnRoot,
    cnHeader,
    cnFilms,
    cnPagination,
  } = useClasses();

  const {control, handleSubmit} = useForm({defaultValues: {name: ''}});

  const onSubmit = async (data: FormType) => {
    setName(data.name)
  }

  const getFilmsByName = async () => {
    if (name) {
      const res = await fetch(`${process.env.BASE_API_URL}v1.3/movie?name=${name}&page=${page}`, {
        headers: process.env.API_KEY ? {'X-API-KEY': process.env.API_KEY} : {},
      });
      const moviesResponse: MoviesT = await res.json();
      const total = moviesResponse.pages;
      const movies: MovieT [] = moviesResponse.docs;
      setTotal(total);
      setFilms(movies);
    }
  }

  const canShowPagination = total > 1;

  useEffect(() => {
    getFilmsByName();
  }, [page, name]);

  useEffect(() => {
    setPage(1);
  }, [name]);

  return (
    <main className={cnRoot}>
      <form className={cnHeader} onSubmit={handleSubmit(onSubmit)}>
        <Controller name='name' control={control} render={({field}) => (
          <BaseInput placeholder='Название фильма' {...field} />
        )}/>
        <CustomButton type='submit'>Искать</CustomButton>
      </form>

      <div className={cnFilms}>
        {films && films.map((film) => (
          <Card
            key={film.id}
            id={film.id}
            name={film.name}
            year={film.year}
            image={film.poster?.url}
            rating={film.rating.imdb}
            votes={film.votes.imdb}
            description={film.shortDescription}
          />
        ))}
      </div>
      {canShowPagination && (
        <div className={cnPagination}>
          <Pagination total={total} initialPage={1} page={page} onChange={setPage}/>
        </div>
      )}
    </main>
  );
}
