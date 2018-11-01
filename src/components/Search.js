import React from 'react';

const options = ['people', 'vehicles', 'starships', 'films', 'species', 'planets'];

function Search({ searchInput, searchCategory, handleChange, handleSubmit, setSearchCategory }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchInput}
        onChange={(event) => handleChange(event.target.value)}
      />
      <select
        value={searchCategory}
        onChange={(event) => {
          setSearchCategory(event.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Search;
