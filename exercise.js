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

//area check
// console.log('Area is ' + area);

if ((firstWeekPlantCount / maxPlantCompacity) < 0.8){
    console.log("First wee plant count: " + firstWeekPlantCount)
    console.log("The plant needs ot be pruned");
}