import type { NextPage } from 'next';
<<<<<<< HEAD
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import Stats from 'ui/pages/Stats';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/stats">
      <Stats/>
=======
import dynamic from 'next/dynamic';

import type { Route } from 'nextjs-routes';
import PageNextJs from 'nextjs/PageNextJs';

const Chart = dynamic(() => import('ui/pages/Chart'), { ssr: false });

const pathname: Route['pathname'] = '/stats';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname={ pathname }>
      <Chart/>
>>>>>>> new-version
    </PageNextJs>
  );
};

export default Page;
