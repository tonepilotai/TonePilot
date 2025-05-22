
async function main() {
  const EmailMessenger = await ethers.getContractFactory("EmailMessenger");
  const contract = await EmailMessenger.deploy();
  await contract.deployed();
  console.log("Deployed to:", contract.address);
}
main();
