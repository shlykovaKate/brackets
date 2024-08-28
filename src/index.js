module.exports = function check(str, bracketsConfig) {
  let arrStrElements = str.split('');
  let copyArrStrElements = str.split('');
  let check = false;
  

  arrStrElements.reduce((accumulator) => {
    let start = false;

    if (accumulator && accumulator.length) {
      for (let accIndex = 0; accIndex < accumulator.length; accIndex++ ) {      
        for (let bracketsConfigIndex = 0; bracketsConfigIndex < bracketsConfig.length; bracketsConfigIndex++ ) {
          for (let bracketsIndex = 0; bracketsIndex < bracketsConfig[bracketsConfigIndex].length; bracketsIndex++ ) {  

            if (accumulator[accIndex] === bracketsConfig[bracketsConfigIndex][bracketsIndex] && bracketsIndex === 1 && accumulator[accIndex-1] === bracketsConfig[bracketsConfigIndex][0]) {
   
                accumulator.splice(accIndex-1, 2);

                if (accumulator.length === 0) {
                  check = true;                  
                } else {
                  start = true;
                }
                break;
            }
          };

          if (start || check) break;
        };

        if (start || check) break;
      };
    }

    return accumulator;
  }, copyArrStrElements);

  return check;
};
