import React, { useCallback, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from '../context';
import { setSearch } from '../actions';

import '../assets/styles/components/Search.scss';

const Search = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const searchInput = useRef(null);

  const handleSearch = useCallback(() => {
    dispatch(setSearch(searchInput.current.value));
  }, []);

  return (
    <div className='Search'>
      <input
        type='text'
        placeholder='Type the character name...'
        value={state.search}
        ref={searchInput}
        onChange={handleSearch}
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default Search;
