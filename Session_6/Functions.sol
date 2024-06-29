// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrimeChecker {
   
    function isPrime(uint number) public pure returns (bool) {
        //Special case
        if (number <= 1) {
            return false; 
        }      
        for (uint i = 2; i < number; i++) {
            if (number % i == 0) {
                return false; 
            }
        }
        return true; 
    }
}
