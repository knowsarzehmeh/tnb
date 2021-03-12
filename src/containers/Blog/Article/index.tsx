/* eslint-disable react/no-danger */
import React, {FC, useMemo} from 'react';
import {useParams} from 'react-router-dom';
import {Icon, IconType, SocialMediaIcon} from 'components';
import {SocialMedia} from 'types/social-media';

import './Article.scss';
import {slugify} from 'utils/urls';
import {getArticleByTitle} from 'utils/data';

// {
//   id: number;
//   banner: string;
//   user: string;
//   datePosted: string;
//   readTime: string;
//   body: string;
// };
interface RouteParams {
  slug: string;
}

const Article: FC = () => {
  const {slug} = useParams<RouteParams>();

  const article = useMemo(() => getArticleByTitle(slugify(slug, '-', ' ')), [slug]);

  const renderSocialMediaLinks = () =>
    [SocialMedia.linkedin, SocialMedia.facebook, SocialMedia.twitter, SocialMedia.instagram].map((website) => (
      <SocialMediaIcon className="Article__SocialMediaLink" iconSize={28} key={website} website={website} />
    ));

  return (
    <>
      <div className="Article">
        <div className="Article__wrapper">
          <div className="Article__content">
            <div className="Article__header">
              <h1 className="Article__title">{article?.title}</h1>
              <div className="RecentlyPosted__author-wrapper">
                <img
                  className="RecentlyPosted__author-avatar"
                  src={article?.author.avatar}
                  alt={article?.author.name}
                />
                <p className="Article__user">by {article?.author.name}</p>
              </div>
              <p className="Article__date">
                {article?.datePosted}
                <span className="Article__time">{article?.readTime}</span>
              </p>
            </div>
            <div style={{background: `url(${article?.banner})`, backgroundSize: 'cover'}} className="Article__banner" />
            <div className="Article__body" dangerouslySetInnerHTML={{__html: article?.content as string}} />
          </div>
        </div>
      </div>

      {/* Social Liks */}
      <div className="Article__Socials__wrapper">
        <div className="Article__Socials">
          <h3>Share to support thenewboston community</h3>
          <div className="Article__social-icons">{renderSocialMediaLinks()}</div>
        </div>
        <div className="Article__likes">
          <Icon size={25} icon={IconType.thumbsUp} className="Article__likes__thumbsUp" />
          <p>1232</p>
        </div>
      </div>
    </>
  );
};

export default Article;
