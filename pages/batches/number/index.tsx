import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import config from 'configs/app';

const rollupFeature = config.features.rollup;

const Batch = dynamic(
  () => {
    if (!rollupFeature.isEnabled) {
      throw new Error('Rollup feature is not enabled.');
    }

    switch (rollupFeature.type) {
      case 'arbitrum':
        return import('ui/pages/ArbitrumL2TxnBatch');
      case 'optimistic':
        return import('ui/pages/OptimisticL2TxnBatch');
      case 'zkEvm':
        return import('ui/pages/ZkEvmL2TxnBatch');
      case 'zkSync':
        return import('ui/pages/ZkSyncL2TxnBatch');
      case 'scroll':
        return import('ui/pages/ScrollL2TxnBatch');
    }
    throw new Error('Txn batches feature is not enabled.');
  },
  { ssr: false },
);

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/batches/number">
      <Batch/>
    </PageNextJs>
  );
};

export default Page;
