// This script logs something to Remix's console after deployment
async function run(deployResult) {
    console.log("Contract deployed at:", deployResult.contractAddress);
    // Add any custom logic here. For example, if you want to set an initial rating for an address:
    // await deployResult.contract.methods.submitRating('YOUR_ADDRESS_HERE', 3).send({from: deployResult.from});
}

module.exports = run;
