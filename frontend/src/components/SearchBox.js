import React, { useState } from 'react';

export default function SearchBox(props) {
  const [keyword, setKeyword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/search/${keyword}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search"
        />
        <button className="primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
