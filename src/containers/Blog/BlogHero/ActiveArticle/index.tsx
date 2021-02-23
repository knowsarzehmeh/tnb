import React, {FC} from 'react';
import './ActiveArticle.scss';

const ActiveArticle: FC = () => {
  return (
    <>
      <div className="ActiveArticle">
        <div className="ActiveArticle__container">
          <h3 className="ActiveArticle__title">
            Cryptocurrency 101: Summary of the history and uses of cryptocurrency.
          </h3>
          <p className="ActiveArticle__user">by John Doe</p>
          <p className="ActiveArticle__date">
            Feb 17
            <span className="ActiveArticle__time">6 min read</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ActiveArticle;
