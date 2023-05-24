function createDragon(name, rider, temperment) {
  var dragon =
   { 
    hungry: true,
    name: name, 
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    };
  return dragon
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
}


function eat(dragon) {
  console.log('dragon: ', dragon)
  console.log(dragon)
  dragon.timesEaten = dragon.timesEaten + 1
    if (dragon.timesEaten < 3) {
      return {
        timesEaten: dragon.timesEaten,
        hungry: true,
        }
      } else {return {
        timesEaten: dragon.timesEaten,
        hungry: false,
        } 
      }
    }

  
  
  
  
//   for (var i = 0; i < 5; i++) {
//     dragon.timesEaten = i;
//     console.log('dragon.timesEaten: ', dragon.timesEaten)
//     console.log(dragon);
//     if (dragon.timesEaten >= 3) {
//       return dragon.hungry = 'false';
//     }
//   }
// }


  // dragon.timesEaten = dragon.timesEaten + 1
  // if (dragon.timesEaten < 3) {
  //   return dragon.hugry = true;
  // }

  
    
  
  


// function findFireBreathers(dragons) {
//   console.log(dragons)
//   for (var i = 0; i < dragons.length; i ++) {
//     var aggDragons = [];
//     console.log('dragons[i]: ', dragons[i]);
//     if (dragons[i].includes === 'true') {
//       return aggDragons.push(dragons[i]);
//     }
    
//   }
// }




module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  // findFireBreathers
}

