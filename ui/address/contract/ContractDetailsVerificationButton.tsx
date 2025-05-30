import React from 'react';

import { route } from 'nextjs-routes';

import { Button } from 'toolkit/chakra/button';
import { Link } from 'toolkit/chakra/link';

interface Props {
  isLoading: boolean;
  addressHash: string;
  isPartiallyVerified: boolean;
}

<<<<<<< HEAD
const ContractDetailsVerificationButton = ({ isLoading, addressHash, isPartiallyVerified }: Props) => {
=======
const ContractDetailsVerificationButton = ({
  isLoading,
  addressHash,
  isPartiallyVerified,
}: Props) => {
  if (isLoading) {
    return (
      <Skeleton
        w="130px"
        h={ 8 }
        mr={ isPartiallyVerified ? 0 : 3 }
        ml={ isPartiallyVerified ? 0 : 'auto' }
        borderRadius="base"
        flexShrink={ 0 }
      />
    );
  }
>>>>>>> new-version
  return (
    <Link
      href={ route({ pathname: '/address/[hash]/contract-verification', query: { hash: addressHash } }) }
      mr={ isPartiallyVerified ? 0 : 3 }
      ml={ isPartiallyVerified ? 0 : 'auto' }
      flexShrink={ 0 }
<<<<<<< HEAD
      asChild
=======
      as="a"
      href={ route({
        pathname: '/address//contract-verification',
        query: { hash: addressHash },
      }) }
>>>>>>> new-version
    >
      <Button
        size="sm"
        loadingSkeleton={ isLoading }
      >
        Verify & publish
      </Button>
    </Link>
  );
};

export default React.memo(ContractDetailsVerificationButton);
