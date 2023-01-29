console.log(`Bem vindo(a) a Nave e nossa velocidade atual é 0` );
let spaceshipName = prompt("Como gostaria de chamar a nave?");
console.log(spaceshipName) //teste

let spaceshipVelocity = 0

let chosenOption;

function showMenu() {
    let option;
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que você deseja fazer?\n" + 
            "1- Acelerar a nave em 5km/s\n" +
            "2- Desacelerar a nave em 5km/s\n" +
            "3- Imprimir dados de bordo\n" +
            "4- Sair do programa")
            
    } 
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5;
    return newVelocity;
}

function slowDown(velocity) {
    let newVelocity = velocity - 5; 
    if (newVelocity < 0) {
        newVelocity = 0;
    }
    return newVelocity;
}

function printSpaceshiBoardData(name, velocity) {
    alert(`Espaçonave: ${name}\n Velocidade: ${velocity}km/s \n `)
}

do {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity);
            break;
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity);
            break;
        case "3":
            printSpaceshiBoardData(spaceshipName,spaceshipVelocity)
            break;
        default:
            alert('Encerrando o programa de bordo')
            break;
    }
} while (chosenOption != "4");