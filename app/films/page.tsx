'use client'

import {useClasses} from './use-classes';
import BaseInput from "@shared/ui/inputs/base-input/base-input";
import CustomButton from "@shared/ui/button/button";
import {Controller, useForm} from "react-hook-form";
import {useState} from "react";
import {MoviesT, MovieT} from "@shared/types";
import Card from "@app/films/components/card/card";

type FormType = {
  name: string;
}

export default function Films() {
  const [films, setFilms] = useState<MovieT[]>();
  console.log('films->', films)
  const {
    cnRoot,
    cnHeader,
    cnFilms,
  } = useClasses();

  const {control, handleSubmit} = useForm({defaultValues: {name: ''}});

  const onSubmit = async (data: FormType) => {
    if (data.name) {
      const res = await fetch(`${process.env.BASE_API_URL}v1.3/movie?name=${data.name}`, {
        headers: process.env.API_KEY ? {'X-API-KEY': process.env.API_KEY} : {},
      });
      const moviesResponse: MoviesT = await res.json();
      const movies: MovieT [] = moviesResponse.docs;
      setFilms(movies);
    }
  }

  return (
    <main className={cnRoot}>
      <form className={cnHeader} onSubmit={handleSubmit(onSubmit)}>
        <Controller name='name' control={control} render={({field}) => (
          <BaseInput placeholder='Film title' {...field} />
        )}/>
        <CustomButton type='submit'>Search</CustomButton>
      </form>

      <div className={cnFilms}>
        {films && films.map((film) => (
          <Card
            key={film.id}
            id={film.id}
            name={film.name}
            year={film.year}
            image={film.poster.url}
            rating={film.rating.imdb}
            votes={film.votes.imdb}
            description={film.shortDescription}
          />
        ))}
      </div>
    </main>
  );
}
