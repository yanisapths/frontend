import type { NextPage } from 'next';

import type { Route } from 'nextjs-routes';
import PageNextJs from 'nextjs/PageNextJs';

import Token from 'ui/pages/Token';

const pathname: Route['pathname'] = '/token';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname={ pathname }>
      <Token/>
    </PageNextJs>
  );
};

export default Page;
