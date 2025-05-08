import type { NextPage } from 'next';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import Transaction from 'ui/pages/Transaction';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/tx/">
      <Transaction/>
    </PageNextJs>
  );
};

export default Page;
