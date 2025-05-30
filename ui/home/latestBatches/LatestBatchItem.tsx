import { Box, Flex } from '@chakra-ui/react';
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
>>>>>>> new-version
import React from 'react';

import { route } from 'nextjs-routes';

import { Link } from 'toolkit/chakra/link';
import { Skeleton } from 'toolkit/chakra/skeleton';
import BatchEntityL2 from 'ui/shared/entities/block/BatchEntityL2';
import TimeAgoWithTooltip from 'ui/shared/TimeAgoWithTooltip';

type Props = {
  number: number;
  timestamp: string | null;
  txCount: number;
  status?: React.ReactNode;
  isLoading: boolean;
  animation?: string;
};

<<<<<<< HEAD
const LatestBatchItem = ({ number, timestamp, txCount, status, isLoading, animation }: Props) => {
=======
const LatestBatchItem = ({
  number,
  timestamp,
  txCount,
  status,
  isLoading,
}: Props) => {
>>>>>>> new-version
  return (
    <Box
      animation={ animation }
      borderRadius="md"
      border="1px solid"
      borderColor="border.divider"
      p={ 3 }
    >
      <Flex alignItems="center" overflow="hidden" w="100%" mb={ 3 }>
        <BatchEntityL2
          isLoading={ isLoading }
          number={ number }
          tailLength={ 2 }
          textStyle="xl"
          fontWeight={ 500 }
          mr="auto"
        />
        <TimeAgoWithTooltip
          timestamp={ timestamp }
          enableIncrement={ !isLoading }
          isLoading={ isLoading }
          color="text.secondary"
          display="inline-block"
          textStyle="sm"
          flexShrink={ 0 }
          ml={ 2 }
        />
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        flexWrap="wrap"
      >
        <Flex alignItems="center">
<<<<<<< HEAD
          <Skeleton loading={ isLoading } mr={ 2 }>Txn</Skeleton>
          <Link
            href={ route({ pathname: '/batches/[number]', query: { number: number.toString(), tab: 'txs' } }) }
            loading={ isLoading }
          >
            { txCount }
          </Link>
=======
          <Skeleton isLoaded={ !isLoading } mr={ 2 }>
            Txn
          </Skeleton>
          <LinkInternal
            href={ route({
              pathname: '/batches/number',
              query: { number: number.toString(), tab: 'txs' },
            }) }
            isLoading={ isLoading }
          >
            <Skeleton isLoaded={ !isLoading }>{ txCount }</Skeleton>
          </LinkInternal>
>>>>>>> new-version
        </Flex>
        { status }
      </Flex>
    </Box>
  );
};

export default LatestBatchItem;
