const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducer = (value1, value2) => value1 + value2;
const totalBatteries = batteryBatches.reduce(reducer);