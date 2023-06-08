animallijst = ['lion', 'lobster', 'seagull', 'skunk', 'turtle', 'bear', 'deer', 'frog', 'horse'];
animalLijst = shuffle(animalLijst); 
function shuffle(array) {
    let currentIndex = array. length, randomIndex; 
    // While there remain elements to shuffle.

     while (currentIndex != 0) { 
        // Pick a remaining element. 
        randomIndex = Math. floor (Math. random () * currentIndex);
         currentIndex--;
        // And swap it with the current element. 
        [array [currentIndex], array [randomIndex]] = [array [randomIndex], array [currentIndex11]];
     }
    return array;
    }