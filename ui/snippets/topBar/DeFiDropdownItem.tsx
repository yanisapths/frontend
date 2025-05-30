import { Text } from '@chakra-ui/react';
import React from 'react';

import type { DeFiDropdownItem as TDeFiDropdownItem } from 'types/client/deFiDropdown';

import { route } from 'nextjs-routes';

import { Link } from 'toolkit/chakra/link';
import IconSvg from 'ui/shared/IconSvg';

type Props = {
  item: TDeFiDropdownItem & { onClick: () => void };
};

const DeFiDropdownItem = ({ item }: Props) => {
  return (
    <Link
      href={ item.dappId ? route({ pathname: '/apps/[id]', query: { id: item.dappId, action: 'connect' } }) : item.url }
      external={ !item.dappId }
      w="100%"
      h="34px"
      variant="menu"
    >
      <IconSvg name={ item.icon } boxSize={ 5 } mr={ 2 }/>
<<<<<<< HEAD
      <Text as="span" fontSize="sm">{ item.text }</Text>
    </Link>
=======
      <Text as="span" fontSize="sm">
        { item.text }
      </Text>
    </>
  );

  return item.dappId ? (
    <LinkInternal
      href={ route({
        pathname: '/apps/id/',
        query: { id: item.dappId, action: 'connect' },
      }) }
      target="_self"
      { ...styles }
    >
      { content }
    </LinkInternal>
  ) : (
    <LinkExternal href={ item.url } { ...styles }>
      { content }
    </LinkExternal>
>>>>>>> new-version
  );
};

export default React.memo(DeFiDropdownItem);
