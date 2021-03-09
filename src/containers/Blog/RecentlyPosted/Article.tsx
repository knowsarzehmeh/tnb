import React, {FC} from 'react';

import './RecentlyPosted.scss';

interface ArticleProps {
  article: {
    id?: number;
    title: string;
    banner: string;
    author: {
      name: string;
      avatar: string;
    };
    datePosted: string;
    readTime: string;
  };
}
const Article: FC<ArticleProps> = ({article}) => {
  return (
    <div className="RecentlyPosted__article-wrapper">
      <div className="RecentlyPosted__article-banner" />
      <div className="RecentlyPosted__article-content">
        <h3 className="RecentlyPosted__article-title">Summary of the history and uses of cryptocurrency.</h3>
        <p className="RecentlyPosted__article-user">by John Doe</p>
        <p className="RecentlyPosted__article-date">
          Feb 17
          <span className="RecentlyPosted__article-time">6 min read</span>
        </p>
      </div>
    </div>
  );
};

export default Article;
