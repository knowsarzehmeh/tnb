import React, {FC} from 'react';
import ActiveArticle from './ActiveArticle';
import PopularArticles from './PopularArticles';

import './BlogHero.scss';

const BlogHero: FC = () => {
  return (
    <div className="BlogHero">
      <div className="BlogHero__content-container">
        <div className="BlogHero__article-container">
          <ActiveArticle />
          <PopularArticles articles={[1, 2, 3, 4]} />
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
