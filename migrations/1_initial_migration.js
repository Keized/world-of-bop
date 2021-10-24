var Migrations = artifacts.require("./Migrations.sol");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  const instance = await Migrations.deployed();
  console.log(instance);
};
