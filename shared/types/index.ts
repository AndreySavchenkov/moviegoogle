export type MoviesT = {
docs: MovieT[];
total: number;
limit: number;
  page: number;
  pages: number;
}

export type MovieT = {
  id: number;
  name?: string;
  alternativeName?: string;
  shortDescription?: string;
  type: 'movie' | 'tv-series' | 'cartoon' | 'anime' | 'animated-series' | 'tv-show';
  year: number;
  description: string;
  rating: {
    imdb: number;
  };
  votes: {
    imdb: number;
  }
  movieLength: number;
  poster: {
    url: string;
    previewUrl: string;
  }
  backdrop: {
    url: string;
    previewUrl: string;
  }
  genres: { name: string }[];
  countries: { name: string }[];
  persons: {
    id: number;
    photo: string;
    name: string;
    profession: string;
  }[];
  facts?: {value: string, spoiler: boolean, type: string}[];
}