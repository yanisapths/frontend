import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

import type { AddressNFT } from 'types/api/address';

import { route } from 'nextjs-routes';

import getCurrencyValue from 'lib/getCurrencyValue';
import { getTokenTypeName } from 'lib/token/tokenTypes';
import { Link } from 'toolkit/chakra/link';
import { Skeleton } from 'toolkit/chakra/skeleton';
import { Tag } from 'toolkit/chakra/tag';
import NftEntity from 'ui/shared/entities/nft/NftEntity';
import TokenEntity from 'ui/shared/entities/token/TokenEntity';
import NftMedia from 'ui/shared/nft/NftMedia';

import NFTItemContainer from './NFTItemContainer';

type Props = AddressNFT & { isLoading: boolean; withTokenLink?: boolean };

const NFTItem = ({
  token,
  value,
  isLoading,
  withTokenLink,
  ...tokenInstance
}: Props) => {
  const valueResult =
    token.decimals && value ?
      getCurrencyValue({ value, decimals: token.decimals, accuracy: 2 })
        .valueStr :
      value;
  const tokenInstanceLink = tokenInstance.id ?
<<<<<<< HEAD
    route({ pathname: '/token/[hash]/instance/[id]', query: { hash: token.address_hash, id: tokenInstance.id } }) :
=======
    route({
      pathname: '/token/instance',
      query: { hash: token.address, id: tokenInstance.id },
    }) :
>>>>>>> new-version
    undefined;

  return (
    <NFTItemContainer position="relative">
<<<<<<< HEAD
      <Skeleton loading={ isLoading } className="light">
        <Tag background="gray.50" zIndex={ 1 } position="absolute" top="18px" right="18px">{ getTokenTypeName(token.type) }</Tag>
=======
      <Skeleton isLoaded={ !isLoading }>
        <LightMode>
          <Tag
            background="gray.50"
            zIndex={ 1 }
            position="absolute"
            top="18px"
            right="18px"
          >
            { getTokenTypeName(token.type) }
          </Tag>
        </LightMode>
>>>>>>> new-version
      </Skeleton>
      <Link href={ isLoading ? undefined : tokenInstanceLink } display="inline">
        <NftMedia
          mb="18px"
          data={ tokenInstance }
          size="md"
          isLoading={ isLoading }
          autoplayVideo={ false }
        />
      </Link>
      <Flex justifyContent="space-between" w="100%" flexWrap="wrap">
        <Flex ml={ 1 } overflow="hidden">
<<<<<<< HEAD
          <Text whiteSpace="pre" color="text.secondary">ID# </Text>
          <NftEntity hash={ token.address_hash } id={ tokenInstance.id } isLoading={ isLoading } noIcon/>
=======
          <Text whiteSpace="pre" variant="secondary">
            ID#{ ' ' }
          </Text>
          <NftEntity
            hash={ token.address }
            id={ tokenInstance.id }
            isLoading={ isLoading }
            noIcon
          />
>>>>>>> new-version
        </Flex>
        <Skeleton loading={ isLoading } overflow="hidden" ml={ 1 }>
          { valueResult && (
            <Flex>
<<<<<<< HEAD
              <Text color="text.secondary" whiteSpace="pre">Qty </Text>
              <Text overflow="hidden" wordBreak="break-all">{ valueResult }</Text>
=======
              <Text variant="secondary" whiteSpace="pre">
                Qty{ ' ' }
              </Text>
              <Text overflow="hidden" wordBreak="break-all">
                { valueResult }
              </Text>
>>>>>>> new-version
            </Flex>
          ) }
        </Skeleton>
      </Flex>
      { withTokenLink && (
        <TokenEntity
          mt={ 2 }
          token={ token }
          isLoading={ isLoading }
          noCopy
          noSymbol
        />
      ) }
    </NFTItemContainer>
  );
};

export default NFTItem;
