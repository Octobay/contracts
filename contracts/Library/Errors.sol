// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.17;

/// @title Errors
/// @author FlacoJones
/// @notice Revert message constants
library Errors {
    string constant BOUNTY_ALREADY_EXISTS = 'BOUNTY_ALREADY_EXISTS';
    string constant CALLER_NOT_ISSUER = 'CALLER_NOT_ISSUER';
    string constant CALLER_NOT_ISSUER_OR_ORACLE = 'CALLER_NOT_ISSUER_OR_ORACLE';
    string constant CONTRACT_NOT_CLOSED = 'CONTRACT_NOT_CLOSED';
    string constant CONTRACT_ALREADY_CLOSED = 'CONTRACT_ALREADY_CLOSED';
    string constant TOKEN_NOT_ACCEPTED = 'TOKEN_NOT_ACCEPTED';
    string constant NOT_A_COMPETITION_CONTRACT = 'NOT_A_COMPETITION_CONTRACT';
    string constant NOT_A_TIERED_FIXED_BOUNTY = 'NOT_A_TIERED_FIXED_BOUNTY';
    string constant TOKEN_TRANSFER_IN_OVERFLOW = 'TOKEN_TRANSFER_IN_OVERFLOW';
    string constant NOT_AN_ONGOING_CONTRACT = 'NOT_AN_ONGOING_CONTRACT';
    string constant NO_EMPTY_BOUNTY_ID = 'NO_EMPTY_BOUNTY_ID';
    string constant NO_EMPTY_ORGANIZATION = 'NO_EMPTY_ORGANIZATION';
    string constant ZERO_VOLUME_SENT = 'ZERO_VOLUME_SENT';
    string constant CONTRACT_IS_CLOSED = 'CONTRACT_IS_CLOSED';
    string constant TIER_ALREADY_CLAIMED = 'TIER_ALREADY_CLAIMED';
    string constant DEPOSIT_ALREADY_REFUNDED = 'DEPOSIT_ALREADY_REFUNDED';
    string constant CALLER_NOT_FUNDER = 'CALLER_NOT_FUNDER';
    string constant NOT_A_TIERED_BOUNTY = 'NOT_A_TIERED_BOUNTY';
    string constant NOT_A_FIXED_TIERED_BOUNTY = 'NOT_A_FIXED_TIERED_BOUNTY';
    string constant PREMATURE_REFUND_REQUEST = 'PREMATURE_REFUND_REQUEST';
    string constant NO_ZERO_ADDRESS = 'NO_ZERO_ADDRESS';
    string constant CONTRACT_IS_NOT_CLAIMABLE = 'CONTRACT_IS_NOT_CLAIMABLE';
    string constant TOO_MANY_TOKEN_ADDRESSES = 'TOO_MANY_TOKEN_ADDRESSES';
    string constant NO_ASSOCIATED_ADDRESS = 'NO_ASSOCIATED_ADDRESS';
    string constant ADDRESS_LACKS_KYC = 'ADDRESS_LACKS_KYC';
    string constant TOKEN_NOT_ALREADY_WHITELISTED =
        'TOKEN_NOT_ALREADY_WHITELISTED';
    string constant TOKEN_ALREADY_WHITELISTED = 'TOKEN_ALREADY_WHITELISTED';
    string constant CLAIMANT_NOT_TIER_WINNER = 'CLAIMANT_NOT_TIER_WINNER';
    string constant INVOICE_NOT_COMPLETE = 'INVOICE_NOT_COMPLETE';
    string constant UNKNOWN_BOUNTY_TYPE = 'UNKNOWN_BOUNTY_TYPE';
    string constant SUPPORTING_DOCS_NOT_COMPLETE =
        'SUPPORTING_DOCS_NOT_COMPLETE';
    string constant EXPIRATION_NOT_GREATER_THAN_ZERO =
        'EXPIRATION_NOT_GREATER_THAN_ZERO';
    string constant PAYOUT_SCHEDULE_MUST_ADD_TO_100 =
        'PAYOUT_SCHEDULE_MUST_ADD_TO_100';
}
