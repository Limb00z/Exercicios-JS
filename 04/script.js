let spaceship = {
    velocity: 0,
    speedUp: function (acceleration) {
        this.velocity += acceleration;
    }
};

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da Nave");
    spaceship.type = prompt("Informe o tipo da Nave");
    spaceship.maxVelocity = Number(prompt("Informe a velocidade maxima da Nave (km/s)"));
};

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"));
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert(`Velocidade mámixa ultrapassada. \nVelocidade da Nave: ${spaceship.velocity}km/s \nVelocidade máxima suportada: ${spaceship.maxVelocity}km/s`)
    };
};

function stop() {
    alert(`Nome: ${spaceship.name} \nTipo: ${spaceship.type} \nVelocidade da Nave: ${spaceship.velocity}km/s \nVelocidade Máxima da Nave: ${spaceship.maxVelocity}km/s`);
    spaceship.velocity = 0;
};

function showMenu() {
    let chosenOption;
    do {
        chosenOption = prompt("Você deseja: \n1 -Acelerar \n2-Parar");
        switch (chosenOption) {
            case "1":
                acelerate();
                break;
            case "2":
                stop()
                break;
            default:
                alert("Opção inválida")

        }
    } while (chosenOption != "2");
};

registerSpaceship();
showMenu();