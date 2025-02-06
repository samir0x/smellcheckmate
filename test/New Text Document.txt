const Migrations = artifacts.require("Migrations");

contract("Migrations", (accounts) => {
  it("should have an owner", async () => {
    const instance = await Migrations.deployed();
    const owner = await instance.owner();
    assert.notEqual(owner, "0x0000000000000000000000000000000000000000", "owner must be set");
  });
});