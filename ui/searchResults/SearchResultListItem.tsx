<<<<<<< HEAD
import { chakra, Flex, Grid, Box, Text } from '@chakra-ui/react';
=======
import {
  chakra,
  Flex,
  Grid,
  Image,
  Box,
  Text,
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
import ListItemMobile from 'ui/shared/ListItemMobile/ListItemMobile';
import type { SearchResultAppItem } from 'ui/shared/search/utils';
import { getItemCategory, searchItemTitles } from 'ui/shared/search/utils';

import SearchResultEntityTag from './SearchResultEntityTag';

interface Props {
  data: SearchResultItem | SearchResultAppItem;
  searchTerm: string;
  isLoading?: boolean;
  addressFormat?: AddressFormat;
}

const SearchResultListItem = ({
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

  const firstRow = (() => {
    switch (data.type) {
      case 'token': {
        const name = data.name + (data.symbol ? ` (${ data.symbol })` : '');

        return (
          <Flex alignItems="center" overflow="hidden">
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
              loading={ isLoading }
              onClick={ handleLinkClick }
              overflow="hidden"
            >
              <Skeleton
<<<<<<< HEAD
                loading={ isLoading }
                dangerouslySetInnerHTML={{ __html: highlightText(name, searchTerm) }}
=======
                isLoaded={ !isLoading }
                dangerouslySetInnerHTML={{
                  __html: highlightText(name, searchTerm),
                }}
>>>>>>> new-version
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              />
<<<<<<< HEAD
            </Link>
            { data.certified && <ContractCertifiedLabel iconSize={ 4 } boxSize={ 4 } ml={ 1 }/> }
            { data.is_verified_via_admin_panel && !data.certified && <IconSvg name="certified" boxSize={ 4 } ml={ 1 } color="green.500"/> }
=======
            </LinkInternal>
            { data.certified && (
              <ContractCertifiedLabel iconSize={ 4 } boxSize={ 4 } ml={ 1 }/>
            ) }
            { data.is_verified_via_admin_panel && !data.certified && (
              <IconSvg name="certified" boxSize={ 4 } ml={ 1 } color="green.500"/>
            ) }
>>>>>>> new-version
          </Flex>
        );
      }

      case 'metadata_tag':
      case 'contract':
      case 'address': {
        const shouldHighlightHash = ADDRESS_REGEXP.test(searchTerm);
<<<<<<< HEAD
        const hash = addressFormat === 'bech32' ? toBech32Address(data.address_hash) : data.address_hash;
=======
        const hash =
          addressFormat === 'bech32' ?
            toBech32Address(data.address) :
            data.address;
>>>>>>> new-version

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

        return (
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
        );
      }

      case 'label': {
        return (
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
        );
      }

      case 'block': {
        const shouldHighlightHash =
          data.block_hash.toLowerCase() === searchTerm.toLowerCase();
        const isFutureBlock = data.timestamp === undefined;
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
                fontSize="sm"
                fontWeight={ 700 }
                isLoading={ isLoading }
              />
            </BlockEntity.Link>
            { data.block_type === 'reorg' && !isLoading && (
              <Tag ml={ 2 }>Reorg</Tag>
            ) }
            { data.block_type === 'uncle' && !isLoading && (
              <Tag ml={ 2 }>Uncle</Tag>
            ) }
          </BlockEntity.Container>
        );
      }

      case 'transaction': {
        return (
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
        );
      }

      case 'blob': {
        return (
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
        );
      }

      case 'user_operation': {
        return (
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
        );
      }

      case 'ens_domain': {
        return (
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
<<<<<<< HEAD
              <Box
                dangerouslySetInnerHTML={{ __html: highlightText(data.ens_info.name, searchTerm) }}
=======
              <Skeleton
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
        );
      }
    }
  })();

  const secondRow = (() => {
    switch (data.type) {
      case 'token': {
        const templateCols = `1fr
<<<<<<< HEAD
        ${ (data.token_type === 'ERC-20' && data.exchange_rate) || (data.token_type !== 'ERC-20' && data.total_supply) ? ' auto' : '' }`;
        const hash = data.filecoin_robust_address || (addressFormat === 'bech32' ? toBech32Address(data.address_hash) : data.address_hash);

        return (
          <Grid templateColumns={ templateCols } alignItems="center" gap={ 2 }>
            <Skeleton loading={ isLoading } overflow="hidden" display="flex" alignItems="center">
=======
        ${
    (data.token_type === 'ERC-20' && data.exchange_rate) ||
          (data.token_type !== 'ERC-20' && data.total_supply) ?
      ' auto' :
      ''
    }`;
        const hash =
          data.filecoin_robust_address ||
          (addressFormat === 'bech32' ?
            toBech32Address(data.address) :
            data.address);

        return (
          <Grid templateColumns={ templateCols } alignItems="center" gap={ 2 }>
            <Skeleton
              isLoaded={ !isLoading }
              overflow="hidden"
              display="flex"
              alignItems="center"
            >
>>>>>>> new-version
              <Text whiteSpace="nowrap" overflow="hidden">
                <HashStringShortenDynamic hash={ hash } isTooltipDisabled/>
              </Text>
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
            <Skeleton loading={ isLoading } overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" fontWeight={ 700 }>
              { data.token_type === 'ERC-20' && data.exchange_rate && `$${ Number(data.exchange_rate).toLocaleString() }` }
              { data.token_type !== 'ERC-20' && data.total_supply && `Items ${ Number(data.total_supply).toLocaleString() }` }
=======
            <Skeleton
              isLoaded={ !isLoading }
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
            </Skeleton>
          </Grid>
        );
      }
      case 'block': {
        const shouldHighlightHash =
          data.block_hash.toLowerCase() === searchTerm.toLowerCase();
        const isFutureBlock = data.timestamp === undefined;

        if (isFutureBlock) {
<<<<<<< HEAD
          return <Skeleton loading={ isLoading }>Learn estimated time for this block to be created.</Skeleton>;
=======
          return (
            <Skeleton isLoaded={ !isLoading }>
              Learn estimated time for this block to be created.
            </Skeleton>
          );
>>>>>>> new-version
        }

        return (
          <>
<<<<<<< HEAD
            <Skeleton loading={ isLoading } display="block" whiteSpace="nowrap" overflow="hidden" mb={ 1 }>
              <HashStringShortenDynamic hash={ data.block_hash } as={ shouldHighlightHash ? 'mark' : 'span' }/>
=======
            <Skeleton
              isLoaded={ !isLoading }
              as={ shouldHighlightHash ? 'mark' : 'span' }
              display="block"
              whiteSpace="nowrap"
              overflow="hidden"
              mb={ 1 }
            >
              <HashStringShortenDynamic hash={ data.block_hash }/>
>>>>>>> new-version
            </Skeleton>
            <Skeleton loading={ isLoading } color="text.secondary" mr={ 2 }>
              <span>{ dayjs(data.timestamp).format('llll') }</span>
            </Skeleton>
          </>
        );
      }
      case 'transaction': {
        return (
<<<<<<< HEAD
          <Text color="text.secondary">{ dayjs(data.timestamp).format('llll') }</Text>
=======
          <Text variant="secondary">
            { dayjs(data.timestamp).format('llll') }
          </Text>
>>>>>>> new-version
        );
      }
      case 'user_operation': {
        return (
<<<<<<< HEAD
          <Text color="text.secondary">{ dayjs(data.timestamp).format('llll') }</Text>
        );
      }
      case 'label': {
        const hash = data.filecoin_robust_address || (addressFormat === 'bech32' ? toBech32Address(data.address_hash) : data.address_hash);
=======
          <Text variant="secondary">
            { dayjs(data.timestamp).format('llll') }
          </Text>
        );
      }
      case 'label': {
        const hash =
          data.filecoin_robust_address ||
          (addressFormat === 'bech32' ?
            toBech32Address(data.address) :
            data.address);
>>>>>>> new-version

        return (
          <Flex alignItems="center">
            <Box overflow="hidden">
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
        );
      }
      case 'app': {
        return (
          <Text lineClamp={ 3 }>
            { data.app.description }
          </Text>
        );
      }
      case 'metadata_tag':
      case 'contract':
      case 'address': {
        const shouldHighlightHash = ADDRESS_REGEXP.test(searchTerm);
        const addressName = data.name || data.ens_info?.name;
        const expiresText = data.ens_info?.expiry_date ?
          ` (expires ${ dayjs(data.ens_info.expiry_date).fromNow() })` :
          '';

        return addressName || data.type === 'metadata_tag' ? (
          <Flex
            alignItems="center"
            gap={ 2 }
            justifyContent="space-between"
            flexWrap="wrap"
          >
            { addressName && (
              <Flex alignItems="center">
                <Text
                  overflow="hidden"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                >
<<<<<<< HEAD
                  <span dangerouslySetInnerHTML={{ __html: shouldHighlightHash ? xss(addressName) : highlightText(addressName, searchTerm) }}/>
                  { data.ens_info && (
                    data.ens_info.names_count > 1 ?
                      <chakra.span color="text.secondary"> ({ data.ens_info.names_count > 39 ? '40+' : `+${ data.ens_info.names_count - 1 }` })</chakra.span> :
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
                        { ' ' }
                        (
                        { data.ens_info.names_count > 39 ?
                          '40+' :
                          `+${ data.ens_info.names_count - 1 }` }
                        )
                      </chakra.span>
                    ) : (
                      <chakra.span color="text_secondary">
                        { expiresText }
                      </chakra.span>
                    )) }
>>>>>>> new-version
                </Text>
                { data.certified && (
                  <ContractCertifiedLabel iconSize={ 4 } boxSize={ 4 } ml={ 1 }/>
                ) }
              </Flex>
            ) }
            { data.type === 'metadata_tag' && (
<<<<<<< HEAD
              <SearchResultEntityTag metadata={ data.metadata } searchTerm={ searchTerm }/>
=======
              // we show regular tag because we don't need all meta info here, but need to highlight search term
              <Tag display="flex" alignItems="center">
                <EntityTagIcon data={ data.metadata }/>
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlightText(data.metadata.name, searchTerm),
                  }}
                />
              </Tag>
>>>>>>> new-version
            ) }
          </Flex>
        ) : null;
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
          <Flex alignItems="center" gap={ 3 }>
            <Box overflow="hidden">
              <HashStringShortenDynamic hash={ hash }/>
            </Box>
<<<<<<< HEAD
            {
              data.ens_info.names_count > 1 ?
                <chakra.span color="text.secondary"> ({ data.ens_info.names_count > 39 ? '40+' : `+${ data.ens_info.names_count - 1 }` })</chakra.span> :
                <chakra.span color="text.secondary">{ expiresText }</chakra.span>
            }
=======
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
>>>>>>> new-version
          </Flex>
        );
      }

      default:
        return null;
    }
  })();

  const category = getItemCategory(data);

  return (
<<<<<<< HEAD
    <ListItemMobile py={ 3 } textStyle="sm" rowGap={ 2 }>
      <Grid templateColumns="1fr auto" w="100%" overflow="hidden">
        { firstRow }
        <Skeleton loading={ isLoading } color="text.secondary" ml={ 8 } textTransform="capitalize">
          <span>{ category ? searchItemTitles[category].itemTitleShort : '' }</span>
=======
    <ListItemMobile py={ 3 } fontSize="sm" rowGap={ 2 }>
      <Grid
        templateColumns="1fr auto"
        w="100%"
        overflow="hidden"
        lineHeight={ 6 }
      >
        { firstRow }
        <Skeleton
          isLoaded={ !isLoading }
          color="text_secondary"
          ml={ 8 }
          textTransform="capitalize"
        >
          <span>
            { category ? searchItemTitles[category].itemTitleShort : '' }
          </span>
>>>>>>> new-version
        </Skeleton>
      </Grid>
      { Boolean(secondRow) && (
        <Box
          w="100%"
          overflow="hidden"
          whiteSpace={ data.type !== 'app' ? 'nowrap' : undefined }
        >
          { secondRow }
        </Box>
      ) }
    </ListItemMobile>
  );
};

export default SearchResultListItem;
