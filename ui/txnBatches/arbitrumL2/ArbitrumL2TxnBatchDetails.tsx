import { Grid, GridItem } from '@chakra-ui/react';
import type { UseQueryResult } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';

import type { ArbitrumL2TxnBatch } from 'types/api/arbitrumL2';

import { route } from 'nextjs-routes';

import type { ResourceError } from 'lib/api/resources';
import throwOnResourceLoadError from 'lib/errors/throwOnResourceLoadError';
import { CollapsibleDetails } from 'toolkit/chakra/collapsible';
import { Link } from 'toolkit/chakra/link';
import { Skeleton } from 'toolkit/chakra/skeleton';
import isCustomAppError from 'ui/shared/AppError/isCustomAppError';
import ArbitrumL2TxnBatchDA from 'ui/shared/batch/ArbitrumL2TxnBatchDA';
import CopyToClipboard from 'ui/shared/CopyToClipboard';
import DataFetchAlert from 'ui/shared/DataFetchAlert';
import * as DetailedInfo from 'ui/shared/DetailedInfo/DetailedInfo';
import DetailedInfoTimestamp from 'ui/shared/DetailedInfo/DetailedInfoTimestamp';
import BlockEntityL1 from 'ui/shared/entities/block/BlockEntityL1';
import TxEntityL1 from 'ui/shared/entities/tx/TxEntityL1';
import HashStringShortenDynamic from 'ui/shared/HashStringShortenDynamic';
import PrevNext from 'ui/shared/PrevNext';

import ArbitrumL2TxnBatchDetailsAnyTrustDA from './ArbitrumL2TxnBatchDetailsAnyTrustDA';
import ArbitrumL2TxnBatchDetailsCelestiaDA from './ArbitrumL2TxnBatchDetailsCelestiaDA';

interface Props {
  query: UseQueryResult<ArbitrumL2TxnBatch, ResourceError>;
}

const ArbitrumL2TxnBatchDetails = ({ query }: Props) => {
  const router = useRouter();

  const { data, isPlaceholderData, isError, error } = query;

  const handlePrevNextClick = React.useCallback(
    (direction: 'prev' | 'next') => {
      if (!data) {
        return;
      }

      const increment = direction === 'next' ? +1 : -1;
      const nextId = String(data.number + increment);

      router.push(
        { pathname: '/batches/number', query: { number: nextId } },
        undefined,
      );
    },
    [ data, router ],
  );

  if (isError) {
    if (isCustomAppError(error)) {
      throwOnResourceLoadError({ isError, error });
    }

    return <DataFetchAlert/>;
  }

  if (!data) {
    return null;
  }

  const blocksCount = data.end_block_number - data.start_block_number + 1;

  return (
    <Grid
      columnGap={ 8 }
      rowGap={{ base: 3, lg: 3 }}
      templateColumns={{
        base: 'minmax(0, 1fr)',
        lg: 'minmax(min-content, 200px) minmax(0, 1fr)',
      }}
      overflow="hidden"
    >
      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
        hint="Batch number indicates the length of batches produced by grouping L2 blocks to be proven on L1"
      >
        Txn batch number
<<<<<<< HEAD
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        <Skeleton loading={ isPlaceholderData }>
          { data.number }
        </Skeleton>
=======
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value>
        <Skeleton isLoaded={ !isPlaceholderData }>{ data.number }</Skeleton>
>>>>>>> new-version
        <PrevNext
          ml={ 6 }
          onClick={ handlePrevNextClick }
          prevLabel="View previous txn batch"
          nextLabel="View next txn batch"
          isPrevDisabled={ data.number === 0 }
          isLoading={ isPlaceholderData }
        />
      </DetailedInfo.ItemValue>

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
        hint="Date and time at which batch is submitted to L1"
      >
        Timestamp
<<<<<<< HEAD
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        { data.commitment_transaction.timestamp ?
          <DetailedInfoTimestamp timestamp={ data.commitment_transaction.timestamp }isLoading={ isPlaceholderData }/> :
          'Undefined'
        }
      </DetailedInfo.ItemValue>
=======
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value>
        { data.commitment_transaction.timestamp ? (
          <DetailsTimestamp
            timestamp={ data.commitment_transaction.timestamp }
            isLoading={ isPlaceholderData }
          />
        ) : (
          'Undefined'
        ) }
      </DetailsInfoItem.Value>
>>>>>>> new-version

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
        hint="Number of transactions in this batch"
      >
        Transactions
<<<<<<< HEAD
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        <Link loading={ isPlaceholderData } href={ route({ pathname: '/batches/[number]', query: { number: data.number.toString(), tab: 'txs' } }) }>
          { data.transactions_count.toLocaleString() } transaction{ data.transactions_count === 1 ? '' : 's' }
        </Link>
      </DetailedInfo.ItemValue>
=======
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value>
        <Skeleton isLoaded={ !isPlaceholderData }>
          <LinkInternal
            href={ route({
              pathname: '/batches/number',
              query: { number: data.number.toString(), tab: 'txs' },
            }) }
          >
            { data.transactions_count.toLocaleString() } transaction
            { data.transactions_count === 1 ? '' : 's' }
          </LinkInternal>
        </Skeleton>
      </DetailsInfoItem.Value>
>>>>>>> new-version

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
        hint="Number of L2 blocks in this batch"
      >
        Blocks
<<<<<<< HEAD
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        <Link loading={ isPlaceholderData } href={ route({ pathname: '/batches/[number]', query: { number: data.number.toString(), tab: 'blocks' } }) }>
          { blocksCount.toLocaleString() } block{ blocksCount === 1 ? '' : 's' }
        </Link>
      </DetailedInfo.ItemValue>
=======
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value>
        <Skeleton isLoaded={ !isPlaceholderData }>
          <LinkInternal
            href={ route({
              pathname: '/batches/number',
              query: { number: data.number.toString(), tab: 'blocks' },
            }) }
          >
            { blocksCount.toLocaleString() } block{ blocksCount === 1 ? '' : 's' }
          </LinkInternal>
        </Skeleton>
      </DetailsInfoItem.Value>
>>>>>>> new-version

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
        hint="Hash of L1 transaction in which transactions was committed"
      >
        L1 transaction hash
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        <TxEntityL1
          isLoading={ isPlaceholderData }
          hash={ data.commitment_transaction.hash }
          maxW="100%"
        />
      </DetailedInfo.ItemValue>

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
        hint="Heigh of L1 block which includes L1 transactions"
      >
        L1 block
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        <BlockEntityL1
          isLoading={ isPlaceholderData }
          number={ data.commitment_transaction.block_number }
        />
      </DetailedInfo.ItemValue>

      { data.data_availability.batch_data_container && (
        <>
          <DetailedInfo.ItemLabel
            isLoading={ isPlaceholderData }
            hint="Where the batch data is stored"
          >
            Batch data container
<<<<<<< HEAD
          </DetailedInfo.ItemLabel><DetailedInfo.ItemValue>
            <ArbitrumL2TxnBatchDA dataContainer={ data.data_availability.batch_data_container } isLoading={ isPlaceholderData }/>
          </DetailedInfo.ItemValue>
=======
          </DetailsInfoItem.Label>
          <DetailsInfoItem.Value>
            <ArbitrumL2TxnBatchDA
              dataContainer={ data.data_availability.batch_data_container }
              isLoading={ isPlaceholderData }
            />
          </DetailsInfoItem.Value>
>>>>>>> new-version
        </>
      ) }

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
        hint="The hash of the state before the batch"
      >
        Before acc
<<<<<<< HEAD
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue flexWrap="nowrap" >
        <Skeleton loading={ isPlaceholderData } overflow="hidden">
          <HashStringShortenDynamic hash={ data.before_acc_hash }/>
=======
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value flexWrap="nowrap">
        <Skeleton isLoaded={ !isPlaceholderData } overflow="hidden">
          <HashStringShortenDynamic hash={ data.before_acc }/>
>>>>>>> new-version
        </Skeleton>
        <CopyToClipboard text={ data.before_acc_hash } isLoading={ isPlaceholderData }/>
      </DetailedInfo.ItemValue>

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
        hint="The hash of the state after the batch"
      >
        After acc
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue flexWrap="nowrap">
        <Skeleton loading={ isPlaceholderData } overflow="hidden">
          <HashStringShortenDynamic hash={ data.after_acc_hash }/>
        </Skeleton>
        <CopyToClipboard text={ data.after_acc_hash } isLoading={ isPlaceholderData }/>
      </DetailedInfo.ItemValue>

<<<<<<< HEAD
      { (data.data_availability.batch_data_container === 'in_anytrust' || data.data_availability.batch_data_container === 'in_celestia') && (
        <CollapsibleDetails
          loading={ isPlaceholderData }
          mt={ 6 }
          gridColumn={{ base: undefined, lg: '1 / 3' }}
          text={ [ 'Show data availability info', 'Hide data availability info' ] }
        >
          <GridItem colSpan={{ base: undefined, lg: 2 }} mt={{ base: 1, lg: 4 }}/>

          { data.data_availability.batch_data_container === 'in_anytrust' && (
            <ArbitrumL2TxnBatchDetailsAnyTrustDA data={ data.data_availability }/>
=======
      { (data.data_availability.batch_data_container === 'in_anytrust' ||
        data.data_availability.batch_data_container === 'in_celestia') && (
        <>
          { /* CUT */ }
          <GridItem colSpan={{ base: undefined, lg: 2 }}>
            <Element name="BatchDetails__cutLink">
              <Skeleton
                isLoaded={ !isPlaceholderData }
                mt={ 6 }
                display="inline-block"
              >
                <Link
                  fontSize="sm"
                  textDecorationLine="underline"
                  textDecorationStyle="dashed"
                  onClick={ handleCutClick }
                >
                  { isExpanded ?
                    'Hide data availability info' :
                    'Show data availability info' }
                </Link>
              </Skeleton>
            </Element>
          </GridItem>

          { /* ADDITIONAL INFO */ }
          { isExpanded && !isPlaceholderData && (
            <>
              <GridItem
                colSpan={{ base: undefined, lg: 2 }}
                mt={{ base: 1, lg: 4 }}
              />

              { data.data_availability.batch_data_container ===
                'in_anytrust' && (
                <ArbitrumL2TxnBatchDetailsAnyTrustDA
                  data={ data.data_availability }
                />
              ) }
              { data.data_availability.batch_data_container ===
                'in_celestia' && (
                <ArbitrumL2TxnBatchDetailsCelestiaDA
                  data={ data.data_availability }
                />
              ) }
            </>
>>>>>>> new-version
          ) }
          { data.data_availability.batch_data_container === 'in_celestia' && (
            <ArbitrumL2TxnBatchDetailsCelestiaDA data={ data.data_availability }/>
          ) }
        </CollapsibleDetails>
      ) }
    </Grid>
  );
};

export default ArbitrumL2TxnBatchDetails;
