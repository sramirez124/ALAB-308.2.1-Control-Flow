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
const firstWeekSpaceTaken = firstWeekSpace / area;

console.log("==============First Week==============")
if ((firstWeekPlantCount / maxPlantCompacity) > 0.8){
    console.log("Week 1: The plants need to be pruned");
    console.log("Space taken: " + firstWeekSpaceTaken * 100 + "%");
} else if ((firstWeekPlantCount * minSpace) / area >= 0.5) {
    console.log("Week 1: The plants does not need to be pruned")
    console.log("Space taken: " + firstWeekSpaceTaken * 100 + "%");
} else {
    console.log("Week 1: You can plant more...plants")
    console.log("Space taken: " + firstWeekSpaceTaken * 100 + "%");
}

// Second Week
const secondWeekPlantCount = firstWeekPlantCount * growthRate;
const secondWeekSpace = secondWeekPlantCount * minSpace;
const secondWeekSpaceTaken = secondWeekSpace / area;

console.log("==============Second Week==============")
if ((secondWeekPlantCount / maxPlantCompacity) > 0.8){
    console.log("Week 1: The plants need to be pruned");
    console.log("Space taken: " + secondWeekSpaceTaken * 100 + "%");
} else if ((secondWeekPlantCount * minSpace) / area >= 0.5) {
    console.log("Week 1: The plants does not need to be pruned")
    console.log("Space taken: " + secondWeekSpaceTaken * 100 + "%");
} else {
    console.log("Week 1: You can plant more...plants")
    console.log("Space taken: " + secondWeekSpaceTaken * 100 + "%");
}

// Third Week

const thirdWeekPlantCount = secondWeekSpaceTaken * growthRate;
const thirdWeekSpace = thirdWeekPlantCount * minSpace;
const thirdWeekSpaceTaken = thirdWeekSpace / area;

console.log("==============Third Week==============")
if ((thirdWeekPlantCount / maxPlantCompacity) > 0.8){
    console.log("Week 1: The plants need to be pruned");
    console.log("Space taken: " + thirdWeekSpaceTaken * 100 + "%");
} else if ((thirdWeekPlantCount * minSpace) / area >= 0.5) {
    console.log("Week 1: The plants does not need to be pruned")
    console.log("Space taken: " + thirdWeekSpaceTaken * 100 + "%");
} else {
    console.log("Week 1: You can plant more...plants")
    console.log("Space taken: " + firstWeekSpaceTaken * 100 + "%");
}

// Part 2: Thinking Bigger
let plantCount = 100;
let loop = true;
let weekCount = 0;
let space = 0;
let radiusPart2 = 0;

while (loop){
    plantCount = plantCount * 2;
    weekCount++;
    console.log("===========Week " + weekCount + "==========")
    console.log("Plant Count: " + plantCount)
    console.log("Space taken: " + plantCount * minSpace)
    if(weekCount === 10){
        loop = false;
        space = plantCount * minSpace;
    }
}

radiusPart2 = Math.sqrt(space / PI);
console.log ("The radius of the expanded circular garden should be: " + radiusPart2.toFixed(1) + "m");

console.log("==========Part 3==========")

