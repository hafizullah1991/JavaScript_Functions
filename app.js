console.log("Hello World!\n==========\n");
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdd(count)
{
    if(count<0){
        console.log("Invalid Count please enter positive number")
    }
    else{
    for(let i=1; i<= count; i++)
    if(i %2 !=0 ){
        console.log(i +" is odd");
    }
    else 
     {
        console.log(i);
    }
}
}
printOdd(20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(username , age)
{
if(age> 16 )
{
console.log(`Congrats ${username}, you can drive`);
}
else
{
console.log(`Sorry" + ${username}, " you cant drive wait until 16.`);
}
}
checkAge("Ahmad jamal", 10);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function printQuadrant(x, y)
{
if(x ==0 && y==0)
{
    console.log("The point is on origin.");
}
else if(x == 0 )
{
    console.log("The point is on y axis");
}
else if(y ==0){
    console.log("The point is on x auxis.");
}
else if(x >0 && y> 0)
{
    console.log("The point is on Quadrant 1");
}
else if ( x<0 && y<0 )
{
    console.log("The point is on Quadrant 3.");
}


else if ( x<0 && y> 0 )
{
 console.log("The point is on Quadrant 2");
}
else
{
    console.log("The point is on Quadrant 4");
    }
}
printQuadrant(-2,4);


//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function printTiangle(side1, side2, side3)
{
if(  side1 <=0 || side2 <=0 || side3<=0 )
{
    return "invalide triangle";
}
if (side1 + side2 <=side3 || side1 + side3 <= side2 || side2 + side3 <= side1)
{
    return "invalide triangle";
}
if(side1== side2 && side2 ==side3)
{
    return  "Equilateral";
}
else if(side1 == side2 || side1==side3 || side2 ==side3)
{
    return "Isosceles";
}

else {
    return "Scalene";
}
}
console.log()
console.log(printTiangle(3,3,1));

console.log("EXERCISE 5:\n==========\n");

function displayAvgPlan(plantLimit, day, usage)
{
    let periodlength = 30;
    let averageDailyUsage = usage/day;
    let remainingDays = 30 - day;
    let remainingData = plantLimit - usage;
    let maxDailyUsage = remainingData / remainingDays;

    console.log(`${day} days used, ${remainingDays} days remaining`)
    console.log(`Average daily use: ${averageDailyUsage.toFixed(3)} GB/day`);

    if(averageDailyUsage> maxDailyUsage)
    {
        let excessData= (averageDailyUsage - maxDailyUsage) * remainingDays;
        console.log(`you are exceeding your average daily use (${averageDailyUsage.toFixed(3)} GB/day)`);
        console.log(`continuing this high usage, you'll exceed your data plan by`);
        console.log(`${excessData.toFixed(1)} GB.`);
        console.log(`To stay below your data plan, use no more than ${maxDailyUsage.toFixed(3)} GB/day.`);
    } else {
        console.log(`You are within your data plan.`);
        console.log(`You can afford to use up to ${maxDailyUsage.toFixed(3)} GB/day on average.`);
    }
}
displayAvgPlan(10,10,3);
   
   
    

