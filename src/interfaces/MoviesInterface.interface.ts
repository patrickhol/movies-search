export default interface MoviesInterface {
  _id: string;
  title: string;
  year: number;
  rated: string;
  runtime: number;
  countries: string[];
  genres: string[];
  director: string;
  writers: string[];
  actors: string[];
  plot: string;
  poster: string;
  imdb: {
    id: string;
    rating: number;
    votes: number;
  };
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  type: string;
}
