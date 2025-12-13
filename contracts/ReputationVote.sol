// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ReputationVote {
    struct Voter {
        uint256 reputation;
        bool hasVoted;
    }

    mapping(address => Voter) public voters;

    int256 public totalWeightedVotes;
    uint256 public totalVotes;

    function vote(int8 _vote) external {
        require(!voters[msg.sender].hasVoted, "Already voted");
        require(_vote == 1 || _vote == -1, "Invalid vote");

        uint256 rep = voters[msg.sender].reputation;
        if (rep == 0) {
            rep = 1; // baseline reputation
            voters[msg.sender].reputation = 1;
        }

        totalWeightedVotes += int256(_vote) * int256(rep);
        totalVotes += 1;

        voters[msg.sender].hasVoted = true;
    }

    function rewardReputation(address _user, uint256 _amount) external {
        voters[_user].reputation += _amount;
    }
}

