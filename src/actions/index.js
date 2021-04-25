import types from '../actions/types';

const setTheme = (payload) => ({
  type: types.SET_THEME,
  payload,
});

const setCharacters = (payload) => ({
  type: types.SET_CHARACTERS,
  payload,
});

const setFavorite = (payload) => ({
  type: types.SET_FAVORITE,
  payload,
});

const removeFavorite = (payload) => ({
  type: types.REMOVE_FAVORITE,
  payload,
});

const setSearch = (payload) => ({
  type: types.SET_SEARCH,
  payload,
});

export { setTheme, setCharacters, setFavorite, removeFavorite, setSearch };
