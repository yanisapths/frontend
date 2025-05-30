<<<<<<< HEAD
import { Text, VStack, chakra } from '@chakra-ui/react';
=======
import {
  Td,
  Tr,
  Text,
  useBoolean,
  Link,
  Table,
  VStack,
  chakra,
} from '@chakra-ui/react';
>>>>>>> new-version
import { useRouter } from 'next/router';
import React from 'react';

import type { AddressMudTableItem } from 'types/api/address';

import { route } from 'nextjs-routes';

import { Badge } from 'toolkit/chakra/badge';
import { Link } from 'toolkit/chakra/link';
import { Skeleton } from 'toolkit/chakra/skeleton';
import { TableBody, TableCell, TableRoot, TableRow } from 'toolkit/chakra/table';
import IconSvg from 'ui/shared/IconSvg';
type Props = {
  item: AddressMudTableItem;
  isLoading: boolean;
  hash: string;
};

const AddressMudTablesTableItem = ({ item, isLoading, hash }: Props) => {
  const [ isOpened, setIsOpened ] = React.useState(false);

  const router = useRouter();

<<<<<<< HEAD
  const handleIconClick = React.useCallback(() => {
    setIsOpened((prev) => !prev);
  }, []);

  const onTableClick = React.useCallback((e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey) {
      // Allow opening in a new tab/window with right-click or ctrl/cmd+click
      return;
    }
=======
  const onTableClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (e.metaKey || e.ctrlKey) {
        // Allow opening in a new tab/window with right-click or ctrl/cmd+click
        return;
      }
>>>>>>> new-version

      e.preventDefault();

      const tableId = e.currentTarget.getAttribute('data-id');
      if (tableId) {
        router.push(
          {
            pathname: '/address/',
            query: { hash, tab: 'mud', table_id: tableId },
          },
          undefined,
          { shallow: true },
        );
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [ router, hash ],
  );

  return (
    <>
      <TableRow borderBottomStyle={ isOpened ? 'hidden' : 'unset' }>
        <TableCell verticalAlign="middle">
          <Skeleton loading={ isLoading }>
            <Link display="block">
              <IconSvg
                name="arrows/east-mini"
                transform={ isOpened ? 'rotate(270deg)' : 'rotate(180deg)' }
                boxSize={ 6 }
                cursor="pointer"
                onClick={ handleIconClick }
                transitionDuration="faster"
                aria-label="View schema"
              />
            </Link>
          </Skeleton>
<<<<<<< HEAD
        </TableCell>
        <TableCell verticalAlign="middle">
          <Skeleton loading={ isLoading }>
            <Link
              href={ route({ pathname: '/address/[hash]', query: { hash, tab: 'mud', table_id: item.table.table_id } }) }
=======
        </Td>
        <Td verticalAlign="middle">
          <Skeleton isLoaded={ !isLoading }>
            <LinkInternal
              href={ route({
                pathname: '/address/',
                query: { hash, tab: 'mud', table_id: item.table.table_id },
              }) }
>>>>>>> new-version
              data-id={ item.table.table_id }
              onClick={ onTableClick }
              fontWeight={ 700 }
            >
              { item.table.table_full_name }
            </Link>
          </Skeleton>
<<<<<<< HEAD
        </TableCell>
        <TableCell verticalAlign="middle">
          <Skeleton loading={ isLoading }>
            { item.table.table_id }
          </Skeleton>
        </TableCell>
        <TableCell verticalAlign="middle">
          <Skeleton loading={ isLoading }>
            { item.table.table_type }
          </Skeleton>
        </TableCell>
      </TableRow>
      { isOpened && (
        <TableRow>
          <TableCell pt={ 0 }></TableCell>
          <TableCell colSpan={ 3 } pt={ 0 }>
            <TableRoot>
              <TableBody>
                { Boolean(item.schema.key_names.length) && (
                  <TableRow>
                    <TableCell width="80px" fontSize="sm" fontWeight={ 600 } py={ 2 } pl={ 0 } verticalAlign="middle">Key</TableCell>
                    <TableCell py={ 2 }>
                      <VStack gap={ 1 } alignItems="start">
                        { item.schema.key_names.map((name, index) => (
                          <Badge key={ name }>
                            <chakra.span fontWeight={ 700 }>{ item.schema.key_types[index] }</chakra.span> { name }
                          </Badge>
                        )) }
                      </VStack>
                    </TableCell>
                  </TableRow>
                ) }
                <TableRow borderBottomStyle="hidden">
                  <TableCell width="80px" fontSize="sm" fontWeight={ 600 } py={ 2 } pl={ 0 } >Value</TableCell>
                  <TableCell fontSize="sm" py={ 2 }>
                    <VStack gap={ 1 } alignItems="start">
                      { item.schema.value_names.map((name, index) => (
                        <Text key={ name }>
                          <chakra.span fontWeight={ 700 }>{ item.schema.value_types[index] }</chakra.span> { name }
                        </Text>
                      )) }
                    </VStack>
                  </TableCell>
                </TableRow>
              </TableBody>
            </TableRoot>
          </TableCell>
        </TableRow>
=======
        </Td>
        <Td verticalAlign="middle">
          <Skeleton isLoaded={ !isLoading }>{ item.table.table_id }</Skeleton>
        </Td>
        <Td verticalAlign="middle">
          <Skeleton isLoaded={ !isLoading }>{ item.table.table_type }</Skeleton>
        </Td>
      </Tr>
      { isOpened && (
        <Tr>
          <Td pt={ 0 }></Td>
          <Td colSpan={ 3 } pt={ 0 }>
            <Table>
              { Boolean(item.schema.key_names.length) && (
                <Tr>
                  <Td
                    width="80px"
                    fontSize="sm"
                    fontWeight={ 600 }
                    py={ 2 }
                    pl={ 0 }
                    verticalAlign="middle"
                  >
                    Key
                  </Td>
                  <Td py={ 2 }>
                    <VStack gap={ 1 } alignItems="start">
                      { item.schema.key_names.map((name, index) => (
                        <Tag key={ name }>
                          <chakra.span fontWeight={ 700 }>
                            { item.schema.key_types[index] }
                          </chakra.span>{ ' ' }
                          { name }
                        </Tag>
                      )) }
                    </VStack>
                  </Td>
                </Tr>
              ) }
              <Tr borderBottomStyle="hidden">
                <Td width="80px" fontSize="sm" fontWeight={ 600 } py={ 2 } pl={ 0 }>
                  Value
                </Td>
                <Td fontSize="sm" py={ 2 }>
                  <VStack gap={ 1 } alignItems="start">
                    { item.schema.value_names.map((name, index) => (
                      <Text key={ name }>
                        <chakra.span fontWeight={ 700 }>
                          { item.schema.value_types[index] }
                        </chakra.span>{ ' ' }
                        { name }
                      </Text>
                    )) }
                  </VStack>
                </Td>
              </Tr>
            </Table>
          </Td>
        </Tr>
>>>>>>> new-version
      ) }
    </>
  );
};

export default React.memo(AddressMudTablesTableItem);
