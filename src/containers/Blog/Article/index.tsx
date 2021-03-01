import React, {FC} from 'react';

import './Article.scss';

interface ComponentProps {
  article: {
    id: number;
    banner: string;
    user: string;
    datePosted: string;
    readTime: string;
    body: string;
  };
}

const Article: FC<ComponentProps> = ({article}) => {
  return (
    <div className="Article">
      <div className="Article__wrapper">
        <div className="Article__content">
          <div className="Article__header">
            <h1 className="Article__title">Cryptocurrency 101: Summary of the history and uses of cryptocurrency.</h1>
            <p className="Article__user">by John Doe</p>
            <p className="Article__date">
              Feb 17
              <span className="Article__time">6 min read</span>
            </p>
          </div>
          <div className="Article__banner" />
          <div className="Article__body">
            <p>
              Generally, when the question: “what exactly is a cryptocurrency” comes up, it is easy to reply; “Digital
              Currency”. Well, yes, but no. Let’s start at the top. Basically, cryptocurrency is the usage of digital
              files as money/currency. The name is coined from two terms:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
