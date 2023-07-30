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
  rating?: string;
}

export default function Films() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [rating, setRating] = useState<number | undefined>();
  const [total, setTotal] = useState(0);
  const [films, setFilms] = useState<MovieT[]>();

  const {
    cnRoot,
    cnHeader,
    cnFilms,
    cnPagination,
    cnNotFound,
  } = useClasses();

  const {control, handleSubmit} = useForm<FormType>({defaultValues: {name: '', rating: undefined}});

  const onSubmit = async (data: FormType) => {
    setName(data.name);

    if (data.rating) {
      setRating(Number(data.rating));
    }
  }

  const getFilmsByName = async () => {
    const res = await fetch(rating ?
        `${process.env.BASE_API_URL}v1.3/movie?name=${name}&page=${page}&rating.imdb=${rating}`
        : `${process.env.BASE_API_URL}v1.3/movie?name=${name}&page=${page}`,
      {
        headers: process.env.API_KEY ? {'X-API-KEY': process.env.API_KEY} : {},
      });
    const moviesResponse: MoviesT = await res.json();
    const total = moviesResponse.pages;
    const movies: MovieT [] = moviesResponse.docs;
    setTotal(total);
    setFilms(movies);
  }

  const canShowPagination = total > 1;

  useEffect(() => {
    getFilmsByName();
  }, [page, name, rating]);

  useEffect(() => {
    setPage(1);
  }, [name]);

  return (
    <main className={cnRoot}>
      <form className={cnHeader} onSubmit={handleSubmit(onSubmit)}>
        <Controller name='name' control={control} render={({field}) => (
          <BaseInput placeholder='Название фильма' {...field} />
        )}/>

        <Controller name='rating' control={control} render={({field}) => (
          <BaseInput placeholder='Рейтинг IMDB (например 6.2)' type='number' min={0} max={10} step={0.1} {...field} />
        )}/>

        <CustomButton type='submit'>Искать</CustomButton>
      </form>

      <div className={cnFilms}>
        {films?.length !== 0 ? (
            films && films.map((film) => (
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
            )))
          : (
            <div className={cnNotFound}>
              <span>
                 По вашему запросу фильмов нe найдено. Попробуйте изменить критерии поиска :(
              </span>
            </div>
          )
        }
      </div>

      {canShowPagination && (
        <div className={cnPagination}>
          <Pagination total={total} initialPage={1} page={page} onChange={setPage}/>
        </div>
      )}
    </main>
  );
}
