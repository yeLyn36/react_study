import React from 'react';
import Categories from '../news-components/Categories';
import NewsList from '../news-components/NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
