import React, { useContext, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import useCharacters from '../hooks/useCharacters';
import { ThemeContext } from '../context';
import { setCharacters, setFavorite, removeFavorite } from '../actions';
import Search from './Search';

import '../assets/styles/components/Characters.scss';

const API_URL = 'https://rickandmortyapi.com/api/character';

const Characters = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const characters = useCharacters(API_URL);

  useEffect(() => {
    dispatch(setCharacters(characters));
  }, [characters]);

  const handleFavorite = (character) => {
    const findFavorite = state.favorites.filter(
      (favorite) => favorite.id === character.id
    );

    if (!findFavorite.length) {
      dispatch(setFavorite(character));
    } else {
      dispatch(removeFavorite(character));
    }
  };

  // useMemo se aplica por términos demostrativos ya que no es necesario porque el buscador (state.search) siempre ocacionará un nuevo cálculo.
  const filteredCharacters = useMemo(() => {
    return state.characters.filter((character) =>
      character.name.toLowerCase().includes(state.search.toLowerCase())
    );
  }, [state.characters, state.search]);

  return (
    <div className='Characters'>
      {state.favorites.length ? (
        <div className='Characters__container'>
          <h2>Favorite characters</h2>
          <div className='Characters__list Characters__list--favorites'>
            {state.favorites.map((favorite) => (
              <figure key={favorite.id}>
                <img
                  src={favorite.image}
                  alt={favorite.name}
                  title={favorite.name}
                />
              </figure>
            ))}
          </div>
        </div>
      ) : null}
      <div className='Characters__container'>
        <h2>Characters</h2>
        <Search />
        <div className='Characters__list'>
          {filteredCharacters.map((character) => (
            <div className='Character' key={character.id}>
              <h3>{character.name}</h3>
              <figure>
                <img src={character.image} alt={character.name} />
                <button
                  className='btn'
                  type='button'
                  onClick={() => handleFavorite(character)}
                >
                  <FontAwesomeIcon
                    className={`icon--favorite ${
                      state.favorites.filter(
                        (favorite) => favorite.id === character.id
                      ).length
                        ? 'favorite'
                        : ''
                    }`}
                    icon={faStar}
                  />
                </button>
              </figure>
              <div className='Character__info'>
                <span>{character.species}</span>
                <span>{character.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
