const generateImageUri = (path) => {
  return { uri: 'https://image.tmdb.org/t/p/w500/' + path };
};

export const ImageService = {
  generateImageUri,
};
