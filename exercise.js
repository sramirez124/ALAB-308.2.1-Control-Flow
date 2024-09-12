const radius = 5;
const PI =3.1415;
const area = PI * radius * radius;
const minSpace = 0.8;
const startingPlants = 20;
const growthRate = 2;
const maxPlantCompacity = (area / minSpace);

// First Week
const firstWeekPlantCount = startingPlants * growthRate;
const firstWeekSpace = firstWeekPlantCount * minSpace;
const firstWeekSpaceLeft = area - firstWeekSpace;


if ((firstWeekPlantCount / maxPlantCompacity) < 0.8){
    console.log("Week 1: The plants need to be pruned");
} else if ((firstWeekPlantCount * minSpace) / area >= 0.5) {
    console.log("Week 1: The plants does not need to be pruned")
} else {
    console.log("Week 1: You can plant more...plants")
}

// Second Week
const secondWeekPlantCount = firstWeekPlantCount * growthRate;
const secondWeekSpace = secondWeekPlantCount * minSpace;