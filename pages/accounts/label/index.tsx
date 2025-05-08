import type { NextPage } from 'next';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import AccountsLabelSearch from 'ui/pages/AccountsLabelSearch';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/accounts/label/">
      <AccountsLabelSearch/>
    </PageNextJs>
  );
};

export default Page;
