import React from 'react';

import dayjs from 'lib/date/dayjs';
import { Skeleton } from 'toolkit/chakra/skeleton';
import IconSvg from 'ui/shared/IconSvg';
import TextSeparator from 'ui/shared/TextSeparator';

type Props = {
  // should be string, will be fixed on the back-end
  timestamp: string | number;
  isLoading?: boolean;
};

const DetailedInfoTimestamp = ({ timestamp, isLoading }: Props) => {
  return (
    <>
<<<<<<< HEAD:ui/shared/DetailedInfo/DetailedInfoTimestamp.tsx
      <IconSvg name="clock" boxSize={ 5 } color="gray.500" isLoading={ isLoading }/>
      <Skeleton loading={ isLoading } ml={ 2 }>
        { dayjs(timestamp).fromNow() }
      </Skeleton>
      <TextSeparator color="gray.500"/>
      <Skeleton loading={ isLoading } whiteSpace="normal">
        { dayjs(timestamp).format('llll') }
=======
      <IconSvg
        name="clock"
        boxSize={ 5 }
        color="gray.500"
        isLoading={ isLoading }
      />
      <Skeleton isLoaded={ !isLoading } ml={ 2 }>
        { dayjs(timestamp).fromNow() }
      </Skeleton>
      <TextSeparator color="gray.500"/>
      <Skeleton isLoaded={ !isLoading } whiteSpace="normal">
        { dayjs(timestamp).format('DD/MM/YYYY') }
>>>>>>> new-version:ui/shared/DetailsTimestamp.tsx
      </Skeleton>
    </>
  );
};

export default DetailedInfoTimestamp;
