// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SmellCheckmate {
    struct Rating {
        bytes32 ratingHash; // Hashed rating (e.g., keccak256(hygiene, smell, attitude))
        uint256 timestamp;
    }

    IERC20 public smellToken; // $SMELL token contract
    mapping(address => Rating[]) public ratings; // Multiple ratings per user
    mapping(address => uint256) public ratingCount;

    event Rated(address indexed user, bytes32 ratingHash);

    constructor(address _smellTokenAddress) {
        smellToken = IERC20(_smellTokenAddress);
    }

    function submitRating(address _user, bytes32 _ratingHash) external {
        ratings[_user].push(Rating(_ratingHash, block.timestamp));
        ratingCount[_user]++;
        emit Rated(_user, _ratingHash);
        smellToken.transfer(msg.sender, 0.1 * 10 ** 18); // Reward 0.1 $SMELL
    }

    function getRatings(address _user) external view returns (Rating[] memory) {
        return ratings[_user];
    }
}