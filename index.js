import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

            function getFinals(data) {


            const result = data.filter(item => item.Stage === "Final");

            console.log(result);
                

            };
            getFinals(fifaData)
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

        function getYears(data) {

            const years = data.map(x => x.Year);

            console.log(years);

        };
            getYears(fifaData);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

        function getWinners(data) {

            let winners = data.map(x => {

                if (x["Home Team Goals"] > x["Away Team Goals"] ) 
                        {return console.log(x["Home Team Name"])}
                
              }) 
            return winners;                    
        }
    
        getWinners(fifaData);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data) {
        
    let winnerYears = data.map(x => {

        let year = x["Year"]
        let country = x["Away Team Name"]

            if (x["Home Team Goals"] > x["Away Team Goals"] ) 
                    {
                      
                        console.log(`In ${year}, ${country} won the world cup!`)
                    }
            
        }) 
      return winnerYears;  
};

getWinnersByYear(fifaData);

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, team) {

    let teamwins = 0;

        let howmanywins = data.map(x => {

                if (x["Home Team Name"] === team){

                    if (x["Home Team Goals"] > x["Away Team Goals"] ) {

                        teamwins = teamwins + 1;
                     }
                }
        })

        if (teamwins > 0){                       
             console.log(`${team} has ${teamwins} `) 
             }
    
    }

    getCountryWins(fifaData, 'Brazil');

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

    function getAverageGoals(data) {

            var arrayhome = [];
            let arrayaway = [];
        
            for (let i = 0; i < data.length; i++) {
                let object = data[i]
                arrayhome.push(object["Home Team Goals"])
                arrayaway.push(object["Away Team Goals"])

            }

            let averagehome = arrayhome.reduce(function(a, b){
                return a + b / arrayhome.length;
                }, 0);

            let averageaway = arrayaway.reduce(function(a, b){
                return a + b / arrayaway.length;
                }, 0);

            console.log(`Average home goals are ${averagehome} Average away goals are ${averageaway}`); 

    };

getAverageGoals(fifaData);


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
