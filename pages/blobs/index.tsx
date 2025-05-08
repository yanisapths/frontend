import type { NextPage } from 'next';
import React from 'react';

import type { Props } from 'nextjs/getServerSideProps';
import PageNextJs from 'nextjs/PageNextJs';

import Blob from 'ui/pages/Transaction';

const Page: NextPage<Props> = (props: Props) => {
  return (
    <PageNextJs pathname="/blobs/" query={ props.query }>
      <Blob/>
    </PageNextJs>
  );
};

export default Page;
