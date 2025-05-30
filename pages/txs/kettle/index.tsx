import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import PageNextJs from 'nextjs/PageNextJs';

const KettleTxs = dynamic(() => import('ui/pages/KettleTxs'), { ssr: false });

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/txs/kettle">
      <KettleTxs/>
    </PageNextJs>
  );
};

export default Page;
