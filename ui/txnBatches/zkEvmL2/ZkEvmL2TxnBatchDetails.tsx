import { Grid, Text } from '@chakra-ui/react';
import type { UseQueryResult } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';

import { ZKEVM_L2_TX_BATCH_STATUSES } from 'types/api/zkEvmL2';
import type { ZkEvmL2TxnBatch } from 'types/api/zkEvmL2';

import { route } from 'nextjs-routes';

import type { ResourceError } from 'lib/api/resources';
import throwOnResourceLoadError from 'lib/errors/throwOnResourceLoadError';
import { Link } from 'toolkit/chakra/link';
import { Skeleton } from 'toolkit/chakra/skeleton';
import isCustomAppError from 'ui/shared/AppError/isCustomAppError';
import CopyToClipboard from 'ui/shared/CopyToClipboard';
import DataFetchAlert from 'ui/shared/DataFetchAlert';
import * as DetailedInfo from 'ui/shared/DetailedInfo/DetailedInfo';
import DetailedInfoTimestamp from 'ui/shared/DetailedInfo/DetailedInfoTimestamp';
import TxEntityL1 from 'ui/shared/entities/tx/TxEntityL1';
import HashStringShortenDynamic from 'ui/shared/HashStringShortenDynamic';
import PrevNext from 'ui/shared/PrevNext';
import VerificationSteps from 'ui/shared/verificationSteps/VerificationSteps';

interface Props {
  query: UseQueryResult<ZkEvmL2TxnBatch, ResourceError>;
}

const ZkEvmL2TxnBatchDetails = ({ query }: Props) => {
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
<<<<<<< HEAD
      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
      >
        Txn batch number
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        <Skeleton loading={ isPlaceholderData }>
          { data.number }
        </Skeleton>
=======
      <DetailsInfoItem.Label isLoading={ isPlaceholderData }>
        Txn batch number
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

<<<<<<< HEAD
      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
      >
        Status
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        <VerificationSteps steps={ ZKEVM_L2_TX_BATCH_STATUSES } currentStep={ data.status } isLoading={ isPlaceholderData }/>
      </DetailedInfo.ItemValue>

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
      >
        Timestamp
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        { data.timestamp ? <DetailedInfoTimestamp timestamp={ data.timestamp } isLoading={ isPlaceholderData }/> : 'Undefined' }
      </DetailedInfo.ItemValue>

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
      >
=======
      <DetailsInfoItem.Label isLoading={ isPlaceholderData }>
        Status
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value>
        <VerificationSteps
          steps={ ZKEVM_L2_TX_BATCH_STATUSES }
          currentStep={ data.status }
          isLoading={ isPlaceholderData }
        />
      </DetailsInfoItem.Value>

      <DetailsInfoItem.Label isLoading={ isPlaceholderData }>
        Timestamp
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value>
        { data.timestamp ? (
          <DetailsTimestamp
            timestamp={ data.timestamp }
            isLoading={ isPlaceholderData }
          />
        ) : (
          'Undefined'
        ) }
      </DetailsInfoItem.Value>

      <DetailsInfoItem.Label isLoading={ isPlaceholderData }>
>>>>>>> new-version
        Verify tx hash
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        { data.verify_transaction_hash ? (
          <TxEntityL1
            isLoading={ isPlaceholderData }
            hash={ data.verify_transaction_hash }
            maxW="100%"
          />
<<<<<<< HEAD
        ) : <Text>Pending</Text> }
      </DetailedInfo.ItemValue>

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
      >
        Transactions
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        <Skeleton loading={ isPlaceholderData }>
          <Link href={ route({ pathname: '/batches/[number]', query: { number: data.number.toString(), tab: 'txs' } }) }>
            { data.transactions.length } transaction{ data.transactions.length === 1 ? '' : 's' }
          </Link>
=======
        ) : (
          <Text>Pending</Text>
        ) }
      </DetailsInfoItem.Value>

      <DetailsInfoItem.Label isLoading={ isPlaceholderData }>
        Transactions
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value>
        <Skeleton isLoaded={ !isPlaceholderData }>
          <LinkInternal
            href={ route({
              pathname: '/batches/number',
              query: { number: data.number.toString(), tab: 'txs' },
            }) }
          >
            { data.transactions.length } transaction
            { data.transactions.length === 1 ? '' : 's' }
          </LinkInternal>
>>>>>>> new-version
        </Skeleton>
      </DetailedInfo.ItemValue>

      <DetailedInfo.ItemDivider/>

<<<<<<< HEAD
      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
      >
        Global exit root
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue
        flexWrap="nowrap"
      >
        <Skeleton loading={ isPlaceholderData } overflow="hidden">
          <HashStringShortenDynamic hash={ data.global_exit_root }/>
        </Skeleton>
        <CopyToClipboard text={ data.global_exit_root } isLoading={ isPlaceholderData }/>
      </DetailedInfo.ItemValue>

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
      >
        Acc input hash
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue
        flexWrap="nowrap"
      >
        <Skeleton loading={ isPlaceholderData } overflow="hidden">
          <HashStringShortenDynamic hash={ data.acc_input_hash }/>
        </Skeleton>
        <CopyToClipboard text={ data.acc_input_hash } isLoading={ isPlaceholderData }/>
      </DetailedInfo.ItemValue>

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
      >
=======
      <DetailsInfoItem.Label isLoading={ isPlaceholderData }>
        Global exit root
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value flexWrap="nowrap">
        <Skeleton isLoaded={ !isPlaceholderData } overflow="hidden">
          <HashStringShortenDynamic hash={ data.global_exit_root }/>
        </Skeleton>
        <CopyToClipboard
          text={ data.global_exit_root }
          isLoading={ isPlaceholderData }
        />
      </DetailsInfoItem.Value>

      <DetailsInfoItem.Label isLoading={ isPlaceholderData }>
        Acc input hash
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value flexWrap="nowrap">
        <Skeleton isLoaded={ !isPlaceholderData } overflow="hidden">
          <HashStringShortenDynamic hash={ data.acc_input_hash }/>
        </Skeleton>
        <CopyToClipboard
          text={ data.acc_input_hash }
          isLoading={ isPlaceholderData }
        />
      </DetailsInfoItem.Value>

      <DetailsInfoItem.Label isLoading={ isPlaceholderData }>
>>>>>>> new-version
        Sequence tx hash
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue>
        { data.sequence_transaction_hash ? (
          <TxEntityL1
            isLoading={ isPlaceholderData }
            hash={ data.sequence_transaction_hash }
            maxW="100%"
          />
<<<<<<< HEAD
        ) : <Text>Pending</Text> }
      </DetailedInfo.ItemValue>

      <DetailedInfo.ItemLabel
        isLoading={ isPlaceholderData }
      >
        State root
      </DetailedInfo.ItemLabel>
      <DetailedInfo.ItemValue
        flexWrap="nowrap"
      >
        <Skeleton loading={ isPlaceholderData } overflow="hidden">
=======
        ) : (
          <Text>Pending</Text>
        ) }
      </DetailsInfoItem.Value>

      <DetailsInfoItem.Label isLoading={ isPlaceholderData }>
        State root
      </DetailsInfoItem.Label>
      <DetailsInfoItem.Value flexWrap="nowrap">
        <Skeleton isLoaded={ !isPlaceholderData } overflow="hidden">
>>>>>>> new-version
          <HashStringShortenDynamic hash={ data.state_root }/>
        </Skeleton>
        <CopyToClipboard text={ data.state_root } isLoading={ isPlaceholderData }/>
      </DetailedInfo.ItemValue>
    </Grid>
  );
};

export default ZkEvmL2TxnBatchDetails;
