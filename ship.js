class Ship {
    constructor(length){
        this.length = length;
        this.numberOfTimesHit = 0;
        this.hasSunk = false;
    }

    hit(){
        this.numberOfTimesHit++;
        this.isSunk();
    }

    isSunk(){
        if(this.numberOfTimesHit >= this.length){
            this.hasSunk = true;
        }
        return this.hasSunk;
    }
}

module.exports = Ship;