let dolgozokNeve = [];
let dolgozokKora = [];
let dolgozokFizetese = [];
let dolgozokBeosztasa = [];

Dolgozok.forEach((element) => {
    dolgozokNeve.push(element.nev);
    dolgozokKora.push(element.kor);
    dolgozokFizetese.push(element.fizetes);
    dolgozokBeosztasa.push(element.beosztas);
});

function DolgozokSzama(parameter) {
    if (parameter == undefined) {
        return 0;
    } else {
        return parameter.length;
    }
}

function AtlagKor(parameter) {
    if (parameter == undefined) {
        return 0;
    } else {
        var sum = 0;
        for (var i = 0; i < parameter.length; i++) {
            sum += parameter[i];
        }
        sum = sum / parameter.length;
        sum = Math.round(sum);
        return sum;
    }
}

function AtlagFizetes(parameter) {
    var sum = 0;
    for (var i = 0; i < parameter.length; i++) {
        sum += parameter[i];
    }
    sum = sum / parameter.length;
    sum = Math.round(sum);
    return sum;
}

function LegkisebbFizetes(parameter) {
    const lowest = Math.min(...parameter);
    return lowest;
}

function LegnagyobbFizetes(parameter) {
    const highest = Math.max(...parameter);
    return highest;
}

console.log(DolgozokSzama(dolgozokNeve));
console.log(AtlagKor(dolgozokKora));
console.log(AtlagFizetes(dolgozokFizetese));
console.log(LegkisebbFizetes(dolgozokFizetese));
console.log(LegnagyobbFizetes(dolgozokFizetese));

/*console.log( + "-en dolgoznak a cégnél");

console.log(sum);*/
