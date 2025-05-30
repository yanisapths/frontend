import { chakra, Box, Flex } from '@chakra-ui/react';
import type { Channel } from 'phoenix';
import React from 'react';

import type { SocketMessage } from 'lib/socket/types';
import type { Address } from 'types/api/address';
import type { SmartContract } from 'types/api/contract';

import { route } from 'nextjs-routes';

import useSocketMessage from 'lib/socket/useSocketMessage';
import { Alert } from 'toolkit/chakra/alert';
import { Link } from 'toolkit/chakra/link';
import AddressEntity from 'ui/shared/entities/address/AddressEntity';

import ContractDetailsVerificationButton from '../ContractDetailsVerificationButton';
import ContractDetailsAlertProxyPattern from './ContractDetailsAlertProxyPattern';
import ContractDetailsAlertVerificationSource from './ContractDetailsAlertVerificationSource';

export interface Props {
  data: SmartContract | undefined;
  isLoading: boolean;
  addressData: Address;
  channel?: Channel;
}

<<<<<<< HEAD
const ContractDetailsAlerts = ({ data, isLoading, addressData, channel }: Props) => {
  const [ isChangedBytecodeSocket, setIsChangedBytecodeSocket ] = React.useState<boolean>();
=======
const ContractDetailsAlerts = ({
  data,
  isLoading,
  addressHash,
  channel,
}: Props) => {
  const [ isChangedBytecodeSocket, setIsChangedBytecodeSocket ] =
    React.useState<boolean>();
>>>>>>> new-version

  const handleChangedBytecodeMessage: SocketMessage.AddressChangedBytecode['handler'] =
    React.useCallback(() => {
      setIsChangedBytecodeSocket(true);
    }, []);

  useSocketMessage({
    channel,
    event: 'changed_bytecode',
    handler: handleChangedBytecodeMessage,
  });

  return (
    <Flex flexDir="column" rowGap={ 2 } mb={ 6 } _empty={{ display: 'none' }}>
      { data?.is_blueprint && (
        <Box>
          <span>This is an </span>
          <Link external href="https://eips.ethereum.org/EIPS/eip-5202">
            ERC-5202 Blueprint contract
          </Link>
        </Box>
      ) }
      { data?.is_verified && (
<<<<<<< HEAD
        <Alert status="success" loading={ isLoading } descriptionProps={{ alignItems: 'center', flexWrap: 'wrap', rowGap: 3, columnGap: 5 }}>
          <span>Contract Source Code Verified ({ data.is_partially_verified ? 'Partial' : 'Exact' } Match)</span>
          {
            data.is_partially_verified ? (
              <ContractDetailsVerificationButton
                isLoading={ isLoading }
                addressHash={ addressData.hash }
                isPartiallyVerified
              />
            ) : null
          }
        </Alert>
=======
        <Skeleton isLoaded={ !isLoading }>
          <Alert status="success" flexWrap="wrap" rowGap={ 3 } columnGap={ 5 }>
            <span>
              Contract Source Code Verified (
              { data.is_partially_verified ? 'Partial' : 'Exact' } Match)
            </span>
            { data.is_partially_verified ? (
              <ContractDetailsVerificationButton
                isLoading={ isLoading }
                addressHash={ addressHash }
                isPartiallyVerified
              />
            ) : null }
          </Alert>
        </Skeleton>
>>>>>>> new-version
      ) }
      <ContractDetailsAlertVerificationSource data={ data }/>
      { (data?.is_changed_bytecode || isChangedBytecodeSocket) && (
        <Alert status="warning">
          Warning! Contract bytecode has been changed and does not match the
          verified one. Therefore, interaction with this smart contract may be
          risky.
        </Alert>
      ) }
<<<<<<< HEAD
      { !data?.is_verified && data?.verified_twin_address_hash && (!addressData.proxy_type || addressData.proxy_type === 'unknown') && (
        <Alert status="warning" whiteSpace="pre-wrap">
          <span>Contract is not verified. However, we found a verified contract with the same bytecode in Blockscout DB </span>
=======
      { !data?.is_verified &&
        data?.verified_twin_address_hash &&
        (!data?.proxy_type || data.proxy_type === 'unknown') && (
        <Alert status="warning" whiteSpace="pre-wrap" flexWrap="wrap">
          <span>
            Contract is not verified. However, we found a verified contract
            with the same bytecode in Blockscout DB{ ' ' }
          </span>
>>>>>>> new-version
          <AddressEntity
            address={{
              hash: data.verified_twin_address_hash,
              filecoin: {
                robust: data.verified_twin_filecoin_robust_address,
              },
              is_contract: true,
            }}
            truncation="constant"
            fontSize="sm"
            fontWeight="500"
          />
<<<<<<< HEAD
          <chakra.span mt={ 1 }>All functions displayed below are from ABI of that contract. In order to verify current contract, proceed with </chakra.span>
          <Link href={ route({ pathname: '/address/[hash]/contract-verification', query: { hash: addressData.hash } }) }>
=======
          <chakra.span mt={ 1 }>
            All functions displayed below are from ABI of that contract. In
            order to verify current contract, proceed with{ ' ' }
          </chakra.span>
          <LinkInternal
            href={ route({
              pathname: '/address//contract-verification',
              query: { hash: addressHash },
            }) }
          >
>>>>>>> new-version
            Verify & Publish
          </Link>
          <span> page</span>
        </Alert>
      ) }
<<<<<<< HEAD
      { addressData.proxy_type && <ContractDetailsAlertProxyPattern type={ addressData.proxy_type } isLoading={ isLoading }/> }
=======
      { data?.proxy_type && (
        <ContractDetailsAlertProxyPattern type={ data.proxy_type }/>
      ) }
>>>>>>> new-version
    </Flex>
  );
};

export default React.memo(ContractDetailsAlerts);
