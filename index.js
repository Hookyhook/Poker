var games = [];

newGame();

function newGame(){
    var deck = createDeck();
    var table = createTable(deck);
    var gameid = 1;
    var creator = 1;
    var members = [];
    var member = {meberid: creator, hand: dealHand(deck)};
    members.push(member);
    var game = {gameid: gameid, creatorid: creator, members: members, deck: deck, table: table};
    games.push(game);
    console.log(games);
}

function createDeck(){
    var d = [];
    var colors = [":diamonds:", ":clubs:", ":spades:", ":hearts:"];
    var numbers = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    for (const color of colors) {
        for (const number of numbers) {
            d.push(color+" "+number);
        }
    }
    for (let index = 0; index < 1000; index++) {
        d.sort((a,b)=> 0.5-Math.random());
    }
    return d;
}

function createTable(d){
    return {card1: d.pop(), card2: d.pop(), card3: d.pop()};
}

function dealHand(d){
    return {card1: d.pop(), card2: d.pop()};
}

function addPlayer(){
    
}
