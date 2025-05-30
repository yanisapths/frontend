import React from 'react';

import { route } from 'nextjs-routes';

import { Button } from 'toolkit/chakra/button';
import { Link } from 'toolkit/chakra/link';

import AppErrorIcon from '../AppErrorIcon';
import AppErrorTitle from '../AppErrorTitle';

interface Props {
  hash?: string;
}

const AppErrorBlockConsensus = ({ hash }: Props) => {
  return (
    <>
      <AppErrorIcon statusCode={ 404 }/>
      <AppErrorTitle title="Block removed due to chain reorganization"/>
<<<<<<< HEAD
      <Link href={ hash ? route({ pathname: '/block/[height_or_hash]', query: { height_or_hash: hash } }) : route({ pathname: '/' }) } asChild>
        <Button
          mt={ 8 }
          variant="outline"
        >
          { hash ? 'View reorg' : 'Back to home' }
        </Button>
      </Link>
=======
      <Button
        mt={ 8 }
        size="lg"
        variant="outline"
        as="a"
        href={
          hash ?
            route({ pathname: '/block', query: { height_or_hash: hash } }) :
            route({ pathname: '/' })
        }
      >
        { hash ? 'View reorg' : 'Back to home' }
      </Button>
>>>>>>> new-version
    </>
  );
};

export default AppErrorBlockConsensus;
