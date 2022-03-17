import { ethers } from "ethers";

export const chainlinkVars = {
  matic: {
    vrfCoordinator: "0x3d2341ADb2D31f1c5530cDC622016af293177AE0",
    linkTokenAddress: "***REMOVED***",
    keyHash: "0xf86195cf7690c55907b2b611ebb7343a6f649bff128701cc542f0569e2c549da",
    fees: ethers.utils.parseEther("0.0001"),
  },
  mumbai: {
    vrfCoordinator: "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255",
    linkTokenAddress: "***REMOVED***",
    keyHash: "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4",
    fees: ethers.utils.parseEther("0.0001"),
  },
  rinkeby: {
    vrfCoordinator: "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B",
    linkTokenAddress: "0x01be23585060835e02b77ef475b0cc51aa1e0709",
    keyHash: "0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311",
    fees: ethers.utils.parseEther("0.1"),
  },
  mainnet: {
    vrfCoordinator: "0xf0d54349aDdcf704F77AE15b96510dEA15cb7952",
    linkTokenAddress: "***REMOVED***",
    keyHash: "0xAA77729D3466CA35AE8D28B3BBAC7CC36A5031EFDC430821C02BC31A238AF445",
    fees: ethers.utils.parseEther("2"),
  },
};