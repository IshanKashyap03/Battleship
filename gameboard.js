const Ship = require('./Ship');

class Gameboard {
    constructor(){
        this.board = [];
        this.ships = [];
        this.missedShots = [];
    }

    placeShips(length, coordinates){
        const ship = new Ship(length);
        this.ships.push({ship: ship, coordinates: coordinates});
        this.board.push(...coordinates); //copies the coordinates array to board.
    }
    
    receiveAttack(x,y){
        const target = this.board.find(position => position[0]===x && position[1] === y);
        if(target){
            const shipData = this.ships.find(data =>
                data.coordinates.some(coord => coord[0] === x && coord[1] === y)
            );
            shipData.ship.hit();
            return 'hit';
        }else{
            this.missedShots.push([x, y]);
            return 'miss';
        }
    }

    areAllShipsSunk(){
        return this.ships.find(shipData => shipData.ship.hasSunk);
    }
}

module.exports = Gameboard;