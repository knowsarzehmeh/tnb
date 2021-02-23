import React, {FC} from 'react';
import {PageTitle} from 'components';

import BlogHero from './BlogHero';
import RecentlyPosted from './RecentlyPosted';

const Blog: FC = () => {
  return (
    <>
      <PageTitle title="blog" />
      <BlogHero />
      <RecentlyPosted articles={[1, 2, 3, 4, 5]} />
    </>
  );
};

export default Blog;
