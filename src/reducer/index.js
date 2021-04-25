import types from '../actions/types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_THEME:
      return {
        ...state,
        darkmode: action.payload,
      };

    case types.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    case types.SET_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case types.REMOVE_FAVORITE:
      const favoriteIndex = state.favorites.findIndex(
        (favorite) => favorite.id === action.payload.id
      );
      const newFavorites = [...state.favorites];
      newFavorites.splice(favoriteIndex, 1);
      return {
        ...state,
        favorites: newFavorites,
      };

    case types.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
