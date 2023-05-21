// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Social is ERC721,Ownable {
    uint256 tokenId;
    mapping (uint256=>string) public messages;
    mapping (address => uint256) public credits;
    constructor() ERC721("MyToken", "MTK") {}

    function post( string memory message) public {
        _safeMint(msg.sender, tokenId);
        messages[tokenId] = message;
        tokenId++;
    }
    function setCredit(address user,uint256 amount ) public onlyOwner{
        credits[user] += amount;
    }
}
