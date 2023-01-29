function slowDown(velocity, printer) {
    let deceleration = 20;
    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration;
    }
    alert('Nave parada e comportas abertas!')
}

let spaceshipVelocity = 150;

slowDown(spaceshipVelocity, velocity => /*console.log*/alert(`Velocidade atual: ${velocity}`))