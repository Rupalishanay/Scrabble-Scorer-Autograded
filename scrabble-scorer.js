// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

  
  function initialPrompt() 
  { console.log("Let's play some Scrabble! Enter a word:"); }

function simpleScorer(word) 
{ return word.length; } 

function vowelBonusScorer(word)
{
 word=word.toUpperCase();
 let score=0;
 for(let i=0;i<word.length;i++)
 {
   if('AEIOU'.includes(word[i]))
   {
      score +=3;
   }
   else{score+=1;}
 }
 return score;
}

function scrabbleScorer(word)
{
   word=word.toLowerCase();
   let score=0;
   for(let i=0;i<word.length;i++)
   {
      score+=newPointStructure[word[i]];
   }
   return score;
}

const scoringAlgorithms=[{name:"Simple Score",description:"Each letter is worth 1 point.",scorerFunction:simpleScorer},{name:"Vowel Bonus Score",description:"Vowels are 3 pts,consonants are 1pt.",scorerFunction:vowelBonusScorer},{name:"Scrabble Score",description:"The traditional scoring algorithm.",scorerFunction:scrabbleScorer}];

function scorerPrompt() 
{
console.log("Which scoring algorithm would you like to use? ");
console.log("0=Simple score:Each letter is worth 1 point.");
console.log("1=Vowel Bonus Score:Vowels are worth 3 points.");
console.log("2-Scrabble score:Uses scrabble point system.");
const selectedAlgorithm=parseInt(input.question("Enter 0,1, or 2: "));
return selectedAlgorithm;
}

function transform(oldPointStructure) 
{  
   {  
      let newPointStructure={a: 1,
         e: 1,
         i: 1,
         o: 1,
         u: 1,
         l: 1,
         n: 1,
         r: 1,
         s: 1,
         t: 1,
         d: 2,
         g: 2,
         b: 3,
         c: 3,
         m: 3,
         p: 3,
         f: 4,
         h: 4,
         v: 4,
         w: 4,
         y: 4,
         k: 5,
         j: 8,
         x: 8,
         q: 10,
         z: 10};

      for(letter in oldPointStructure)
      {
         let i=0;
          console.log(letter + ", " + oldPointStructure[letter]);
         newPointStructure[oldPointStructure[letter][i].toLowerCase()]=parseInt(letter);
      }
      return newPointStructure;
   };
}
const newPointStructure=transform(oldPointStructure);
function runProgram() 
{
   const word=input.question("Enter a word to score:");
   console.log(oldScrabbleScorer(word));
  const selectedAlgorithm=scorerPrompt();
  const scoringAlgorithms=[{name:"Simple Score",description:"Each letter is worth 1 point.",scoringFunction:simpleScorer},{name:"Vowel Bonus Score",description:"Vowels are 3 pts,consonants are 1pt.",scoringFunction:vowelBonusScorer},{name:"Scrabble Score",description:"The traditional scoring algorithm.",scoringFunction:scrabbleScorer}];
  const selectedScorer=scoringAlgorithms[selectedAlgorithm];
  const score=selectedScorer.scoringFunction(word);
  console.log(`selectedAlgorithm name:'${selectedScorer.name}`);
  console.log(`scoringFunction result: ${score}`); 
}  

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
