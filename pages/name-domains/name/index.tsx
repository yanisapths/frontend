import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import PageNextJs from 'nextjs/PageNextJs';

const NameDomain = dynamic(() => import('ui/pages/NameDomain'), { ssr: false });

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/name-domains/name">
      <NameDomain/>
    </PageNextJs>
  );
};

export default Page;
