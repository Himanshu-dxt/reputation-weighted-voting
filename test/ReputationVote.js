const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ReputationVote", function () {
  let contract, owner, voter1, voter2;

  beforeEach(async function () {
    const ReputationVote = await ethers.getContractFactory("ReputationVote");
    contract = await ReputationVote.deploy();
    await contract.waitForDeployment();

    [owner, voter1, voter2] = await ethers.getSigners();
  });

  it("should allow a user to vote with baseline reputation", async function () {
    await contract.connect(voter1).vote(1);

    const data = await contract.voters(voter1.address);
    expect(data.hasVoted).to.equal(true);
    expect(data.reputation).to.equal(1);
  });

  it("should weight votes by reputation", async function () {
    await contract.rewardReputation(voter1.address, 4); // total rep = 4
    await contract.connect(voter1).vote(1);

    const total = await contract.totalWeightedVotes();
    expect(total).to.equal(4);
  });

  it("should prevent double voting", async function () {
    await contract.connect(voter1).vote(1);

    await expect(
      contract.connect(voter1).vote(1)
    ).to.be.revertedWith("Already voted");
  });
});
