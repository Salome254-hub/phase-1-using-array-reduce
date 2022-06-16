const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries=batteryBatches.reduce(function(total,batteryBatches){
    return total+batteryBatches;},0)

//const totalBatteries = batteryBatches.reduce(function(accumulator, element){ return element += accumulator})