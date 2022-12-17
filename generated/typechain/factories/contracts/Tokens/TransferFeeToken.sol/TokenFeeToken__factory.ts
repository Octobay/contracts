/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TokenFeeToken,
  TokenFeeTokenInterface,
} from "../../../../contracts/Tokens/TransferFeeToken.sol/TokenFeeToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051806040016040528060098152602001682332b2902a37b5b2b760b91b8152506040518060400160405280600381526020016246454560e81b815250816003908162000061919062000216565b50600462000070828262000216565b5050506200008f3369021e19e0c9bab2400000620000a760201b60201c565b600580546001600160a01b031916331790556200030a565b6001600160a01b038216620001025760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001169190620002e2565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200019d57607f821691505b602082108103620001be57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200016d57600081815260208120601f850160051c81016020861015620001ed5750805b601f850160051c820191505b818110156200020e57828155600101620001f9565b505050505050565b81516001600160401b0381111562000232576200023262000172565b6200024a8162000243845462000188565b84620001c4565b602080601f831160018114620002825760008415620002695750858301515b600019600386901b1c1916600185901b1785556200020e565b600085815260208120601f198616915b82811015620002b35788860151825594840194600190910190840162000292565b5085821015620002d25787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200030457634e487b7160e01b600052601160045260246000fd5b92915050565b610888806200031a6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a082311461014157806395d89b411461016a578063a457c2d714610172578063a9059cbb14610185578063dd62ed3e14610198578063f851a440146101ab57600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461012e575b600080fd5b6100c16101d6565b6040516100ce91906106d2565b60405180910390f35b6100ea6100e536600461073c565b610268565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a366004610766565b610282565b604051601281526020016100ce565b6100ea61013c36600461073c565b6102a6565b6100fe61014f3660046107a2565b6001600160a01b031660009081526020819052604090205490565b6100c16102c8565b6100ea61018036600461073c565b6102d7565b6100ea61019336600461073c565b610357565b6100fe6101a63660046107c4565b610365565b6005546101be906001600160a01b031681565b6040516001600160a01b0390911681526020016100ce565b6060600380546101e5906107f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610211906107f7565b801561025e5780601f106102335761010080835404028352916020019161025e565b820191906000526020600020905b81548152906001019060200180831161024157829003601f168201915b5050505050905090565b600033610276818585610390565b60019150505b92915050565b6000336102908582856104b4565b61029b85858561052e565b506001949350505050565b6000336102768185856102b98383610365565b6102c39190610831565b610390565b6060600480546101e5906107f7565b600033816102e58286610365565b90508381101561034a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61029b8286868403610390565b60003361027681858561052e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103f25760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166104535760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104c08484610365565b90506000198114610528578181101561051b5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b6105288484848403610390565b50505050565b6001600160a01b0383166105925760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b0382166105f45760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b0383166000908152602081905260409020548181101561066c5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610528565b600060208083528351808285015260005b818110156106ff578581018301518582016040015282016106e3565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461073757600080fd5b919050565b6000806040838503121561074f57600080fd5b61075883610720565b946020939093013593505050565b60008060006060848603121561077b57600080fd5b61078484610720565b925061079260208501610720565b9150604084013590509250925092565b6000602082840312156107b457600080fd5b6107bd82610720565b9392505050565b600080604083850312156107d757600080fd5b6107e083610720565b91506107ee60208401610720565b90509250929050565b600181811c9082168061080b57607f821691505b60208210810361082b57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561027c57634e487b7160e01b600052601160045260246000fdfea2646970667358221220a741a100b5fd9a10e48f8d1ad4e96be355a58c65072170b828df6ac79cab58af64736f6c63430008100033";

type TokenFeeTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenFeeTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenFeeToken__factory extends ContractFactory {
  constructor(...args: TokenFeeTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenFeeToken> {
    return super.deploy(overrides || {}) as Promise<TokenFeeToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenFeeToken {
    return super.attach(address) as TokenFeeToken;
  }
  override connect(signer: Signer): TokenFeeToken__factory {
    return super.connect(signer) as TokenFeeToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenFeeTokenInterface {
    return new utils.Interface(_abi) as TokenFeeTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenFeeToken {
    return new Contract(address, _abi, signerOrProvider) as TokenFeeToken;
  }
}
