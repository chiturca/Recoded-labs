const gameObject = () =>{
    
    return {
        home:{
            teamName: "Brooklyn Nets",
            colors: ["Black","White"],
            players: {
                "Alan Anderson": {Number: 0, Shoe: 16, Points: 22, Rebounds: 12, Assists: 12, Steals: 3, Blocks: 1, SlumDunks: 1 },
                "Reggie Evans": {Number: 30, Shoe: 14, Points: 12, Rebounds: 12, Assists: 12, Steals: 12, Blocks: 12, SlumDunks: 7 },
                "Brook Lopez": {Number: 11, Shoe: 17, Points: 17, Rebounds: 19, Assists: 10, Steals: 3, Blocks: 1, SlumDunks: 15 },
                "Mason Plumlee": {Number: 1, Shoe: 19, Points: 26, Rebounds: 12, Assists: 6, Steals: 3, Blocks: 8, SlumDunks: 5 },
                "Jason Terry": {Number: 31, Shoe: 15, Points: 19, Rebounds: 2, Assists: 2, Steals: 4, Blocks: 11, SlumDunks: 1 }
            }
        },
        
        away:{
            teamName: "Charlotte Hornets",
            colors: ["Turquoise","Purple"],
            players: {
                "Jeff Adrien": {Number: 4, Shoe: 18, Points: 10, Rebounds: 1, Assists: 1, Steals: 2, Blocks: 7, SlumDunks: 2 },
                "Bismak Biyombo": {Number: 0, Shoe: 16, Points: 12, Rebounds: 4, Assists: 7, Steals: 7, Blocks: 15, SlumDunks: 10 },
                "DeSagna Diop": {Number: 2, Shoe: 14, Points: 24, Rebounds: 12, Assists: 12, Steals: 4, Blocks: 5, SlumDunks: 5 },
                "Ben Gordon": {Number: 8, Shoe: 15, Points: 33, Rebounds: 3, Assists: 2, Steals: 1, Blocks: 1, SlumDunks: 0 },
                "Brendan Haywood": {Number: 33, Shoe: 15, Points: 6, Rebounds: 12, Assists: 12, Steals: 22, Blocks: 5, SlumDunks: 12 }
            }
        }
    }
};

console.log(gameObject());


function numPointsScored(playerName){
    let object = gameObject();

    let getPlayersHome = ()=> {for(let playersHome in object.home){
        return (playersHome,object.home['players'])
        }
    }

    let getPlayersAway = ()=>{ for(let playersAway in object.away){
        return (playersAway,object.away['players'])
        }
    }

    let players1 = getPlayersHome();
    let players2 = getPlayersAway();
    let players = {...players1, ...players2};
  
  return players[playerName].Points;
};

console.log (numPointsScored("Alan Anderson"))


function shoeSize(playerName){
    let object = gameObject();

    let getPlayersHome = () => {for(let playersHome in object.home){
        return (playersHome,object.home['players'])
    }}

    let getPlayersAway = () => { for(let playersAway in object.away){
        return (playersAway,object.away['players'])
    }}

    let players1 = getPlayersHome();
    let players2 = getPlayersAway();
    let players = {...players1, ...players2};

  return players[playerName].Shoe;
};

console.log(shoeSize("Bismak Biyombo"));


function teamColors(teamName){
    let object = gameObject();

  return object[teamName].colors
};

console.log(teamColors('away'))


function teamNames(teamName){
    let object = gameObject();
    let names = object[teamName].players;
  
  return Object.keys(names);
};

console.log(teamNames('away'));


function playerNumbers(teamName){
    let object = gameObject();
    let names = object[teamName].players;
    let namesArr = Object.values(names);
    let numbersArr =  namesArr.map(obj => obj.Number);
  
  return numbersArr;
};

console.log(playerNumbers('away'))


function playerStats(playerName){
    let object = gameObject();

    let getPlayersHome = () => {for(let playersHome in object.home){
        return (playersHome, object.home['players'])
    }}

    let getPlayersAway = () => { for(let playersAway in object.away){
        return (playersAway, object.away['players'])
    }}
  
    let players1 = getPlayersHome();
    let players2 = getPlayersAway();
    let players = {...players1, ...players2};
    let state = players[playerName];
  
  return state;
}

console.log(playerStats('Jason Terry'));


function bigShoeRebounds(){
    let object = gameObject();

    let getPlayersHome = ()=> {for(let playersHome in object.home){
        return (playersHome,object.home['players'])
    }}

    let getPlayersAway = ()=>{ for(let playersAway in object.away){
        return (playersAway,object.away['players'])
    }}

    let players1 = getPlayersHome();
    let players2 = getPlayersAway();
    let players = {...players1, ...players2};
    let state = Object.values(players);
    let maxShoe =  Math.max(...state.map(({ Shoe }) => Shoe));
    let statearr = state.filter(obj=>{return obj.Shoe === maxShoe})
    let rebounds = statearr.map(obj=>{return obj.Rebounds}) 
  
  return rebounds;
}

console.log(bigShoeRebounds());


//-----------------------------------------------------------------
function mostPointsScored(){
    let object = gameObject();

    let getPlayersHome = ()=> {for(let playersHome in object.home){
        return (playersHome,object.home['players'])
    }}

    let getPlayersAway = ()=>{ for(let playersAway in object.away){
        return (playersAway,object.away['players'])
    }}

    let players1 = getPlayersHome();
    let players2 = getPlayersAway();

    let players = {...players1, ...players2};
    let state = Object.values(players);
    
    let maxPoints =  Math.max(...state.map(({ Points }) => Points));
    
    let maxPointsObj = state.find(obj => {
        return obj.Points === maxPoints
    });


    function getKeyByValue(players, maxPointsObj) {
        return Object.keys(players).find(key => players[key] === maxPointsObj);
    };

    let mostPointsScoredPlayerName = getKeyByValue(players, maxPointsObj);
  
  return mostPointsScoredPlayerName; 
};

console.log(mostPointsScored());


function winningTeam(){
    let object = gameObject();

    let getPlayersHome = ()=> {for(let playersHome in object.home){
        return (playersHome,object.home['players'])
    }}

    let getPlayersAway = ()=>{ for(let playersAway in object.away){
        return (playersAway,object.away['players'])
    }}

    let players1 = getPlayersHome();
    let players2 = getPlayersAway();
    // let players = {...players1, ...players2};
    let state1 = Object.values(players1);
    let state2 = Object.values(players2);
    let pointsHome = state1.map(obj=>obj.Points)
    let pointsAway = state2.map(obj=>obj.Points)

    let homeResult = pointsHome.reduce((accumulator, currentValue,) => {return accumulator + currentValue
    }, 0);

    let awayResult = pointsAway.reduce((accumulator, currentValue,) => {return accumulator + currentValue
    }, 0);
  
    let result;
        if(homeResult>awayResult){return result = `${object.home.teamName} Team win`}
        else if(homeResult<awayResult){return result = `${object.away.teamName} Team win`}

  return result;
}

console.log(winningTeam());

function playerWithLongestName(){
    let object = gameObject();

    let getPlayersHome = ()=> {for(let playersHome in object.home){
        return (playersHome,object.home['players'])
    }}

    let getPlayersAway = ()=>{ for(let playersAway in object.away){
        return (playersAway,object.away['players'])
    }}

    let players1 = getPlayersHome();
    let players2 = getPlayersAway();
    let players = {...players1, ...players2};
    let allPlayersNames = Object.keys(players);
    let longestName =  allPlayersNames.reduce((a, b)=> a.length > b.length ? a : b);

  return longestName;
}

console.log(playerWithLongestName())


//-------------------------------------------------------------------
function doesLongNameStealATon() {
    let object = gameObject();

    let getPlayersHome = () => {for(let playersHome in object.home){
        return (playersHome,object.home['players'])
    }}

    let getPlayersAway = () => {for(let playersAway in object.away){
        return (playersAway,object.away['players'])
    }}

    let players1 = getPlayersHome();
    let players2 = getPlayersAway();
    let players = {...players1, ...players2};

    let allPlayersNames = Object.keys(players);
    let longestName =  allPlayersNames.reduce((a, b)=> a.length > b.length ? a : b);
    // console.log(longestName)

    
    let state = Object.values(players);
    let maxSteals =  Math.max(...state.map(({ Steals }) => Steals));
    
    let maxStealsObj = state.find(obj => {
        return obj.Steals === maxSteals
    });


    function getKeyByValue(players, maxStealsObj) {
        return Object.keys(players).find(key => players[key] === maxStealsObj);
    };

    let maxStealsPlayerName = getKeyByValue(players, maxStealsObj);
    // console.log(mostStealsPlayerName)

    if (longestName===maxStealsPlayerName) {
        return true;
    }else{
        return false;
    }
}

console.log(doesLongNameStealATon())