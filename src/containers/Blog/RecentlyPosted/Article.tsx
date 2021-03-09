import React, {FC} from 'react';
import {Article as ArticleType} from 'types/blogs';

import './RecentlyPosted.scss';

// {
//   id?: number;
//   title: string;
//   banner: string;
//   author: {
//     name: string;
//     avatar: string;
//   };
//   datePosted: string;
//   readTime: string;
// };
interface ArticleProps {
  article: ArticleType;
}
const Article: FC<ArticleProps> = ({article}) => {
  return (
    <div className="RecentlyPosted__article-wrapper">
      <div className="RecentlyPosted__article-banner" />
      <div className="RecentlyPosted__article-content">
        <h3 className="RecentlyPosted__article-title">{article.title}</h3>
        <p className="RecentlyPosted__article-user">by {article.author.name}</p>
        <p className="RecentlyPosted__article-date">
          Feb 17
          <span className="RecentlyPosted__article-time">6 min read</span>
        </p>
      </div>
    </div>
  );
};

export default Article;
