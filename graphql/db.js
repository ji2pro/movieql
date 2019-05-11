let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 75
  },
  {
    id: 1,
    name: "Avengers - End Game",
    score: 99
  },
  {
    id: 2,
    name: "Logan",
    score: 80
  },
  {
    id: 3,
    name: "The Godfather",
    score: 87
  },
  {
    id: 4,
    name: "Mario",
    score: 55
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
