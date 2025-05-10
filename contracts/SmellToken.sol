// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SmellToken is ERC20, Ownable {
    constructor() ERC20("SmellToken", "SMELL") Ownable(msg.sender) {
        _mint(msg.sender, 1_000_000 * 10 ** decimals()); // Mint 1M tokens
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}