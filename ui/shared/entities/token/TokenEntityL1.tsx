import { chakra } from '@chakra-ui/react';
import React from 'react';

import { route } from 'nextjs-routes';

import config from 'configs/app';

import * as TokenEntity from './TokenEntity';

const rollupFeature = config.features.rollup;

const TokenEntityL1 = (props: TokenEntity.EntityProps) => {
  if (!rollupFeature.isEnabled) {
    return null;
  }

<<<<<<< HEAD
  const defaultHref = rollupFeature.parentChain.baseUrl + route({
    pathname: '/token/[hash]',
    query: { hash: props.token.address_hash },
  });
=======
  const defaultHref =
    rollupFeature.parentChain.baseUrl +
    route({
      pathname: '/token',
      query: { hash: props.token.address },
    });
>>>>>>> new-version

  return (
    <TokenEntity.default
      { ...props }
      href={ props.href ?? defaultHref }
      isExternal
    />
  );
};

export default chakra(TokenEntityL1);
