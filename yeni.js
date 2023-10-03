var score = document.querySelector('.score');
var inner = document.querySelector('.inner');
var startGame = document.querySelector('.startgame');
var img = document.querySelector('.image');
var wrong = document.querySelector('.wrong');
var playAgain = document.querySelector('.playagain');
var btnYes = document.querySelector('.yes');
var btnNo = document.querySelector('.no');
var h2 = document.querySelector('h2');
var tap = document.querySelector('p');
var question = [["An octopus has seven hearts", "f"], ["Infants have more bones than adults", "t"], ["South Africa has one capital","f"], ["Every country  in the world has a rectangular flag","f"],["A potato was the first vegetable to be planted on the space shuttle","t"], ["Greenland is the largest island in the world", "t"], ["Brazil is the only nation have played in every World Cup finals tournament","t"], ["The blue whale is the biggest animal to have ever lived", "t"], ["Sea otters have a favorite rock they use to break open food", "t"], ["Sharks are mammals", "f"], ["The hummingbird egg is the world'\s smallest bird egg", "t"], ["Pigs roll in the mud because they don'\t like being clean", "f"], ["Bats are blind", "f"], ["A dog sweats by panting its tongue", "f"], ["It takes a sloth two weeks to digest a meal", "t"], ["The largest living frog is the Goliath frog of West Africa", "t"], ["An ant can lift 1,000 times its body weight", "f"], ["When exiting a cave, bats always go in the direction of the wind", "f"], ["Galapagos tortoises sleep up to 16 hours a day", "t"], ["A monkey was the first non-human to go into space", "f"], ["The Atlantic Ocean is the biggest ocean on Earth", "f"], ["Mount Everest is the tallest mountain in the world", "t"], ["You can find the '\Desert of Death'\ in California", "f"], ["The total length of the Great Wall of China adds up to 13,171 miles", "t"], ["The two longest rivers in the world are the Mississippi and the Nile", "f"], ["There are more countries in South America than Africa", "f"], ["Alaska has the most active volcanoes of any state in the United States", "t"], ["China has the longest coastline in the world", "f"], ["Vatican City is the smallest country in the world", "t"], ["Venezuela is home to the world'\s highest waterfall", "t"], ["The human body has four lungs", "f"], ["Human skin regenerates every week", "f"], ["Humans lose an average of 75 strands of hair a month", "f"], ["The heart is the largest internal organ in the body", "f"], ["Most of the human brain is made of muscle", "f"], ["Taste buds can only be found on the tongue", "f"], ["The human eye can distinguish 10 million different colors", "t"], ["Humans lose more than 80% of heat from their feet", "f"], ["The human body is about 60% water", "t"], ["The most common blood type is 0- negative", "t"], ["Aladdin'\s character was based on Brad Pitt", "f"], ["Cheesecake comes from Italy", "f"], ["Pineapples grow on trees", "f"]];

setTimeout(function(){
shuffleArray(question);
var quesAmount = 0;
var win = 0;
var lose = 0;
var limit = 10;    

startGame.style.visibility = 'visible';
h2.innerText = question[quesAmount][0];

window.onkeypress = function (e) {
    if (e.key === "t" || e.key === "f") {
        tap.style.display = "none";

        if (quesAmount >= limit) {
            if (win > lose) {
                h2.innerText = "Game Over. You won";
                inner.style.backgroundColor = 'green';
            } else {
                h2.innerText = "Game Over. You lost";
                inner.style.backgroundColor = 'red';
            }
            playAgain.style.display = 'block';

            btnYes.onclick = function () {
                quesAmount = 0;
                win = 0;
                lose = 0;
                score.innerText = win;
                wrong.innerText = lose;
                inner.style.backgroundColor = 'gray';
                playAgain.style.display = "none";
                shuffleArray(question);
                Game(); 
            };

            btnNo.onclick = function () {
                playAgain.innerText = "See you later, alligator";
                playAgain.style.fontSize = "30px";
                inner.style.backgroundColor = 'gray';
            };
        } else {
            if (e.key === question[quesAmount][1]) {
                win++;
            } else {
                lose++;
            }

            score.innerText = win;
            wrong.innerText = lose;
            quesAmount++;

            if (quesAmount < limit) {
                h2.innerText = question[quesAmount][0];
            }
        }
    }
};

function Game() {
    quesAmount = 0;
    win = 0;
    lose = 0;
    startGame.style.visibility = 'visible';
    h2.innerText = question[quesAmount][0];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
Game();
},2000)
