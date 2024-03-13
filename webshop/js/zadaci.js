//alert("Moj prvi JS program!");

//console.log("Moj prvi JS program");

/*function aritmetickaSredina() {
    var broj1 = parseInt(prompt("Unesite prvi broj:"));
    var broj2 = parseInt(prompt("Unesite drugi broj:"));
    var broj3 = parseInt(prompt("Unesite treći broj:"));

    if (broj1 < 0 || broj2 < 0 || broj3 < 0 || isNaN(broj1) || isNaN(broj2) || isNaN(broj3)) {
        console.log("Molimo unesite prirodne brojeve.");
        return;
    }

    var aritmetickaSredina = (broj1 + broj2 + broj3) / 3;
    console.log("Aritmetička sredina unesenih brojeva je: " + aritmetickaSredina);
}

aritmetickaSredina();*/

/*function operacije(broj1, broj2, operacija) {
    var rezultat;
    
    if (operacija === '+') {
        rezultat = broj1 + broj2;
        console.log("Zbroj je " + rezultat);
    } else if (operacija === '-') {
        rezultat = broj1 - broj2;
        console.log("Razlika brojeva je " + rezultat);
    } else if (operacija === '*') {
        rezultat = broj1 * broj2;
        console.log("Umnožak brojeva je " + rezultat);
    } else if (operacija === '/') {
        rezultat = broj1 / broj2;
        console.log("Količnik brojeva je " + rezultat);
    } else {
        console.log("Operacija ne postoji.");
        return;
    }
}

operacije(6, 2, '+');
operacije(6, 2, '-');
operacije(6, 2, '*');
operacije(6, 2, '/');*/

/*function prvaZnamenka(broj) {
    
    while (broj >= 10) {
        broj = parseInt(broj / 10);
    }
    return broj;
}


var deseteroznamenkastiBroj = 1254192518;
var prva = prvaZnamenka(deseteroznamenkastiBroj);
console.log("Prva znamenka broja je " + prva);*/

/*function godisnjeDoba(mjesec) {
    if (mjesec >= 1 && mjesec <= 3) {
        alert("Zima");
    } else if (mjesec >= 4 && mjesec <= 6) {
        alert("Proljeće");
    } else if (mjesec >= 7 && mjesec <= 9) {
        alert("Ljeto");
    } else if (mjesec >= 10 && mjesec <= 12) {
        alert("Jesen");
    } else {
        alert("Uneseni mjesec nije ispravan.");
    }
}

var doba = parseInt(prompt("Unesite mjesec"));
godisnjeDoba(doba);*/

function brojPojavljivanja(n, z) {
    var broj = n;
    var brojac = 0;

    while (broj > 0) {
        var zadnjaZnamenka = broj % 10;
        if (zadnjaZnamenka === z) {
            brojac++;
        }
        broj = parseInt(broj / 10);
    }

    console.log("U broju imamo " + brojac + " pojavljivanja broja.");
}

var n = parseInt(prompt("Unesite broj:"));
var z = parseInt(prompt("Unesite znamenku:"));
brojPojavljivanja(n, z);




