import { chakra } from '@chakra-ui/react';
import React from 'react';

import dayjs from 'lib/date/dayjs';
import useTimeAgoIncrement from 'lib/hooks/useTimeAgoIncrement';
import { Skeleton } from 'toolkit/chakra/skeleton';
import { Tooltip } from 'toolkit/chakra/tooltip';

type Props = {
  timestamp: string | number | null;
  fallbackText?: string;
  isLoading?: boolean;
  enableIncrement?: boolean;
  className?: string;
};

const TimeAgoWithTooltip = ({
  timestamp,
  fallbackText,
  isLoading,
  enableIncrement,
  className,
}: Props) => {
  const timeAgo = useTimeAgoIncrement(timestamp, enableIncrement && !isLoading);
  if (!timestamp && !fallbackText) {
    return null;
  }

<<<<<<< HEAD
  const content = timestamp ?
    <Tooltip content={ dayjs(timestamp).format('llll') }><span>{ timeAgo }</span></Tooltip> :
    <span>{ fallbackText }</span>;
=======
  const content = timestamp ? (
    <Tooltip label={ dayjs(timestamp).format('DD/MM/YYYY') }>
      <span>{ timeAgo }</span>
    </Tooltip>
  ) : (
    <span>{ fallbackText }</span>
  );
>>>>>>> new-version

  return (
    <Skeleton loading={ isLoading } className={ className }>
      { content }
    </Skeleton>
  );
};

export default chakra(TimeAgoWithTooltip);
