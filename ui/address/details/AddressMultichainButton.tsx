import { capitalize } from 'es-toolkit';
import React from 'react';

import type { MultichainProviderConfigParsed } from 'types/client/multichainProviderConfig';

import { route } from 'nextjs-routes';

import { Image } from 'toolkit/chakra/image';
import { Link } from 'toolkit/chakra/link';
import { Tooltip } from 'toolkit/chakra/tooltip';

const TEMPLATE_ADDRESS = '{address}';

type Props = {
  hasSingleProvider: boolean;
  item: MultichainProviderConfigParsed;
  addressHash: string;
  onClick?: () => void;
};

const AddressMultichainButton = ({
  item,
  addressHash,
  onClick,
  hasSingleProvider,
}: Props) => {
  const buttonIcon = (
    <Image
      src={ item.logoUrl }
      alt={ item.name }
      boxSize={ 5 }
      mr={ hasSingleProvider ? 2 : 0 }
      borderRadius="4px"
      overflow="hidden"
    />
  );

  const buttonContent = hasSingleProvider ? (
    <>
      { buttonIcon }
      { capitalize(item.name) }
    </>
  ) : (
    <Tooltip content={ capitalize(item.name) }>{ buttonIcon }</Tooltip>
  );

<<<<<<< HEAD
=======
  const linkProps = {
    variant: hasSingleProvider ? ('subtle' as const) : undefined,
    display: 'flex',
    alignItems: 'center',
    fontSize: 'sm',
    lineHeight: 5,
    fontWeight: 500,
    onClick,
  };

>>>>>>> new-version
  try {
    const portfolioUrlString = item.urlTemplate.replace(
      TEMPLATE_ADDRESS,
      addressHash,
    );
    const portfolioUrl = new URL(portfolioUrlString);
    portfolioUrl.searchParams.append('utm_source', 'blockscout');
    portfolioUrl.searchParams.append('utm_medium', 'address');
    const dappId = item.dappId;
<<<<<<< HEAD
    const isExternal = typeof dappId !== 'string';

    return (
      <Link
        external={ isExternal }
        href={ isExternal ? portfolioUrl.toString() : route({ pathname: '/apps/[id]', query: { id: dappId, url: portfolioUrl.toString() } }) }
        variant={ hasSingleProvider ? 'underlaid' : undefined }
        textStyle="sm"
        fontWeight="medium"
        onClick={ onClick }
        noIcon={ !hasSingleProvider }
      >
        { buttonContent }
      </Link>
=======
    return typeof dappId === 'string' ? (
      <LinkInternal
        href={ route({
          pathname: '/apps/id/',
          query: { id: dappId, url: portfolioUrl.toString() },
        }) }
        { ...linkProps }
      >
        { buttonContent }
      </LinkInternal>
    ) : (
      <LinkExternal href={ portfolioUrl.toString() } { ...linkProps }>
        { buttonContent }
      </LinkExternal>
>>>>>>> new-version
    );
  } catch (error) {}

  return null;
};

export default AddressMultichainButton;
