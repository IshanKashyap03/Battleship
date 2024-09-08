const Ship = require('./Ship');

test('hit method increases numberOfTimesHit', () => {
    const ship = new Ship(3);
    ship.hit(); 
    ship.hit(); 
    expect(ship.numberOfTimesHit).toBe(2); 
});


test('sinking the ship', () => {
    const ship = new Ship(3); 
    ship.hit(); 
    ship.hit(); 
    ship.hit(); 
    expect(ship.hasSunk).toBe(true); 
});

test('testing isSunk method when true', () => {
    const ship = new Ship(3); 
    ship.hit(); 
    ship.hit(); 
    ship.hit(); 
    expect(ship.isSunk()).toBe(true); 
});

test('testing isSunk method when false', () => {
    const ship = new Ship(3); 
    ship.hit(); 
    ship.hit(); 
    expect(ship.isSunk()).toBe(false); 
});