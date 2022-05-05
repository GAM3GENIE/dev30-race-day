let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = true;

let runAge = 55;

if(runAge >= 18 && regEarly == true){
    raceNumber += 1000;
}

if(runAge >= 18 && regEarly == true){
    console.log(`You will race at 9:30am and your race number is ${raceNumber}`);
}else if(runAge >=18 && regEarly == false){
    console.log(`You will race at 11:00am and your race number is ${raceNumber}`);
}else{
    console.log(`You will face at 12:30pm and your race number is ${raceNumber}`);
}