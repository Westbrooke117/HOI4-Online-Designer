const labels = [
    "Turret",
    "Chassis",
    "Main Armament",
    "Special Feature Slot 1",
    "Special Feature Slot 2",
    "Special Feature Slot 3",
    "Special Feature Slot 4",
    "Suspension",
    "Armor Type",
    "Engine Type",
    "Engine Upgrade",
    "Armor Upgrade"
]

const CalculateReliability = (tankDesign) => {
    let baseValue = 0;
    let percentageTotal = 0;

    //Sum base top speeds
    labels.forEach((moduleSlot) => {
        if (tankDesign[moduleSlot] === null || tankDesign[moduleSlot]["Reliability"] === null || tankDesign[moduleSlot]["Reliability"] === null) return

        if (tankDesign[moduleSlot]["Module Slot"] === "Engine Upgrade" || tankDesign[moduleSlot]["Module Slot"] === "Armor Upgrade"){
            percentageTotal += (parseFloat(tankDesign[moduleSlot]["Reliability"]) / 100);
        } else {
            baseValue += parseFloat(tankDesign[moduleSlot]["Reliability"]);
        }
    })

    // Return result
    return Math.round(baseValue * (percentageTotal + 1))
}

const CalculateStat = (tankDesign, intStat) => {
    let baseValue = 0;

    //Sum base top speeds
    labels.forEach((label) => {
        if (tankDesign[label] === null || tankDesign[label][intStat] === null) return

        baseValue += parseFloat(tankDesign[label][intStat]);
    })

    // Return result
    return Math.fround(baseValue).toFixed(1);
}

const CalculateStatWithPercentage = (tankDesign, intStat, percentStat) => {
    let baseValue = 0;
    let percentageTotal = 0.0;

    //Sum base top speeds
    labels.forEach((moduleSlot) => {
        if (tankDesign[moduleSlot] === null || tankDesign[moduleSlot][intStat] === null || tankDesign[moduleSlot][percentStat] === null) return

        baseValue += parseFloat(tankDesign[moduleSlot][intStat]);
        percentageTotal += (parseFloat(tankDesign[moduleSlot][percentStat]) / 100);
    })

    // Return result
    return Math.fround(baseValue * (percentageTotal + 1)).toFixed(1);
}

export { CalculateStat, CalculateStatWithPercentage, CalculateReliability }
