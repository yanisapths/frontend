<<<<<<< HEAD
import { chakra, Text, Flex, Box } from '@chakra-ui/react';
=======
import {
  chakra,
  Tr,
  Td,
  Text,
  Flex,
  Image,
  Box,
  useColorMode,
  Tag,
} from '@chakra-ui/react';
>>>>>>> new-version
import React from 'react';
import xss from 'xss';

import type { SearchResultItem } from 'types/client/search';
import type { AddressFormat } from 'types/views/address';

import { route } from 'nextjs-routes';

import { toBech32Address } from 'lib/address/bech32';
import dayjs from 'lib/date/dayjs';
import highlightText from 'lib/highlightText';
import * as mixpanel from 'lib/mixpanel/index';
import { saveToRecentKeywords } from 'lib/recentSearchKeywords';
import { useColorMode } from 'toolkit/chakra/color-mode';
import { Image } from 'toolkit/chakra/image';
import { Link } from 'toolkit/chakra/link';
import { Skeleton } from 'toolkit/chakra/skeleton';
import { TableCell, TableRow } from 'toolkit/chakra/table';
import { Tag } from 'toolkit/chakra/tag';
import { ADDRESS_REGEXP } from 'toolkit/components/forms/validators/address';
import ContractCertifiedLabel from 'ui/shared/ContractCertifiedLabel';
import * as AddressEntity from 'ui/shared/entities/address/AddressEntity';
import * as BlobEntity from 'ui/shared/entities/blob/BlobEntity';
import * as BlockEntity from 'ui/shared/entities/block/BlockEntity';
import * as EnsEntity from 'ui/shared/entities/ens/EnsEntity';
import * as TokenEntity from 'ui/shared/entities/token/TokenEntity';
import * as TxEntity from 'ui/shared/entities/tx/TxEntity';
import * as UserOpEntity from 'ui/shared/entities/userOp/UserOpEntity';
import HashStringShortenDynamic from 'ui/shared/HashStringShortenDynamic';
import IconSvg from 'ui/shared/IconSvg';
import type { SearchResultAppItem } from 'ui/shared/search/utils';
import { getItemCategory, searchItemTitles } from 'ui/shared/search/utils';

import SearchResultEntityTag from './SearchResultEntityTag';

interface Props {
  data: SearchResultItem | SearchResultAppItem;
  searchTerm: string;
  isLoading?: boolean;
  addressFormat?: AddressFormat;
}

const SearchResultTableItem = ({
  data,
  searchTerm,
  isLoading,
  addressFormat,
}: Props) => {
  const handleLinkClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      saveToRecentKeywords(searchTerm);
      mixpanel.logEvent(mixpanel.EventTypes.SEARCH_QUERY, {
        'Search query': searchTerm,
        'Source page type': 'Search results',
        'Result URL': e.currentTarget.href,
      });
    },
    [ searchTerm ],
  );

  const { colorMode } = useColorMode();

  const content = (() => {
    switch (data.type) {
      case 'token': {
        const name = data.name + (data.symbol ? ` (${ data.symbol })` : '');
<<<<<<< HEAD
        const hash = data.filecoin_robust_address || (addressFormat === 'bech32' ? toBech32Address(data.address_hash) : data.address_hash);
=======
        const hash =
          data.filecoin_robust_address ||
          (addressFormat === 'bech32' ?
            toBech32Address(data.address) :
            data.address);
>>>>>>> new-version

        return (
          <>
            <TableCell>
              <Flex alignItems="center">
<<<<<<< HEAD
                <TokenEntity.Icon token={{ ...data, type: data.token_type }} isLoading={ isLoading }/>
                <Link
                  href={ route({ pathname: '/token/[hash]', query: { hash: data.address_hash } }) }
=======
                <TokenEntity.Icon
                  token={{ ...data, type: data.token_type }}
                  isLoading={ isLoading }
                />
                <LinkInternal
                  href={ route({
                    pathname: '/token',
                    query: { hash: data.address },
                  }) }
>>>>>>> new-version
                  fontWeight={ 700 }
                  wordBreak="break-all"
                  overflow="hidden"
                  loading={ isLoading }
                  onClick={ handleLinkClick }
                >
                  <Skeleton
                    loading={ isLoading }
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(name, searchTerm),
                    }}
                  />
<<<<<<< HEAD
                </Link>
                { data.certified && <ContractCertifiedLabel iconSize={ 4 } boxSize={ 4 } ml={ 1 }/> }
                { data.is_verified_via_admin_panel && !data.certified && <IconSvg name="certified" boxSize={ 4 } ml={ 1 } color="green.500"/> }
              </Flex>
            </TableCell>
            <TableCell verticalAlign="middle">
              <Skeleton loading={ isLoading } whiteSpace="nowrap" overflow="hidden" display="flex" alignItems="center">
                <Box overflow="hidden" whiteSpace="nowrap" w={ data.is_smart_contract_verified ? 'calc(100%-28px)' : 'unset' }>
=======
                </LinkInternal>
                { data.certified && (
                  <ContractCertifiedLabel iconSize={ 4 } boxSize={ 4 } ml={ 1 }/>
                ) }
                { data.is_verified_via_admin_panel && !data.certified && (
                  <IconSvg
                    name="certified"
                    boxSize={ 4 }
                    ml={ 1 }
                    color="green.500"
                  />
                ) }
              </Flex>
            </Td>
            <Td fontSize="sm" verticalAlign="middle">
              <Skeleton
                isLoaded={ !isLoading }
                whiteSpace="nowrap"
                overflow="hidden"
                display="flex"
                alignItems="center"
              >
                <Box
                  overflow="hidden"
                  whiteSpace="nowrap"
                  w={
                    data.is_smart_contract_verified ?
                      'calc(100%-28px)' :
                      'unset'
                  }
                >
>>>>>>> new-version
                  <HashStringShortenDynamic hash={ hash }/>
                </Box>
                { data.is_smart_contract_verified && (
                  <IconSvg
                    name="status/success"
                    boxSize="14px"
                    color="green.500"
                    ml={ 1 }
                    flexShrink={ 0 }
                  />
                ) }
              </Skeleton>
<<<<<<< HEAD
            </TableCell>
            <TableCell verticalAlign="middle" isNumeric>
              <Skeleton loading={ isLoading } whiteSpace="nowrap" overflow="hidden">
                <Text overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" fontWeight={ 700 }>
                  { data.token_type === 'ERC-20' && data.exchange_rate && `$${ Number(data.exchange_rate).toLocaleString() }` }
                  { data.token_type !== 'ERC-20' && data.total_supply && `Items ${ Number(data.total_supply).toLocaleString() }` }
=======
            </Td>
            <Td fontSize="sm" verticalAlign="middle" isNumeric>
              <Skeleton
                isLoaded={ !isLoading }
                whiteSpace="nowrap"
                overflow="hidden"
              >
                <Text
                  overflow="hidden"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  fontWeight={ 700 }
                >
                  { data.token_type === 'ERC-20' &&
                    data.exchange_rate &&
                    `$${ Number(data.exchange_rate).toLocaleString() }` }
                  { data.token_type !== 'ERC-20' &&
                    data.total_supply &&
                    `Items ${ Number(data.total_supply).toLocaleString() }` }
>>>>>>> new-version
                </Text>
              </Skeleton>
            </TableCell>
          </>
        );
      }

      case 'metadata_tag':
      case 'contract':
      case 'address': {
        const shouldHighlightHash = ADDRESS_REGEXP.test(searchTerm);
        const addressName = data.name || data.ens_info?.name;
        const address = {
          hash: data.address_hash,
          filecoin: {
            robust: data.filecoin_robust_address,
          },
          is_contract: data.type === 'contract',
          is_verified: data.is_smart_contract_verified,
          name: null,
          implementations: null,
          ens_domain_name: null,
        };
<<<<<<< HEAD
        const expiresText = data.ens_info?.expiry_date ? ` (expires ${ dayjs(data.ens_info.expiry_date).fromNow() })` : '';
        const hash = addressFormat === 'bech32' ? toBech32Address(data.address_hash) : data.address_hash;

        return (
          <>
            <TableCell colSpan={ (addressName || data.type === 'metadata_tag') ? 1 : 3 } verticalAlign="middle">
=======
        const expiresText = data.ens_info?.expiry_date ?
          ` (expires ${ dayjs(data.ens_info.expiry_date).fromNow() })` :
          '';
        const hash =
          addressFormat === 'bech32' ?
            toBech32Address(data.address) :
            data.address;

        return (
          <>
            <Td
              fontSize="sm"
              colSpan={ addressName || data.type === 'metadata_tag' ? 1 : 3 }
              verticalAlign="middle"
            >
>>>>>>> new-version
              <AddressEntity.Container>
                <AddressEntity.Icon address={ address }/>
                <AddressEntity.Link address={ address } onClick={ handleLinkClick }>
                  <AddressEntity.Content
                    asProp={ shouldHighlightHash ? 'mark' : 'span' }
                    address={{ ...address, hash }}
                    textStyle="sm"
                    fontWeight={ 700 }
                  />
                </AddressEntity.Link>
                <AddressEntity.Copy address={{ ...address, hash }}/>
              </AddressEntity.Container>
            </TableCell>
            { addressName && (
<<<<<<< HEAD
              <TableCell colSpan={ data.type === 'metadata_tag' ? 1 : 2 } verticalAlign="middle">
=======
              <Td
                colSpan={ data.type === 'metadata_tag' ? 1 : 2 }
                fontSize="sm"
                verticalAlign="middle"
              >
>>>>>>> new-version
                <Flex alignItems="center">
                  <Text
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
<<<<<<< HEAD
                    <span dangerouslySetInnerHTML={{ __html: shouldHighlightHash ? xss(addressName) : highlightText(addressName, searchTerm) }}/>
                    { data.ens_info && (
                      data.ens_info.names_count > 1 ? (
                        <chakra.span color="text.secondary">
                          { data.ens_info.names_count > 39 ? '40+' : `+${ data.ens_info.names_count - 1 }` }
                        </chakra.span>
                      ) :
                        <chakra.span color="text.secondary">{ expiresText }</chakra.span>
                    ) }
=======
                    <span
                      dangerouslySetInnerHTML={{
                        __html: shouldHighlightHash ?
                          xss(addressName) :
                          highlightText(addressName, searchTerm),
                      }}
                    />
                    { data.ens_info &&
                      (data.ens_info.names_count > 1 ? (
                        <chakra.span color="text_secondary">
                          { data.ens_info.names_count > 39 ?
                            '40+' :
                            `+${ data.ens_info.names_count - 1 }` }
                        </chakra.span>
                      ) : (
                        <chakra.span color="text_secondary">
                          { expiresText }
                        </chakra.span>
                      )) }
>>>>>>> new-version
                  </Text>
                  { data.certified && (
                    <ContractCertifiedLabel iconSize={ 4 } boxSize={ 4 } mx={ 1 }/>
                  ) }
                </Flex>
              </TableCell>
            ) }
            { data.type === 'metadata_tag' && (
<<<<<<< HEAD
              <TableCell colSpan={ addressName ? 1 : 2 } verticalAlign="middle" textAlign="right">
                <SearchResultEntityTag metadata={ data.metadata } searchTerm={ searchTerm }/>
              </TableCell>
=======
              <Td
                colSpan={ addressName ? 1 : 2 }
                fontSize="sm"
                verticalAlign="middle"
              >
                <Flex justifyContent="flex-end">
                  { /* we show regular tag because we don't need all meta info here, but need to highlight search term */ }
                  <Tag display="flex" alignItems="center">
                    <EntityTagIcon data={ data.metadata } iconColor="gray.400"/>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightText(data.metadata.name, searchTerm),
                      }}
                    />
                  </Tag>
                </Flex>
              </Td>
>>>>>>> new-version
            ) }
          </>
        );
      }

      case 'label': {
<<<<<<< HEAD
        const hash = data.filecoin_robust_address || (addressFormat === 'bech32' ? toBech32Address(data.address_hash) : data.address_hash);
=======
        const hash =
          data.filecoin_robust_address ||
          (addressFormat === 'bech32' ?
            toBech32Address(data.address) :
            data.address);
>>>>>>> new-version

        return (
          <>
            <TableCell>
              <Flex alignItems="center">
<<<<<<< HEAD
                <IconSvg name="publictags_slim" boxSize={ 6 } mr={ 2 } color="gray.500"/>
                <Link
                  href={ route({ pathname: '/address/[hash]', query: { hash: data.address_hash } }) }
=======
                <IconSvg
                  name="publictags_slim"
                  boxSize={ 6 }
                  mr={ 2 }
                  color="gray.500"
                />
                <LinkInternal
                  href={ route({
                    pathname: '/address/',
                    query: { hash: data.address },
                  }) }
>>>>>>> new-version
                  fontWeight={ 700 }
                  wordBreak="break-all"
                  loading={ isLoading }
                  onClick={ handleLinkClick }
                >
<<<<<<< HEAD
                  <span dangerouslySetInnerHTML={{ __html: highlightText(data.name, searchTerm) }}/>
                </Link>
=======
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightText(data.name, searchTerm),
                    }}
                  />
                </LinkInternal>
>>>>>>> new-version
              </Flex>
            </TableCell>
            <TableCell verticalAlign="middle">
              <Flex alignItems="center" overflow="hidden">
                <Box
                  overflow="hidden"
                  whiteSpace="nowrap"
                  w={
                    data.is_smart_contract_verified ?
                      'calc(100%-28px)' :
                      'unset'
                  }
                >
                  <HashStringShortenDynamic hash={ hash }/>
                </Box>
                { data.is_smart_contract_verified && (
                  <IconSvg
                    name="status/success"
                    boxSize="14px"
                    color="green.500"
                    ml={ 1 }
                    flexShrink={ 0 }
                  />
                ) }
              </Flex>
            </TableCell>
            <TableCell/>
          </>
        );
      }

      case 'app': {
        const title = (
          <span
            dangerouslySetInnerHTML={{
              __html: highlightText(data.app.title, searchTerm),
            }}
          />
        );
        return (
          <>
            <TableCell>
              <Flex alignItems="center">
                <Image
                  borderRadius="base"
                  boxSize={ 6 }
                  mr={ 2 }
                  src={
                    colorMode === 'dark' && data.app.logoDarkMode ?
                      data.app.logoDarkMode :
                      data.app.logo
                  }
                  alt={ `${ data.app.title } app icon` }
                />
<<<<<<< HEAD
                <Link
                  href={ data.app.external ?
                    route({ pathname: '/apps', query: { selectedAppId: data.app.id } }) :
                    route({ pathname: '/apps/[id]', query: { id: data.app.id } })
=======
                <LinkInternal
                  href={
                    data.app.external ?
                      route({
                        pathname: '/apps',
                        query: { selectedAppId: data.app.id },
                      }) :
                      route({
                        pathname: '/apps/id/',
                        query: { id: data.app.id },
                      })
>>>>>>> new-version
                  }
                  fontWeight={ 700 }
                  wordBreak="break-all"
                  loading={ isLoading }
                  onClick={ handleLinkClick }
                >
                  { title }
                </Link>
              </Flex>
            </TableCell>
            <TableCell verticalAlign="middle" colSpan={ 2 }>
              <Text
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
              >
                { data.app.description }
              </Text>
            </TableCell>
          </>
        );
      }

      case 'block': {
        const shouldHighlightHash =
          data.block_hash.toLowerCase() === searchTerm.toLowerCase();
        const isFutureBlock = data.timestamp === undefined && !isLoading;
        const href = isFutureBlock ?
          route({
            pathname: '/block/countdown/height',
            query: { height: String(data.block_number) },
          }) :
          route({
            pathname: '/block',
            query: {
              height_or_hash: data.block_hash ?? String(data.block_number),
            },
          });

        return (
          <>
            <TableCell>
              <BlockEntity.Container>
                <BlockEntity.Icon isLoading={ isLoading }/>
                <BlockEntity.Link
                  href={ href }
                  onClick={ handleLinkClick }
                  isLoading={ isLoading }
                >
                  <BlockEntity.Content
                    asProp={ shouldHighlightHash ? 'span' : 'mark' }
                    number={ Number(data.block_number) }
                    textStyle="sm"
                    fontWeight={ 700 }
                    isLoading={ isLoading }
                  />
                </BlockEntity.Link>
              </BlockEntity.Container>
<<<<<<< HEAD
            </TableCell>
            <TableCell fontSize="sm" verticalAlign="middle" colSpan={ isFutureBlock ? 2 : 1 }>
              { isFutureBlock ? (
                <Skeleton loading={ isLoading }>Learn estimated time for this block to be created.</Skeleton>
              ) : (
                <Flex columnGap={ 2 } alignItems="center">
                  { data.block_type === 'reorg' && !isLoading && <Tag flexShrink={ 0 }>Reorg</Tag> }
                  { data.block_type === 'uncle' && !isLoading && <Tag flexShrink={ 0 }>Uncle</Tag> }
                  <Skeleton loading={ isLoading } overflow="hidden" whiteSpace="nowrap" display="block">
                    <HashStringShortenDynamic hash={ data.block_hash } as={ shouldHighlightHash ? 'mark' : 'span' }/>
=======
            </Td>
            <Td
              fontSize="sm"
              verticalAlign="middle"
              colSpan={ isFutureBlock ? 2 : 1 }
            >
              { isFutureBlock ? (
                <Skeleton isLoaded={ !isLoading }>
                  Learn estimated time for this block to be created.
                </Skeleton>
              ) : (
                <Flex columnGap={ 2 } alignItems="center">
                  { data.block_type === 'reorg' && !isLoading && (
                    <Tag flexShrink={ 0 }>Reorg</Tag>
                  ) }
                  { data.block_type === 'uncle' && !isLoading && (
                    <Tag flexShrink={ 0 }>Uncle</Tag>
                  ) }
                  <Skeleton
                    isLoaded={ !isLoading }
                    overflow="hidden"
                    whiteSpace="nowrap"
                    as={ shouldHighlightHash ? 'mark' : 'span' }
                    display="block"
                  >
                    <HashStringShortenDynamic hash={ data.block_hash }/>
>>>>>>> new-version
                  </Skeleton>
                </Flex>
              ) }
            </TableCell>
            { !isFutureBlock && (
              <TableCell fontSize="sm" verticalAlign="middle" isNumeric>
                <Skeleton loading={ isLoading } color="text.secondary">
                  <span>{ dayjs(data.timestamp).format('llll') }</span>
                </Skeleton>
              </TableCell>
            ) }
          </>
        );
      }

      case 'transaction': {
        return (
          <>
            <TableCell colSpan={ 2 } fontSize="sm">
              <TxEntity.Container>
                <TxEntity.Icon/>
                <TxEntity.Link
                  isLoading={ isLoading }
                  hash={ data.transaction_hash }
                  onClick={ handleLinkClick }
                >
                  <TxEntity.Content
                    asProp="mark"
                    hash={ data.transaction_hash }
                    textStyle="sm"
                    fontWeight={ 700 }
                  />
                </TxEntity.Link>
              </TxEntity.Container>
<<<<<<< HEAD
            </TableCell>
            <TableCell fontSize="sm" verticalAlign="middle" isNumeric>
              <Text color="text.secondary">{ dayjs(data.timestamp).format('llll') }</Text>
            </TableCell>
=======
            </Td>
            <Td fontSize="sm" verticalAlign="middle" isNumeric>
              <Text variant="secondary">
                { dayjs(data.timestamp).format('llll') }
              </Text>
            </Td>
>>>>>>> new-version
          </>
        );
      }

      case 'blob': {
        return (
          <TableCell colSpan={ 3 } fontSize="sm">
            <BlobEntity.Container>
              <BlobEntity.Icon/>
              <BlobEntity.Link
                isLoading={ isLoading }
                hash={ data.blob_hash }
                onClick={ handleLinkClick }
              >
                <BlobEntity.Content
                  asProp="mark"
                  hash={ data.blob_hash }
                  textStyle="sm"
                  fontWeight={ 700 }
                />
              </BlobEntity.Link>
            </BlobEntity.Container>
          </TableCell>
        );
      }

      case 'user_operation': {
        return (
          <>
            <TableCell colSpan={ 2 } fontSize="sm">
              <UserOpEntity.Container>
                <UserOpEntity.Icon/>
                <UserOpEntity.Link
                  isLoading={ isLoading }
                  hash={ data.user_operation_hash }
                  onClick={ handleLinkClick }
                >
                  <UserOpEntity.Content
                    asProp="mark"
                    hash={ data.user_operation_hash }
                    textStyle="sm"
                    fontWeight={ 700 }
                  />
                </UserOpEntity.Link>
              </UserOpEntity.Container>
<<<<<<< HEAD
            </TableCell>
            <TableCell fontSize="sm" verticalAlign="middle" isNumeric>
              <Text color="text.secondary">{ dayjs(data.timestamp).format('llll') }</Text>
            </TableCell>
=======
            </Td>
            <Td fontSize="sm" verticalAlign="middle" isNumeric>
              <Text variant="secondary">
                { dayjs(data.timestamp).format('llll') }
              </Text>
            </Td>
>>>>>>> new-version
          </>
        );
      }

      case 'ens_domain': {
<<<<<<< HEAD
        const expiresText = data.ens_info?.expiry_date ? ` expires ${ dayjs(data.ens_info.expiry_date).fromNow() }` : '';
        const hash = data.filecoin_robust_address || (addressFormat === 'bech32' ? toBech32Address(data.address_hash) : data.address_hash);
=======
        const expiresText = data.ens_info?.expiry_date ?
          ` expires ${ dayjs(data.ens_info.expiry_date).fromNow() }` :
          '';
        const hash =
          data.filecoin_robust_address ||
          (addressFormat === 'bech32' ?
            toBech32Address(data.address) :
            data.address);
>>>>>>> new-version

        return (
          <>
            <TableCell fontSize="sm">
              <EnsEntity.Container>
                <EnsEntity.Icon protocol={ data.ens_info.protocol }/>
<<<<<<< HEAD
                <Link
                  href={ route({ pathname: '/address/[hash]', query: { hash: data.address_hash } }) }
=======
                <LinkInternal
                  href={ route({
                    pathname: '/address/',
                    query: { hash: data.address },
                  }) }
>>>>>>> new-version
                  fontWeight={ 700 }
                  wordBreak="break-all"
                  loading={ isLoading }
                  onClick={ handleLinkClick }
                  overflow="hidden"
                >
                  <Skeleton
<<<<<<< HEAD
                    loading={ isLoading }
                    dangerouslySetInnerHTML={{ __html: highlightText(data.ens_info.name, searchTerm) }}
=======
                    isLoaded={ !isLoading }
                    dangerouslySetInnerHTML={{
                      __html: highlightText(data.ens_info.name, searchTerm),
                    }}
>>>>>>> new-version
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                  />
                </Link>
              </EnsEntity.Container>
            </TableCell>
            <TableCell>
              <Flex alignItems="center" overflow="hidden">
                <Box
                  overflow="hidden"
                  whiteSpace="nowrap"
                  w={
                    data.is_smart_contract_verified ?
                      'calc(100%-28px)' :
                      'unset'
                  }
                >
                  <HashStringShortenDynamic hash={ hash }/>
                </Box>
                { data.is_smart_contract_verified && (
                  <IconSvg
                    name="status/success"
                    boxSize="14px"
                    color="green.500"
                    ml={ 1 }
                    flexShrink={ 0 }
                  />
                ) }
              </Flex>
<<<<<<< HEAD
            </TableCell>
            <TableCell>
              { data.ens_info.names_count > 1 ?
                <chakra.span color="text.secondary"> ({ data.ens_info.names_count > 39 ? '40+' : `+${ data.ens_info.names_count - 1 }` })</chakra.span> :
                <chakra.span color="text.secondary">{ expiresText }</chakra.span> }
            </TableCell>
=======
            </Td>
            <Td>
              { data.ens_info.names_count > 1 ? (
                <chakra.span color="text_secondary">
                  { ' ' }
                  (
                  { data.ens_info.names_count > 39 ?
                    '40+' :
                    `+${ data.ens_info.names_count - 1 }` }
                  )
                </chakra.span>
              ) : (
                <chakra.span color="text_secondary">{ expiresText }</chakra.span>
              ) }
            </Td>
>>>>>>> new-version
          </>
        );
      }
    }
  })();

  const category = getItemCategory(data);

  return (
    <TableRow>
      { content }
<<<<<<< HEAD
      <TableCell fontSize="sm" textTransform="capitalize" verticalAlign="middle">
        <Skeleton loading={ isLoading } color="text.secondary" display="inline-block">
=======
      <Td fontSize="sm" textTransform="capitalize" verticalAlign="middle">
        <Skeleton
          isLoaded={ !isLoading }
          color="text_secondary"
          display="inline-block"
        >
>>>>>>> new-version
          <span>{ category ? searchItemTitles[category].itemTitle : '' }</span>
        </Skeleton>
      </TableCell>
    </TableRow>
  );
};

export default React.memo(SearchResultTableItem);
