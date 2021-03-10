import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {Article as ArticleType} from 'types/blogs';
import {slugify} from 'utils/urls';

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
      {/* <div className="RecentlyPosted__article-banner" /> */}
      <div className="RecentlyPosted__article-content">
        <Link to={`/blog/${slugify(article.title, ' ', '-')}`}>
          <h3 className="RecentlyPosted__article-title">{article.title}</h3>
        </Link>
        <p className="RecentlyPosted__article-user">by {article.author.name}</p>
        <p className="RecentlyPosted__article-date">
          {article.datePosted}
          <span className="RecentlyPosted__article-time">6 min read</span>
        </p>
      </div>
    </div>
  );
};

export default Article;
