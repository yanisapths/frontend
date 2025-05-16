import type { NextPage } from 'next';

import PageNextJs from 'nextjs/PageNextJs';

import TokenInstance from 'ui/pages/TokenInstance';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/token/instance">
      <TokenInstance/>
    </PageNextJs>
  );
};

export default Page;
