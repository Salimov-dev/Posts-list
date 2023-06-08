 // START generate random ID for collapse
 const generateRandomLetters = () => {
    let length = 3;
    let result = " ";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

 export let lettersRandomId = (
    generateRandomLetters() + Math.round(Math.random() * (100 - 1) + 1)
  )
    .replace(" ", "")
    .trim();
  // END generate random ID for collapse
