import React from "react";
import { useState } from "react";

export default function AddWord() {
  const [sentence, setSentence] = useState("");
  const [guessSentence, setGuessSentence] = useState([]);
  const [letter, setLetter] = useState("");
  const [toggleInputs, setToggleInputs] = useState("sentenceInput");

 

  const handleLetterInput = (e) => {
    setLetter(e.target.value);
  };
  const checkLetterInSentenc = () => {
    console.log(letter)
    console.log(guessSentence)
    console.log(sentence)
    const gs = sentence.split("").map((l,i) => {
        if (l === letter) {
            return letter
        }
        return guessSentence[i]
    })

    setGuessSentence(gs)
    setLetter('')
  }



  const createSentence = () => {
    const gs = sentence.split("").map((l) => {
      if (l === " ") {
        return "| |";
      }
      return "_ ";
    });
    setGuessSentence(gs);
    setToggleInputs("letterInput");
  };
  const handleSentenceInput = (e) => {
    setSentence(e.target.value);
  };
  return (
    <div>
      {toggleInputs === "sentenceInput" ? (
        <span>
          <input
            type="text"
            name="inputSentence"
            placeholder="Unesite recenicu"
            value={sentence}
            onChange={handleSentenceInput}
          ></input>
          <button onClick={createSentence}>Kreiraj recenicu</button>
        </span>
      ) : (
        <span>
          <input
            type="text"
            value={letter}
            placeholder="Unesite slovo"
            onChange={handleLetterInput}
          ></input>
          <button onClick={checkLetterInSentenc}>Pokusaj slovo</button>
        </span>
      )}

      <div>
        <p>{guessSentence}</p>
      </div>
    </div>
  );
}

// import React from "react";
// import { useState } from "react";

// export default function AddWord() {
//   const [word, setWord] = useState("");
//   const [splitedWord, setSplitedWord] = useState([]);
//   const [char, setChar] = useState("");
//   const [firstInput, setInput] = useState("Uneiste recenicu");
//   const [comparison, setComparison] = useState([]);

//   const handleButton = () => {
//     if (firstInput === "Uneiste recenicu") {
//       const split = word.split("");
//       setSplitedWord(split);
//       setInput("unesite jedno slovo");
//       setWord("");
//     }

//     //ja hocu kada unesem slovo da proverim da li
//     //moja rec sadzri to slovo ako sadrzi da promenim novi niz tih pogodjenih karaktera
//     else {
//       if (splitedWord.includes(char)) {
//       }
//     }
//   };

//   console.log(comparison);
//   return (
//     <div>
//       <input
//         placeholder={firstInput}
//         onChange={(e) => {
//           if (firstInput === "Uneiste recenicu") {
//             setWord(e.target.value);
//           } else {
//             setChar(e.target.value);
//           }
//         }}
//       ></input>
//       <button onClick={handleButton}>confirm</button>
//       <div>
//         {splitedWord.map((ch) => (
//           <span>_ </span>
//         ))}
//       </div>
//     </div>
//   );
// }
