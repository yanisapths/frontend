<<<<<<< HEAD
import { Text, chakra } from '@chakra-ui/react';
=======
import {
  Button,
  Image,
  Text,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react';
>>>>>>> new-version
import React from 'react';

import type { AddressMetadataTagFormatted } from 'types/client/addressMetadata';

import { route } from 'nextjs-routes';

import config from 'configs/app';
import * as mixpanel from 'lib/mixpanel/index';
import { Image } from 'toolkit/chakra/image';
import { Link } from 'toolkit/chakra/link';

type Props = {
  data: NonNullable<AddressMetadataTagFormatted['meta']>;
  className?: string;
  txHash?: string;
  source: 'Txn' | 'NFT collection' | 'NFT item';
};

const AppActionButton = ({ data, className, txHash, source }: Props) => {
<<<<<<< HEAD
  const { appID, textColor, bgColor, appActionButtonText, appLogoURL, appMarketplaceURL } = data;
=======
  const defaultTextColor = useColorModeValue('blue.600', 'blue.300');
  const defaultBg = useColorModeValue('gray.100', 'gray.700');

  const {
    appID,
    textColor,
    bgColor,
    appActionButtonText,
    appLogoURL,
    appMarketplaceURL,
  } = data;
>>>>>>> new-version

  const actionURL = appMarketplaceURL
    ?.replace('{chainId}', config.chain.id || '')
    .replace('{txHash}', txHash || '');

  const handleClick = React.useCallback(() => {
    const info = appID || actionURL;
    if (info) {
      mixpanel.logEvent(mixpanel.EventTypes.PAGE_WIDGET, {
        Type: 'Action button',
        Info: info,
        Source: source,
      });
    }
  }, [ source, appID, actionURL ]);

  if ((!appID && !appMarketplaceURL) || (!appActionButtonText && !appLogoURL)) {
    return null;
  }

  const content = (
    <>
      { appLogoURL && (
        <Image
          src={ appLogoURL }
          alt={ `${ appActionButtonText } button` }
          boxSize={ 5 }
          borderRadius="sm"
          mr={ 2 }
        />
      ) }
      <Text textStyle="sm" fontWeight="500" color="currentColor">
        { appActionButtonText }
      </Text>
    </>
  );

  const isExternal = !appID;

  return (
    <Link
      className={ className }
<<<<<<< HEAD
      href={ isExternal ? actionURL : route({ pathname: '/apps/[id]', query: { id: appID, action: 'connect', ...(actionURL ? { url: actionURL } : {}) } }) }
      external={ isExternal }
=======
      as="a"
      href={ route({
        pathname: '/apps/id/',
        query: {
          id: appID,
          action: 'connect',
          ...(actionURL ? { url: actionURL } : {}),
        },
      }) }
>>>>>>> new-version
      onClick={ handleClick }
      variant="underlaid"
      iconColor={ textColor }
      color={ textColor }
      bg={ bgColor }
      _hover={{ color: textColor, opacity: textColor || bgColor ? 0.9 : 1 }}
      _active={{ color: textColor, opacity: textColor || bgColor ? 0.9 : 1 }}
    >
      { content }
    </Link>
  );
};

export default chakra(AppActionButton);
