import React, { useState, useCallback } from 'react';
import NewsList from './news-components/NewsList';
import Categories from './news-components/Categories';

const App = () => {
  const [category, setCategory] = useState('');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
