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
    }
    throw new Error('Celestia txn batches feature is not enabled.');
  },
  { ssr: false },
);

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/batches/celestia/height">
      <Batch/>
    </PageNextJs>
  );
};

export default Page;
