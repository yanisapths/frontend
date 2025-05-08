import type { NextPage } from 'next';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import ContractVerificationForAddress from 'ui/pages/ContractVerificationForAddress';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/address/contract-verification">
      <ContractVerificationForAddress/>
    </PageNextJs>
  );
};

export default Page;
