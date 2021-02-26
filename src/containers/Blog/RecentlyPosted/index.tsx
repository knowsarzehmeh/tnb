import React, {FC} from 'react';
import Article from './Article';

import './RecentlyPosted.scss';

interface ArticlesProps {
  articles: any[];
}

const RecentlyPosted: FC<ArticlesProps> = ({articles}) => {
  return (
    <div className="RecentlyPosted">
      <div className="RecentlyPosted__content-container">
        <h3 className="RecentlyPosted__header">Recently Posted</h3>
        <div className="RecentlyPosted__article">
          {articles.map((article) => (
            <Article key={article} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyPosted;
