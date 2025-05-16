import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import type { Route } from 'nextjs-routes';
import PageNextJs from 'nextjs/PageNextJs';

const Chart = dynamic(() => import('ui/pages/Chart'), { ssr: false });

const pathname: Route['pathname'] = '/stats';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname={ pathname }>
      <Chart/>
    </PageNextJs>
  );
};

export default Page;
