const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
        [
            'Neuer', // Goalkeeper
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnabry',
            'Lewandowski',
        ],
        [
            'Burki', // Goalkeeper
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    },
};

// 1. Create player arrays
const [players1, players2] = game.players;

// 2. Goalkeeper and field players for Bayern Munich
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. All players in the game
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. Bayern Munich after substitutions
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Variables for odds
const { team1, draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6. Print goals function
function printGoals(...players) {
    console.log(`${players.length} goals were scored by:`);
    for (const player of players) {
        console.log(player);
    }
}

// Test data: use Davies, Muller, Lewandowski, Kimmich
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// Call with players from game.scored
printGoals(...game.scored);

// 7. Team more likely to win
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');