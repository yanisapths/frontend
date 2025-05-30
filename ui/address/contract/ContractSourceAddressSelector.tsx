import { chakra, createListCollection, Flex } from '@chakra-ui/react';
import React from 'react';

import { route } from 'nextjs-routes';

import { Select } from 'toolkit/chakra/select';
import { Skeleton } from 'toolkit/chakra/skeleton';
import CopyToClipboard from 'ui/shared/CopyToClipboard';
import AddressEntity from 'ui/shared/entities/address/AddressEntity';
import LinkNewTab from 'ui/shared/links/LinkNewTab';

export interface Item {
  address_hash: string;
  name?: string | null | undefined;
}

interface Props {
  className?: string;
  label: string;
  selectedItem: Item;
  onItemSelect: (item: Item) => void;
  items: Array<Item>;
  isLoading?: boolean;
}

<<<<<<< HEAD
const ContractSourceAddressSelector = ({ className, selectedItem, onItemSelect, items, isLoading, label }: Props) => {

  const handleItemSelect = React.useCallback(({ value }: { value: Array<string> }) => {
    const nextOption = items.find(({ address_hash: addressHash }) => addressHash === value[0]);
    if (nextOption) {
      onItemSelect(nextOption);
    }
  }, [ items, onItemSelect ]);

  const collection = React.useMemo(() => {
    const options = items.map(({ address_hash: addressHash, name }) => ({ label: name || addressHash, value: addressHash }));
    return createListCollection({ items: options });
  }, [ items ]);

  if (isLoading) {
    return <Skeleton loading h={ 6 } w={{ base: '300px', lg: '500px' }} className={ className }/>;
=======
const ContractSourceAddressSelector = ({
  className,
  selectedItem,
  onItemSelect,
  items,
  isLoading,
  label,
}: Props) => {
  const handleItemSelect = React.useCallback(
    (value: string) => {
      const nextOption = items.find(({ address }) => address === value);
      if (nextOption) {
        onItemSelect(nextOption);
      }
    },
    [ items, onItemSelect ],
  );

  const options = React.useMemo(() => {
    return items.map(({ address, name }) => ({
      label: name || address,
      value: address,
    }));
  }, [ items ]);

  if (isLoading) {
    return (
      <Skeleton
        h={ 6 }
        w={{ base: '300px', lg: '500px' }}
        className={ className }
      />
    );
>>>>>>> new-version
  }

  if (items.length === 0) {
    return null;
  }

  if (items.length === 1) {
    return (
      <Flex flexWrap="wrap" columnGap={ 3 } rowGap={ 2 } className={ className }>
        <chakra.span fontWeight={ 500 } fontSize="sm">
          { label }
        </chakra.span>
        <AddressEntity
<<<<<<< HEAD
          address={{ hash: items[0].address_hash, is_contract: true, is_verified: true }}
=======
          address={{
            hash: items[0].address,
            is_contract: true,
            is_verified: true,
          }}
>>>>>>> new-version
        />
      </Flex>
    );
  }

  return (
    <Flex columnGap={ 3 } rowGap={ 2 } alignItems="center" className={ className }>
      <chakra.span fontWeight={ 500 } fontSize="sm">
        { label }
      </chakra.span>
      <Select
        collection={ collection }
        placeholder="Select contract"
        defaultValue={ [ selectedItem.address_hash ] }
        onValueChange={ handleItemSelect }
        maxW={{ base: '180px', lg: '400px' }}
        w="fit-content"
        loading={ isLoading }
      />
      <Flex alignItems="center">
        <CopyToClipboard text={ selectedItem.address_hash } ml={ 0 }/>
        <LinkNewTab
          label="Open contract details page in new tab"
<<<<<<< HEAD
          href={ route({ pathname: '/address/[hash]', query: { hash: selectedItem.address_hash, tab: 'contract' } }) }
=======
          href={ route({
            pathname: '/address/',
            query: { hash: selectedItem.address, tab: 'contract' },
          }) }
>>>>>>> new-version
        />
      </Flex>
    </Flex>
  );
};

export default React.memo(chakra(ContractSourceAddressSelector));
