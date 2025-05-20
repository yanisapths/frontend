import type { NextPage } from 'next';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import Blob from 'ui/pages/Transaction';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/blobs">
      <Blob/>
    </PageNextJs>
  );
};

export default Page;
