// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Datatypes {
    string public text = "Hello World";
    bool boolean = true; 
    uint256 public myuint=10;
    int public myint = -25;
    address public myaddress = address(this);
   
    function getContractAddress() public view returns (address) {
        return myaddress;
    }
}