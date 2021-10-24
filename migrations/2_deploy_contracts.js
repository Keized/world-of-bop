const Bop = artifacts.require("Bop");

module.exports = async function(deployer) {
  await deployer.deploy(Bop);
  const instance = await Bop.deployed();
  console.log(instance);
};
