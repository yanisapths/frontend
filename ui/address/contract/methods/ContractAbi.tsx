import { Box, Flex } from '@chakra-ui/react';
import { range } from 'es-toolkit';
import React from 'react';

import type { SmartContractMethod } from './types';

import { route } from 'nextjs-routes';

import { AccordionRoot } from 'toolkit/chakra/accordion';
import { Link } from 'toolkit/chakra/link';
import { apos } from 'toolkit/utils/htmlEntities';

import ContractAbiItem from './ContractAbiItem';
import useFormSubmit from './useFormSubmit';
import useScrollToMethod from './useScrollToMethod';

interface Props {
  abi: Array<SmartContractMethod>;
  visibleItems?: Array<number>;
  addressHash: string;
  tab: string;
  sourceAddress?: string;
}

<<<<<<< HEAD
const ContractAbi = ({ abi, addressHash, sourceAddress, tab, visibleItems }: Props) => {
  const [ expandedSections, setExpandedSections ] = React.useState<Array<string>>(abi.length === 1 ? [ '0' ] : []);
=======
const ContractAbi = ({
  abi,
  addressHash,
  sourceAddress,
  tab,
  visibleItems,
}: Props) => {
  const [ expandedSections, setExpandedSections ] = React.useState<Array<number>>(
    abi.length === 1 ? [ 0 ] : [],
  );
>>>>>>> new-version
  const [ id, setId ] = React.useState(0);

  useScrollToMethod(abi, setExpandedSections);

  const handleFormSubmit = useFormSubmit({ addressHash });

<<<<<<< HEAD
  const handleAccordionStateChange = React.useCallback(({ value }: { value: Array<string> }) => {
    setExpandedSections(value);
  }, []);
=======
  const handleAccordionStateChange = React.useCallback(
    (newValue: Array<number>) => {
      setExpandedSections(newValue);
    },
    [],
  );
>>>>>>> new-version

  const handleExpandAll = React.useCallback(() => {
    if (!abi) {
      return;
    }

    if (expandedSections.length < abi.length) {
      setExpandedSections(range(0, abi.length).map(String));
    } else {
      setExpandedSections([]);
    }
  }, [ abi, expandedSections.length ]);

  const handleReset = React.useCallback(() => {
    setId((id) => id + 1);
  }, []);

  const hasVisibleItems = !visibleItems || visibleItems.length > 0;

  return (
    <div>
      <Flex mb={ 3 }>
        <Box fontWeight={ 500 } mr="auto">
          Contract information
        </Box>
        { abi.length > 1 && (
          <Link onClick={ handleExpandAll } variant="secondary">
            { expandedSections.length === abi.length ? 'Collapse' : 'Expand' } all
          </Link>
        ) }
<<<<<<< HEAD
        <Link onClick={ handleReset } ml={ 3 } variant="secondary">Reset</Link>
      </Flex>
      <AccordionRoot multiple lazyMount position="relative" onValueChange={ handleAccordionStateChange } value={ expandedSections }>
=======
        <Link onClick={ handleReset } ml={ 3 }>
          Reset
        </Link>
      </Flex>
      <Accordion
        allowMultiple
        position="relative"
        onChange={ handleAccordionStateChange }
        index={ expandedSections }
      >
>>>>>>> new-version
        { abi.map((item, index) => (
          <ContractAbiItem
            key={ index }
            id={ id }
            index={ index }
            data={ item }
            isOpen={ expandedSections.includes(String(index)) }
            isVisible={ !visibleItems || visibleItems.includes(index) }
            addressHash={ addressHash }
            sourceAddress={ sourceAddress }
            tab={ tab }
            onSubmit={ handleFormSubmit }
          />
        )) }
      </AccordionRoot>
      { !hasVisibleItems && (
        <div>
          <div>Couldn{ apos }t find any method that matches your query.</div>
          <div>
<<<<<<< HEAD
            You can use custom ABI for this contract without verifying the contract in the{ ' ' }
            <Link
              href={ route({ pathname: '/address/[hash]', query: { hash: addressHash, tab: 'read_write_custom_methods' } }) }
              scroll={ false }
            >
              Custom ABI
            </Link>
            { ' ' }tab.
=======
            You can use custom ABI for this contract without verifying the
            contract in the{ ' ' }
            <LinkInternal
              href={ route({
                pathname: '/address/',
                query: { hash: addressHash, tab: 'read_write_custom_methods' },
              }) }
              scroll={ false }
            >
              Custom ABI
            </LinkInternal>{ ' ' }
            tab.
>>>>>>> new-version
          </div>
        </div>
      ) }
    </div>
  );
};

export default React.memo(ContractAbi);
