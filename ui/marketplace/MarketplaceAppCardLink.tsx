import { chakra } from '@chakra-ui/react';
import React from 'react';
import type { MouseEvent } from 'react';

import { route } from 'nextjs-routes';

import { LinkOverlay } from 'toolkit/chakra/link';

type Props = {
  id: string;
  url: string;
  external?: boolean;
  title: string;
  onClick?: (event: MouseEvent, id: string) => void;
  className?: string;
};

const MarketplaceAppCardLink = ({
  url,
  external,
  id,
  title,
  onClick,
  className,
}: Props) => {
  const handleClick = React.useCallback(
    (event: MouseEvent) => {
      onClick?.(event, id);
    },
    [ onClick, id ],
  );

<<<<<<< HEAD
  return (
    <LinkOverlay
      href={ external ? url : route({ pathname: '/apps/[id]', query: { id } }) }
      marginRight={ 2 }
      className={ className }
      external={ external }
      onClick={ handleClick }
    >
      { title }
    </LinkOverlay>
=======
  return external ? (
    <LinkOverlay
      href={ url }
      isExternal={ true }
      marginRight={ 2 }
      className={ className }
    >
      { title }
    </LinkOverlay>
  ) : (
    <NextLink
      href={{ pathname: '/apps/id/', query: { id } }}
      passHref
      legacyBehavior
    >
      <LinkOverlay onClick={ handleClick } marginRight={ 2 } className={ className }>
        { title }
      </LinkOverlay>
    </NextLink>
>>>>>>> new-version
  );
};

export default chakra(MarketplaceAppCardLink);
