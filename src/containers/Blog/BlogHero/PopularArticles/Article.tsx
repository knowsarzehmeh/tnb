import React, {FC} from 'react';

import './PopularArticles.scss';

interface ComponentProps {
  article: {
    id: number;
    banner: string;
    user: string;
    datePosted: string;
    readTime: string;
  };
}
const Article: FC<ComponentProps> = ({article}) => {
  return (
    <div className="PopularArticles__article-wrapper">
      <div className="PopularArticles__article-banner" />
      <div className="PopularArticles__article-content">
        <h3 className="PopularArticles__article-title">Summary of the history and uses of cryptocurrency.</h3>
        <p className="PopularArticles__article-user">by John Doe</p>
        <p className="PopularArticles__article-date">
          Feb 17
          <span className="PopularArticles__article-time">6 min read</span>
        </p>
      </div>
    </div>
  );
};

export default Article;
