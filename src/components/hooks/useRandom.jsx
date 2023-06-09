import React from "react";

const useRandom = () => {
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

  let randomId = (
    generateRandomLetters() + Math.round(Math.random() * (100 - 1) + 1)
  )
    .replace(" ", "")
    .trim();

  return randomId;
};

export default useRandom;
