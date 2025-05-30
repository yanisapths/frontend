import dynamic from 'next/dynamic';
import React from 'react';

import type { NextPageWithLayout } from 'nextjs/types';

import PageNextJs from 'nextjs/PageNextJs';

import LayoutSearchResults from 'ui/shared/layout/LayoutSearchResults';

const SearchResults = dynamic(() => import('ui/pages/SearchResults'), {
  ssr: false,
});

const Page: NextPageWithLayout = () => {
  return (
    <PageNextJs pathname="/search-results">
      <SearchResults/>
    </PageNextJs>
  );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutSearchResults>{ page }</LayoutSearchResults>;
};

export default Page;
