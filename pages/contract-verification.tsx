import type { NextPage } from 'next';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import ContractVerification from 'ui/pages/ContractVerification';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/contract-verification">
      <ContractVerification/>
    </PageNextJs>
  );
};

export default Page;
