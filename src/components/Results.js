import React from 'react';

function Results({ results }) {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.name}>{result.name}</li>
      ))}
    </ul>
  );
}

export default Results;
