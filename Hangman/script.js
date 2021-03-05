const words =[];
let selectedWord ;
generateWords();

const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popuo = document.getElementById('popup-container');
const notifications = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

// const words = ['application','programming','interface','wizard'];
// .then(data => data.json()).then(res => words.push(res));

// console.log(b);




 function generateWords(){
    fetch('https://random-word-api.herokuapp.com/word?number=10')
    .then (res => {
        // console.log(res);
        return res.json();
    }
    )
    .then(data => {
        // console.log(data);
        words.push(data);
    });
    // const data =  res.json();
    // words.push(...data);
    selectedWord = words[Math.floor(Math.random() * words.length)];
    console.log(words.forEach(el => typeof el));
    console.log(typeof words);
    // console.log(selectedWord);
}
// console.log(selectedWord);

