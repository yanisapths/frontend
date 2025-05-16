import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import PageNextJs from 'nextjs/PageNextJs';

const Pool = dynamic(() => import('ui/pages/Pool'), { ssr: false });

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/pools/hash">
      <Pool/>
    </PageNextJs>
  );
};

export default Page;
