// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExampleStructs {
    // Define a struct
    struct Person {
        string name;
        uint age;
    }

    // State variable to store a Person
    Person public person;

    // Constructor to initialize the person
    constructor(string memory _name, uint _age) {
        person = Person(_name, _age);
    }

    // Function to get the person's details
    function getPerson() public view returns (string memory, uint) {
        return (person.name, person.age);
    }
}
