<<<<<<< HEAD
import { Flex } from '@chakra-ui/react';
=======
import {
  Tr,
  Td,
  Flex,
  Box,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
>>>>>>> new-version
import BigNumber from 'bignumber.js';
import React from 'react';

import type { Block } from 'types/api/block';

import { route } from 'nextjs-routes';

import config from 'configs/app';
import getBlockTotalReward from 'lib/block/getBlockTotalReward';
import { Link } from 'toolkit/chakra/link';
import { Skeleton } from 'toolkit/chakra/skeleton';
import { TableCell, TableRow } from 'toolkit/chakra/table';
import { Tooltip } from 'toolkit/chakra/tooltip';
import { WEI } from 'toolkit/utils/consts';
import BlockGasUsed from 'ui/shared/block/BlockGasUsed';
import AddressEntity from 'ui/shared/entities/address/AddressEntity';
import BlockEntity from 'ui/shared/entities/block/BlockEntity';
import IconSvg from 'ui/shared/IconSvg';
import TimeAgoWithTooltip from 'ui/shared/TimeAgoWithTooltip';
import Utilization from 'ui/shared/Utilization/Utilization';

import { getBaseFeeValue } from './utils';

interface Props {
  data: Block;
  isLoading?: boolean;
  animation?: string;
  enableTimeIncrement?: boolean;
}

const isRollup = config.features.rollup.isEnabled;

const BlocksTableItem = ({ data, isLoading, enableTimeIncrement, animation }: Props) => {
  const totalReward = getBlockTotalReward(data);
  const burntFees = BigNumber(data.burnt_fees || 0);
  const txFees = BigNumber(data.transaction_fees || 0);
  const baseFeeValue = getBaseFeeValue(data.base_fee_per_gas);

  return (
    <TableRow animation={ animation }>
      <TableCell >
        <Flex columnGap={ 2 } alignItems="center" mb={ 2 }>
          { data.celo?.is_epoch_block && (
<<<<<<< HEAD
            <Tooltip content={ `Finalized epoch #${ data.celo.epoch_number }` }>
              <IconSvg name="checkered_flag" boxSize={ 5 } p="1px" isLoading={ isLoading } flexShrink={ 0 }/>
            </Tooltip>
          ) }
          <Tooltip disabled={ data.type !== 'reorg' } content="Chain reorganizations">
            <span>
              <BlockEntity
                isLoading={ isLoading }
                number={ data.height }
                hash={ data.type !== 'block' ? data.hash : undefined }
                noIcon
                fontWeight={ 600 }
              />
            </span>
=======
            <Tooltip label={ `Finalized epoch #${ data.celo.epoch_number }` }>
              <IconSvg
                name="checkered_flag"
                boxSize={ 5 }
                p="1px"
                isLoading={ isLoading }
                flexShrink={ 0 }
              />
            </Tooltip>
          ) }
          <Tooltip
            isDisabled={ data.type !== 'reorg' }
            label="Chain reorganizations"
          >
            <BlockEntity
              isLoading={ isLoading }
              number={ data.height }
              hash={ data.type !== 'block' ? data.hash : undefined }
              noIcon
              fontSize="sm"
              lineHeight={ 5 }
              fontWeight={ 600 }
            />
>>>>>>> new-version
          </Tooltip>
        </Flex>
        <TimeAgoWithTooltip
          timestamp={ data.timestamp }
          enableIncrement={ enableTimeIncrement }
          isLoading={ isLoading }
          color="text.secondary"
          fontWeight={ 400 }
          display="inline-block"
        />
      </TableCell>
      <TableCell >
        <Skeleton loading={ isLoading } display="inline-block">
          { data.size.toLocaleString() }
        </Skeleton>
      </TableCell>
      { !config.UI.views.block.hiddenFields?.miner && (
        <TableCell >
          <AddressEntity
            address={ data.miner }
            isLoading={ isLoading }
            truncation="constant"
            maxW="min-content"
          />
        </TableCell>
      ) }
<<<<<<< HEAD
      <TableCell isNumeric >
        { data.transactions_count > 0 ? (
          <Skeleton loading={ isLoading } display="inline-block">
            <Link href={ route({
              pathname: '/block/[height_or_hash]',
              query: { height_or_hash: String(data.height), tab: 'txs' },
            }) }>
              { data.transactions_count }
            </Link>
          </Skeleton>
        ) : data.transactions_count }
      </TableCell>
      <TableCell >
        <Skeleton loading={ isLoading } display="inline-block">{ BigNumber(data.gas_used || 0).toFormat() }</Skeleton>
=======
      <Td isNumeric fontSize="sm">
        { data.transaction_count > 0 ? (
          <Skeleton isLoaded={ !isLoading } display="inline-block">
            <LinkInternal
              href={ route({
                pathname: '/block',
                query: { height_or_hash: String(data.height), tab: 'txs' },
              }) }
            >
              { data.transaction_count }
            </LinkInternal>
          </Skeleton>
        ) : (
          data.transaction_count
        ) }
      </Td>
      <Td fontSize="sm">
        <Skeleton isLoaded={ !isLoading } display="inline-block">
          { BigNumber(data.gas_used || 0).toFormat() }
        </Skeleton>
>>>>>>> new-version
        <Flex mt={ 2 }>
          <BlockGasUsed
            gasUsed={ data.gas_used || undefined }
            gasLimit={ data.gas_limit }
            isLoading={ isLoading }
            gasTarget={ data.gas_target_percentage || undefined }
          />
        </Flex>
      </TableCell>
      { !isRollup && !config.UI.views.block.hiddenFields?.total_reward && (
        <TableCell >
          <Skeleton loading={ isLoading } display="inline-block">
            { totalReward.toFixed(8) }
          </Skeleton>
        </TableCell>
      ) }
      { !isRollup && !config.UI.views.block.hiddenFields?.burnt_fees && (
        <TableCell >
          <Flex alignItems="center" columnGap={ 2 }>
<<<<<<< HEAD
            <IconSvg name="flame" boxSize={ 5 } color={{ _light: 'gray.500', _dark: 'inherit' }} isLoading={ isLoading }/>
            <Skeleton loading={ isLoading } display="inline-block">
              { burntFees.dividedBy(WEI).toFixed(8) }
            </Skeleton>
          </Flex>
          <Tooltip content="Burnt fees / Txn fees * 100%" disabled={ isLoading }>
            <Utilization mt={ 2 } w="min-content" value={ burntFees.div(txFees).toNumber() } isLoading={ isLoading }/>
=======
            <IconSvg
              name="flame"
              boxSize={ 5 }
              color={ burntFeesIconColor }
              isLoading={ isLoading }
            />
            <Skeleton isLoaded={ !isLoading } display="inline-block">
              { burntFees.dividedBy(WEI).toFixed(8) }
            </Skeleton>
          </Flex>
          <Tooltip
            label={ isLoading ? undefined : 'Burnt fees / Txn fees * 100%' }
          >
            <Box w="min-content">
              <Utilization
                mt={ 2 }
                value={ burntFees.div(txFees).toNumber() }
                isLoading={ isLoading }
              />
            </Box>
>>>>>>> new-version
          </Tooltip>
        </TableCell>
      ) }
<<<<<<< HEAD
      { !isRollup && !config.UI.views.block.hiddenFields?.base_fee && Boolean(baseFeeValue) && (
        <TableCell isNumeric>
          <Skeleton loading={ isLoading } display="inline-block" whiteSpace="pre-wrap" wordBreak="break-word">
=======
      { !isRollup &&
        !config.UI.views.block.hiddenFields?.base_fee &&
        Boolean(baseFeeValue) && (
        <Td fontSize="sm" isNumeric>
          <Skeleton
            isLoaded={ !isLoading }
            display="inline-block"
            whiteSpace="pre-wrap"
            wordBreak="break-word"
          >
>>>>>>> new-version
            { baseFeeValue }
          </Skeleton>
        </TableCell>
      ) }
    </TableRow>
  );
};

export default React.memo(BlocksTableItem);
