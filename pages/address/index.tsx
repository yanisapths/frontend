import type { NextPage } from 'next';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import Address from 'ui/pages/Address';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/address/">
      <Address/>
    </PageNextJs>
  );
};

export default Page;
