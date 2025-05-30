import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

const BlockCountdownIndex = dynamic(
  () => import('ui/pages/BlockCountdownIndex'),
  { ssr: false },
);

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/block/countdown">
      <BlockCountdownIndex/>
    </PageNextJs>
  );
};

export default Page;
