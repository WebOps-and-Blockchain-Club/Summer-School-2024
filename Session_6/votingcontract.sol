// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingContract {
    struct Participant {
        string name;
        uint256 votes;
    }

    Participant public participant1;
    Participant public participant2;

    constructor(string memory _name1, string memory _name2) {
        participant1 = Participant(_name1, 0);
        participant2 = Participant(_name2, 0);
    }

    function voteForParticipant1() public {
        participant1.votes++;
    }

    function voteForParticipant2() public {
        participant2.votes++;
    }

    function getWinner() public view returns (string memory) {
        if (participant1.votes > participant2.votes) {
            return participant1.name;
        } else if (participant2.votes > participant1.votes) {
            return participant2.name;
        } else {
            return "It's a tie!";
        }
    }
}
