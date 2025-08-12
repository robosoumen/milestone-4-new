function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perWoodChair = 3;
    const perWoodTable = 10;
    const perWoodBed = 50;

    const totalChairWood = chairQuantity * perWoodChair;
    const totalTableWood = tableQuantity * perWoodTable;
    const totalBedWood = bedQuantity * perWoodBed;
    

    const totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;
}

const wood = woodQuantity(2, 3, 1);
console.log('wood needed', wood)