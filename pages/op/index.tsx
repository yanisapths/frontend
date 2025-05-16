import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import PageNextJs from 'nextjs/PageNextJs';

const UserOp = dynamic(() => import('ui/pages/UserOp'), { ssr: false });

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/op">
      <UserOp/>
    </PageNextJs>
  );
};

export default Page;
