// updates the display with hits, misses and messages for the user
let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');
    },

    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'miss');
    }

};

// updates the state of the game
//keeps track of ships - where they are, if they've been hit or sunk
const model = {
    bordSize: 7,
    numShips: 3,
    shipLenght: 3,
    shipSunk: 0,

    ships: [
        {locations: ["10", "20", "30"], hits: ["", "", ""]},
        {locations: ["32", "33", "34"], hits: ["", "", ""]},
        {locations: ["63", "64", "65"], hits: ["", "", "hit"]}
        ],

    fire: function(guess) {
        for(let i = 0; i < numShips.length; i++) {
            let ship = this.ships[i];
        }
    }
};



// glue everything together including
// by getting the player’s input and executing the game logic.