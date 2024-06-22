const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("EnergyTradingModule", (m) => {

  const energyTrading = m.contract("EnergyTrading", [], {});

  return { energyTrading };
});

