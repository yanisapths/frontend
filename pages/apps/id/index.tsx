import dynamic from 'next/dynamic';
import React from 'react';

import type { NextPageWithLayout } from 'nextjs/types';

import type { Route } from 'nextjs-routes';
import PageNextJs from 'nextjs/PageNextJs';

import LayoutApp from 'ui/shared/layout/LayoutApp';

const MarketplaceApp = dynamic(() => import('ui/pages/MarketplaceApp'), {
  ssr: false,
});

const pathname: Route['pathname'] = '/apps/id';

const Page: NextPageWithLayout = () => {
  return (
    <PageNextJs pathname={ pathname }>
      <MarketplaceApp/>
    </PageNextJs>
  );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutApp>{ page }</LayoutApp>;
};

export default Page;
