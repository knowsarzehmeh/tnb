import React, {FC} from 'react';

import Article from './Article';
import './PopularArticles.scss';

interface ArticlesProps {
  articles: any[];
}

const PopularArticles: FC<ArticlesProps> = ({articles}) => {
  return (
    <div className="PopularArticles">
      <h3 className="PopularArticles__header">Popular Articles</h3>
      {articles.map((article) => (
        <Article key={article} article={article} />
      ))}
    </div>
  );
};

export default PopularArticles;
