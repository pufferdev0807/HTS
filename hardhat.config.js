/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.9", settings: 
        {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  }
};
