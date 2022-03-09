// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.12;

import '../Storage/OpenQStorage.sol';
import '../BountyFactory/BountyFactory.sol';

abstract contract OpenQStorable {
    OpenQStorage public openQStorage;
    BountyFactory public bountyFactory;
}
