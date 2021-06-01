// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    let newArr = []
    let strArr = str.split(' ')
    strArr.forEach(word => {
        let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()    
        newArr.push(capWord)    
    })
    newArr = newArr.join(' ')
    return newArr
  }
  
  console.log(titleCase("I'm a little tea pot"));
  console.log(titleCase("sHoRt AnD sToUt"));
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
  console.log(titleCase("all wE havE to dEcidE is what to do with the timE that is givEn us"));
  console.log(titleCase("IT maTTers noT whaT someone is born, buT whaT They grow To be"));
  console.log(titleCase("There is SOME GOOD in this woRLD, and iT’s worTh fighTing for"));
  console.log(titleCase("BEWARE; for I AM fearless, and therefore POWERFUL"));
  console.log(titleCase("The ONLY WAY out of the labyrinth OF suffering IS TO forgive"));
  console.log(titleCase("Love is or it ain’t. Thin love ain’t love at all"));
  console.log(titleCase("Whatever our souls are made of, his and mine are the same"));
  console.log(titleCase("Life is to be lived, not controlled; and humanity is won by continuing to play in face of certain defeat."));
  console.log(titleCase("It does not do to dwell on dreams and forget to live"));
  console.log(titleCase("The world breaks everyone, and afterward, many are strong at the broken places"));