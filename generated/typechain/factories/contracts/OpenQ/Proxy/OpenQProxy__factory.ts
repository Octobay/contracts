/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  OpenQProxy,
  OpenQProxyInterface,
} from "../../../../contracts/OpenQ/Proxy/OpenQProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405260405161072b38038061072b8339810160408190526100229161031d565b818161003082826000610039565b5050505061043a565b6100428361006f565b60008251118061004f5750805b1561006a5761006883836100af60201b6100291760201c565b505b505050565b610078816100db565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d48383604051806060016040528060278152602001610704602791396101ad565b9392505050565b6100ee8161022660201b6100551760201c565b6101555760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b8061018c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023560201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101ca91906103eb565b600060405180830381855af49150503d8060008114610205576040519150601f19603f3d011682016040523d82523d6000602084013e61020a565b606091505b50909250905061021c86838387610238565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a75782516000036102a0576001600160a01b0385163b6102a05760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161014c565b50816102b1565b6102b183836102b9565b949350505050565b8151156102c95781518083602001fd5b8060405162461bcd60e51b815260040161014c9190610407565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103145781810151838201526020016102fc565b50506000910152565b6000806040838503121561033057600080fd5b82516001600160a01b038116811461034757600080fd5b60208401519092506001600160401b038082111561036457600080fd5b818501915085601f83011261037857600080fd5b81518181111561038a5761038a6102e3565b604051601f8201601f19908116603f011681019083821181831017156103b2576103b26102e3565b816040528281528860208487010111156103cb57600080fd5b6103dc8360208301602088016102f9565b80955050505050509250929050565b600082516103fd8184602087016102f9565b9190910192915050565b60208152600082518060208401526104268160408501602087016102f9565b601f01601f19169190910160400192915050565b6102bb806104496000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61009f565b565b606061004e838360405180606001604052806027815260200161025f602791396100c3565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100be573d6000f35b3d6000fd5b6060600080856001600160a01b0316856040516100e0919061020f565b600060405180830381855af49150503d806000811461011b576040519150601f19603f3d011682016040523d82523d6000602084013e610120565b606091505b50915091506101318683838761013b565b9695505050505050565b606083156101af5782516000036101a8576001600160a01b0385163b6101a85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b50816101b9565b6101b983836101c1565b949350505050565b8151156101d15781518083602001fd5b8060405162461bcd60e51b815260040161019f919061022b565b60005b838110156102065781810151838201526020016101ee565b50506000910152565b600082516102218184602087016101eb565b9190910192915050565b602081526000825180602084015261024a8160408501602087016101eb565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220d32b193b3fa4a87a2afc29cdf1db001d457339216c4c1e6075cff5e6a27ede4a64736f6c63430008100033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type OpenQProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OpenQProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OpenQProxy__factory extends ContractFactory {
  constructor(...args: OpenQProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<OpenQProxy> {
    return super.deploy(_logic, _data, overrides || {}) as Promise<OpenQProxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  override attach(address: string): OpenQProxy {
    return super.attach(address) as OpenQProxy;
  }
  override connect(signer: Signer): OpenQProxy__factory {
    return super.connect(signer) as OpenQProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OpenQProxyInterface {
    return new utils.Interface(_abi) as OpenQProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OpenQProxy {
    return new Contract(address, _abi, signerOrProvider) as OpenQProxy;
  }
}
