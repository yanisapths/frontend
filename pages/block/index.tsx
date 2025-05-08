import type { NextPage } from 'next';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import Block from 'ui/pages/Block';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/block/">
      <Block/>
    </PageNextJs>
  );
};

export default Page;
