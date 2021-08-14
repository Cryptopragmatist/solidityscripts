 async function main() {
     const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // compile our contract and generate the necessary files we need to work with our contract"WavePortal" and find it  under the artifacts/contracts directory 
     // Hardhat will create a local Ethereum network for us, but just for this contract. after completion, destroy locale network, fresh blockchain every run, run from a clean slate for easy debug
     const waveContract = await waveContractFactory.deploy(); //this will deploy the contract after it is found . const means declaring a constant variable
     await waveContract.deployed(); // wait until the contract is successfully deployed to the local blockchain
     console.log("Contract address:", waveContract.address); // gives the address of the deployed contract to interact with it
    
 
}
 
 
 
 
 
 
 main ()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
  