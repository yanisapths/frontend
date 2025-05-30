import { Grid } from '@chakra-ui/react';
import type { UseQueryResult } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';

import type { OptimismL2TxnBatch } from 'types/api/optimisticL2';

import { route } from 'nextjs-routes';

import type { ResourceError } from 'lib/api/resources';
import throwOnResourceLoadError from 'lib/errors/throwOnResourceLoadError';
import { Link } from 'toolkit/chakra/link';
import { Skeleton } from 'toolkit/chakra/skeleton';
import isCustomAppError from 'ui/shared/AppError/isCustomAppError';
import OptimisticL2TxnBatchDA from 'ui/shared/batch/OptimisticL2TxnBatchDA';
import DataFetchAlert from 'ui/shared/DataFetchAlert';
import * as DetailedInfo from 'ui/shared/DetailedInfo/DetailedInfo';
import DetailedInfoTimestamp from 'ui/shared/DetailedInfo/DetailedInfoTimestamp';
import PrevNext from 'ui/shared/PrevNext';

import OptimisticL2TxnBatchBlobCallData from './OptimisticL2TxnBatchBlobCallData';
import OptimisticL2TxnBatchBlobCelestia from './OptimisticL2TxnBatchBlobCelestia';
import OptimisticL2TxnBatchBlobEip4844 from './OptimisticL2TxnBatchBlobEip4844';

interface Props {
  query: UseQueryResult<OptimismL2TxnBatch, ResourceError>;
}

const OptimisticL2TxnBatchDetails = ({ query }: Props) => {
  const router = useRouter();

  const { data, isError, error, isPlaceholderData } = query;

  const handlePrevNextClick = React.useCallback(
    (direction: 'prev' | 'next') => {
      if (!data) {
        return;
      }

<<<<<<< HEAD
    const increment = direction === 'next' ? +1 : -1;
    const nextId = String(data.number + increment);
=======
      const increment = direction === 'next' ? +1 : -1;
      const nextId = String(data.internal_id + increment);
>>>>>>> new-version

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

  const blocksCount = data.l2_end_block_number - data.l2_start_block_number + 1;

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
        hint="Batch ID indicates the length of batches produced by grouping L2 blocks to be proven on L1"
      >
        Batch ID
<<<<<<< HEAD
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        <Skeleton loading={ isPlaceholderData }>
          { data.number }
        </Skeleton>
=======
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value>
        <Skeleton isLoaded={ !isPlaceholderData }>{ data.internal_id }</Skeleton>
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
        { data.l1_timestamp ?
          <DetailedInfoTimestamp timestamp={ data.l1_timestamp }isLoading={ isPlaceholderData }/> :
          'Undefined'
        }
      </DetailedInfo.ItemValue>
=======
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value>
        { data.l1_timestamp ? (
          <DetailsTimestamp
            timestamp={ data.l1_timestamp }
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
        <Skeleton loading={ isPlaceholderData }>
          <Link href={ route({ pathname: '/batches/[number]', query: { number: data.number.toString(), tab: 'txs' } }) }>
            { data.transactions_count.toLocaleString() } transaction{ data.transactions_count === 1 ? '' : 's' }
          </Link>
          { ' ' }in this batch
=======
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value>
        <Skeleton isLoaded={ !isPlaceholderData }>
          <LinkInternal
            href={ route({
              pathname: '/batches/number',
              query: { number: data.internal_id.toString(), tab: 'txs' },
            }) }
          >
            { data.transaction_count.toLocaleString() } transaction
            { data.transaction_count === 1 ? '' : 's' }
          </LinkInternal>{ ' ' }
          in this batch
>>>>>>> new-version
        </Skeleton>
      </DetailedInfo.ItemValue>

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
        hint="Number of L2 blocks in this batch"
      >
        Blocks
<<<<<<< HEAD
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        <Skeleton loading={ isPlaceholderData }>
          <Link href={ route({ pathname: '/batches/[number]', query: { number: data.number.toString(), tab: 'blocks' } }) }>
            { blocksCount.toLocaleString() } block{ blocksCount === 1 ? '' : 's' }
          </Link>
          { ' ' }in this batch
=======
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value>
        <Skeleton isLoaded={ !isPlaceholderData }>
          <LinkInternal
            href={ route({
              pathname: '/batches/number',
              query: { number: data.internal_id.toString(), tab: 'blocks' },
            }) }
          >
            { blocksCount.toLocaleString() } block{ blocksCount === 1 ? '' : 's' }
          </LinkInternal>{ ' ' }
          in this batch
>>>>>>> new-version
        </Skeleton>
      </DetailedInfo.ItemValue>

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
        hint="Where the batch data is stored"
      >
        Batch data container
<<<<<<< HEAD
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue flexDir="column" alignItems="flex-start" rowGap={ 2 }>
        <OptimisticL2TxnBatchDA container={ data.batch_data_container } isLoading={ isPlaceholderData }/>
        { data.batch_data_container === 'in_blob4844' && data.blobs &&
          <OptimisticL2TxnBatchBlobEip4844 blobs={ data.blobs } isLoading={ isPlaceholderData }/> }
=======
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value
        flexDir="column"
        alignItems="flex-start"
        rowGap={ 2 }
      >
        <OptimisticL2TxnBatchDA
          container={ data.batch_data_container }
          isLoading={ isPlaceholderData }
        />
        { data.batch_data_container === 'in_blob4844' && data.blobs && (
          <OptimisticL2TxnBatchBlobEip4844
            blobs={ data.blobs }
            isLoading={ isPlaceholderData }
          />
        ) }
>>>>>>> new-version
        { data.batch_data_container === 'in_calldata' && (
          <OptimisticL2TxnBatchBlobCallData
            l1TxHashes={ data.l1_transaction_hashes }
            l1Timestamp={ data.l1_timestamp }
            isLoading={ isPlaceholderData }
          />
        ) }
<<<<<<< HEAD
        { data.batch_data_container === 'in_celestia' && data.blobs &&
          <OptimisticL2TxnBatchBlobCelestia blobs={ data.blobs } isLoading={ isPlaceholderData }/> }
      </DetailedInfo.ItemValue>
=======
        { data.batch_data_container === 'in_celestia' && data.blobs && (
          <OptimisticL2TxnBatchBlobCelestia
            blobs={ data.blobs }
            isLoading={ isPlaceholderData }
          />
        ) }
      </DetailsInfoItem.Value>
>>>>>>> new-version
    </Grid>
  );
};

export default OptimisticL2TxnBatchDetails;
