// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExampleConstructor {
    string greeting;

    // Constructor to initialize the greeting
    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    // Function to get the greeting
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
