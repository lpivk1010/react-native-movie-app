import _ from 'lodash';

import { ImageService } from './ImageService';

const getCrew = (credits) => {
  const { cast = [], crew = [] } = credits;
  const actors = cast.slice(0, 3);
  const director = _.find(crew, function (person) {
    return person.job === 'Director';
  });
  const photography = _.find(crew, function (person) {
    return person.job === 'Director of Photography';
  });
  const producer = _.find(crew, function (person) {
    return person.job === 'Executive Producer';
  });

  return [...actors, director, photography, producer];
};

const getHeaderInfo = (details) => {
  const {
    id = 0,
    title = '',
    vote_average: userScore = 0,
    backdrop_path: backdropPath = '',
    genres = [],
    release_date: releaseDate = 0,
    runtime = 0,
  } = details;

  const backgroundUri = ImageService.generateImageUri(backdropPath);
  const genresString = genres.map((genre) => genre.name).join(', ');
  const date = releaseDate.split('-').join('/');
  const year = releaseDate.slice(0, 4);

  const titleYear = `${title} (${year})`;
  const genresRuntime = `${genresString}     ${runtime} min`;

  return {
    id,
    backgroundUri,
    userScore,
    titleYear,
    genresRuntime,
    date,
  };
};

const getSocialInfo = (latestReview) => {
  const author = latestReview ? latestReview.author : '';
  const avatarUrl = latestReview.author_details.avatar_path;
  const avatarPath = avatarUrl ? avatarUrl.slice(1) : '';
  const createdAt = latestReview
    ? latestReview.created_at.slice(0, 10).split('-').join('/')
    : '';
  const content = latestReview ? latestReview.content : '';

  return { author, avatarPath, createdAt, content };
};

export const MovieDetailsService = {
  getCrew,
  getHeaderInfo,
  getSocialInfo,
};
