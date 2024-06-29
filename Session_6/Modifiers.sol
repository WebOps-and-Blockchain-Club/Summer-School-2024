// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExampleModifiers {
    address public owner;
    string name = "Kartik";

    // Constructor to set the owner
    constructor() {
        owner = msg.sender;
    }

    // Modifier to restrict access to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    // Function restricted to the owner
    function restrictedFunction() public onlyOwner view returns(string memory) {
        return name;
    }
}
