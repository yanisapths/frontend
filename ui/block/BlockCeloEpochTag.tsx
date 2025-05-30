import React from 'react';

import { route } from 'nextjs-routes';

import config from 'configs/app';
import { Link } from 'toolkit/chakra/link';
import { Tag } from 'toolkit/chakra/tag';
import { Tooltip } from 'toolkit/chakra/tooltip';

import type { BlockQuery } from './useBlockQuery';

interface Props {
  blockQuery: BlockQuery;
}

const BlockCeloEpochTag = ({ blockQuery }: Props) => {
  if (!blockQuery.data?.celo) {
    return null;
  }

  if (!blockQuery.data.celo.is_epoch_block) {
    const celoConfig = config.features.celo;
<<<<<<< HEAD
    const epochBlockNumber = celoConfig.isEnabled && celoConfig.L2UpgradeBlock && blockQuery.data.height <= celoConfig.L2UpgradeBlock ?
      blockQuery.data.celo.epoch_number * celoConfig.BLOCKS_PER_EPOCH :
      undefined;
    const content = epochBlockNumber ? (
      <Link href={ route({ pathname: '/block/[height_or_hash]', query: { height_or_hash: String(epochBlockNumber) } }) }>
        <Tag variant="clickable">Epoch #{ blockQuery.data.celo.epoch_number }</Tag>
      </Link>
    ) : <Tag>Epoch #{ blockQuery.data.celo.epoch_number }</Tag>;
=======
    const epochBlockNumber =
      celoConfig.isEnabled &&
      celoConfig.L2UpgradeBlock &&
      blockQuery.data.height <= celoConfig.L2UpgradeBlock ?
        blockQuery.data.celo.epoch_number * celoConfig.BLOCKS_PER_EPOCH :
        undefined;
    const tag = (
      <Tag
        colorScheme={ epochBlockNumber ? 'gray-blue' : 'gray' }
        onClick={ epochBlockNumber ? undefined : onToggle }
        onMouseEnter={ onOpen }
        onMouseLeave={ onClose }
      >
        Epoch #{ blockQuery.data.celo.epoch_number }
      </Tag>
    );
    const content = epochBlockNumber ? (
      <LinkInternal
        href={ route({
          pathname: '/block',
          query: { height_or_hash: String(epochBlockNumber) },
        }) }
      >
        { tag }
      </LinkInternal>
    ) : (
      tag
    );
>>>>>>> new-version

    return (
      <Tooltip
        key="epoch-tag-before-finalized"
        content="Displays the epoch this block belongs to before the epoch is finalized"
      >
        { content }
      </Tooltip>
    );
  }

  return (
    <Tooltip
      key="epoch-tag"
      content="Displays the epoch finalized by this block"
    >
<<<<<<< HEAD
      <Tag bgColor="celo" color="blackAlpha.800" > Finalized epoch #{ blockQuery.data.celo.epoch_number } </Tag>
=======
      <Tag
        bgColor="celo"
        color="blackAlpha.800"
        onClick={ onToggle }
        onMouseEnter={ onOpen }
        onMouseLeave={ onClose }
      >
        Finalized epoch #{ blockQuery.data.celo.epoch_number }
      </Tag>
>>>>>>> new-version
    </Tooltip>
  );
};

export default React.memo(BlockCeloEpochTag);
