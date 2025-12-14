# Reputation-Weighted Voting
*A Stability-Oriented Proof of Concept for Decentralized Governance*

---

## Overview
This project is a minimal proof-of-concept demonstrating how an on-chain reputation system can improve stability in decentralization decision-making by weighting votes based on earned reputation rather than raw token ownership or wallet count.

---

## Problem
Decentralized govenrnance mechanisms frequently suffer from instability due to:

    1. Sybil attacks (mutliple wallets = multiple votes)
    2. Token-weighted voting favoring large holders
    3. Off-chain moderation creating central points of failure

These issues undermine trust and long-term sustainability in decentralized systems.

---

## Solution
We implement a lightweight, fully on-cahin voting mechanism where:

    1. Each participant has an on-chain reputation score
    2. Votes are weighted by reputation
    3. Reputation represents past participation rather than capital
    4. No backend, servers, or administrators are required

This isolates reputation logic as a reusable primitive for decentralized systems.

---

## Architecture

    1. Smart Contract: ReputationVote.sol
    2. On-chain state for votes and reputation
    3. Local Hardhat network for testing
    4. No off-chain services

---

## Key Properties

    1. Unstoppable: fully on-chain logic
    2. Serverless: no backend dependencies
    3. Sybil-aware: influence accumulation is non-instant
    4. Minimal: small codebase, easy to audit

---

## Testing 
The contract includes automated tests validating:

   1. Baseline reputation assignment
   2. Reputation-weighted votes calculation
   3. Prevention of double voting

---

Run tests with:

     npx hardhat test

---

## Scope & Intent
This project prioritizes:

   1. correctness over completeness
   2. clarity over feature count
   3. stability over novelty

It is intended as a research-oriented artifact and a governance primitive, not a finished product

---

## Future Work

   1. Decentralized reputation issuance
   2. Reputation decay mechanisms
   3. Integration with DAO governance frameworks
   4. Support for multiple proposals
