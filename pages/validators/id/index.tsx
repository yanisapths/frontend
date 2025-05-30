import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import PageNextJs from 'nextjs/PageNextJs';

import config from 'configs/app';

const validatorsFeature = config.features.validators;

const ValidatorDetails = dynamic(
  () => {
    if (
      validatorsFeature.isEnabled &&
      validatorsFeature.chainType === 'zilliqa'
    ) {
      return import('ui/pages/ValidatorZilliqa');
    }

    throw new Error('Validators feature is not enabled.');
  },
  { ssr: false },
);

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/validators/id">
      <ValidatorDetails/>
    </PageNextJs>
  );
};

export default Page;
