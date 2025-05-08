import type { NextPage } from 'next';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import BlockCountdown from 'ui/pages/BlockCountdown';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/block/countdown/height">
      <BlockCountdown/>
    </PageNextJs>
  );
};

export default Page;
