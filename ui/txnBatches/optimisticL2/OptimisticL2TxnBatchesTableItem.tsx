import React from 'react';

import type { OptimisticL2TxnBatchesItem } from 'types/api/optimisticL2';

import { route } from 'nextjs-routes';

import config from 'configs/app';
import { Link } from 'toolkit/chakra/link';
import { Skeleton } from 'toolkit/chakra/skeleton';
import { TableCell, TableRow } from 'toolkit/chakra/table';
import OptimisticL2TxnBatchDA from 'ui/shared/batch/OptimisticL2TxnBatchDA';
import BatchEntityL2 from 'ui/shared/entities/block/BatchEntityL2';
import TimeAgoWithTooltip from 'ui/shared/TimeAgoWithTooltip';

const rollupFeature = config.features.rollup;

type Props = { item: OptimisticL2TxnBatchesItem; isLoading?: boolean };

const OptimisticL2TxnBatchesTableItem = ({ item, isLoading }: Props) => {
  if (!rollupFeature.isEnabled || rollupFeature.type !== 'optimistic') {
    return null;
  }

  return (
<<<<<<< HEAD
    <TableRow>
      <TableCell verticalAlign="middle">
        <BatchEntityL2 number={ item.number } isLoading={ isLoading }/>
      </TableCell>
      <TableCell verticalAlign="middle">
        { item.batch_data_container ? <OptimisticL2TxnBatchDA container={ item.batch_data_container } isLoading={ isLoading }/> : '-' }
      </TableCell>
      <TableCell verticalAlign="middle">
=======
    <Tr>
      <Td verticalAlign="middle">
        <BatchEntityL2 number={ item.internal_id } isLoading={ isLoading }/>
      </Td>
      <Td verticalAlign="middle">
        { item.batch_data_container ? (
          <OptimisticL2TxnBatchDA
            container={ item.batch_data_container }
            isLoading={ isLoading }
          />
        ) : (
          '-'
        ) }
      </Td>
      <Td verticalAlign="middle">
>>>>>>> new-version
        <TimeAgoWithTooltip
          timestamp={ item.l1_timestamp }
          isLoading={ isLoading }
          display="inline-block"
          color="text.secondary"
          my={ 1 }
        />
      </TableCell>
      <TableCell verticalAlign="middle" isNumeric>
        <Skeleton loading={ isLoading } minW="40px" display="inline-block">
          { item.l1_transaction_hashes.length }
        </Skeleton>
<<<<<<< HEAD
      </TableCell>
      <TableCell verticalAlign="middle" isNumeric>
        <Link
          href={ route({ pathname: '/batches/[number]', query: { number: item.number.toString(), tab: 'blocks' } }) }
          loading={ isLoading }
=======
      </Td>
      <Td verticalAlign="middle" isNumeric>
        <LinkInternal
          href={ route({
            pathname: '/batches/number',
            query: { number: item.internal_id.toString(), tab: 'blocks' },
          }) }
          isLoading={ isLoading }
>>>>>>> new-version
          justifyContent="flex-end"
          minW="40px"
        >
<<<<<<< HEAD
          { item.l2_end_block_number - item.l2_start_block_number + 1 }
        </Link>
      </TableCell>
      <TableCell verticalAlign="middle" isNumeric>
        <Link
          href={ route({ pathname: '/batches/[number]', query: { number: item.number.toString(), tab: 'txs' } }) }
          loading={ isLoading }
=======
          <Skeleton isLoaded={ !isLoading } minW="40px" display="inline-block">
            { item.l2_block_end - item.l2_block_start + 1 }
          </Skeleton>
        </LinkInternal>
      </Td>
      <Td verticalAlign="middle" isNumeric>
        <LinkInternal
          href={ route({
            pathname: '/batches/number',
            query: { number: item.internal_id.toString(), tab: 'txs' },
          }) }
          isLoading={ isLoading }
>>>>>>> new-version
          justifyContent="flex-end"
          minW="40px"
        >
          { item.transactions_count }
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default OptimisticL2TxnBatchesTableItem;
