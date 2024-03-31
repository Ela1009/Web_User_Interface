//1. ZADATAK

// Arrow funkcija
const ocjena_arrow = (k1, k2, sem) => k1 * 0.42 + k2 * 0.42 + sem * 0.16;

// Currying funkcija
const ocjena_currying = k1 => k2 => sem => k1 * 0.42 + k2 * 0.42 + sem * 0.16;

console.log(`Postotak ostvaren na kolegiju (arrow funkcija): ${ocjena_arrow(50, 80, 80)}`);
console.log(`Postotak ostvaren na kolegiju (currying funkcija): ${ocjena_currying(50)(80)(80)}`);

//2. ZADATAK

// Arrow funkcija
const rezultat_arrow = (kolegij) => (ostvareniBodovi) => (ukupniBodovi) => {
    const postotak = (ostvareniBodovi / ukupniBodovi) * 100;
    console.log(`Iz kolegija ${kolegij} ostvarili ste ${postotak.toFixed(2)}%`);
};

// Currying funkcija
const rezultat_currying = (kolegij) => {
    return (ostvareniBodovi) => {
        return (ukupniBodovi) => {
            const postotak = (ostvareniBodovi / ukupniBodovi) * 100;
            console.log(`Iz kolegija ${kolegij} ostvarili ste ${postotak.toFixed(2)}%`);
        };
    };
};

rezultat_arrow("PWKS")(25)(35);
rezultat_currying("PWKS")(25)(35);

//3. ZADATAK

const zadnja_parna_znamenka = broj => {
    let zadnjaZnamenka = broj % 10;
    if (zadnjaZnamenka % 2 === 0) {
        return zadnjaZnamenka;
    } else {
        while (zadnjaZnamenka % 2 !== 0 && zadnjaZnamenka > 0) {
            broj = Math.floor(broj / 10);
            zadnjaZnamenka = broj % 10;
        }
        return zadnjaZnamenka;
    }
};

// Currying funkcija koja množi brojeve sa zadnjom parnom znamenkom
const mnozi = broj => {
    if (broj === undefined) {
        return 1; // Kada su svi brojevi pomnoženi, vraćamo 1
    } else {
        return faktor => {
            return mnozi(faktor * zadnja_parna_znamenka(broj));
        };
    }
};

const rezultat = mnozi(2)(5)(13)(10)(14)(177)(4)(0)();
console.log(rezultat); 

//4. ZADATAK

// Definicija konstruktora Kolegij
function Kolegij(godina, semestar, kol1, kol2) {
    this.godina = godina;
    this.semestar = semestar;
    this.kol1 = kol1;
    this.kol2 = kol2;
    this.ocjena_rez = null; // Inicijalno postavljamo na null, ocjena će biti izračunata pomoću metode ocjena()
}

// Metoda ocjena() za izračun postotka riješenosti
Kolegij.prototype.ocjena = function() {
    this.ocjena_rez = this.kol1 * 0.5 + this.kol2 * 0.5;
    return this.ocjena_rez;
};

// Metoda info() za ispis informacija o kolegiju
Kolegij.prototype.info = function() {
    console.log(`Student na predmetu PWKS, ${this.godina}. godina, ${this.semestar}. semestar, ostvario je ${this.ocjena_rez}%`);
};

// Kreiranje objekata pomoću konstruktora
const kolegij1 = new Kolegij(3, 2, 70, 85);
const kolegij2 = new Kolegij(2, 1, 60, 75);

// Pozivanje metoda ocjena() i info() na oba objekta
console.log("Ocjena kolegija 1:", kolegij1.ocjena());
kolegij1.info();

console.log("Ocjena kolegija 2:", kolegij2.ocjena());
kolegij2.info();

//5. ZADATAK

// Definicija konstruktora Kolegij
function Kolegij(godina, semestar, kol1, kol2, ime, prezime, status) {
    this.godina = godina;
    this.semestar = semestar;
    this.kol1 = kol1;
    this.kol2 = kol2;
    this.ocjena_rez = null; // Inicijalno postavljamo na null, ocjena će biti izračunata pomoću metode ocjena()
    this.ime = ime;
    this.prezime = prezime;
    this.status = status;
}

// Metoda ocjena() za izračun postotka riješenosti
Kolegij.prototype.ocjena = function() {
    this.ocjena_rez = this.kol1 * 0.5 + this.kol2 * 0.5;
    return this.ocjena_rez;
};

// Metoda info() za ispis informacija o kolegiju
Kolegij.prototype.info = function() {
    console.log(`Student ${this.ime} ${this.prezime} ima ${this.ocjena_rez}%`);
};

// Kreiranje objekata pomoću konstruktora
const kolegij1 = new Kolegij(3, 2, 70, 85, "Ivan", "Ivic", "redovan");
const kolegij2 = new Kolegij(2, 1, 60, 75, "Ana", "Anic", "izvanredni");

// Pozivanje metoda ocjena() i info() na oba objekta
console.log("Ocjena kolegija 1:", kolegij1.ocjena());
kolegij1.info();

console.log("Ocjena kolegija 2:", kolegij2.ocjena());
kolegij2.info();

//6. ZADATAK

// Definicija konstruktora Kolegij
function Kolegij(godina, semestar, kol1, kol2) {
    this.godina = godina;
    this.semestar = semestar;
    this.kol1 = kol1;
    this.kol2 = kol2;
    this.ocjena_rez = null; // Inicijalno postavljamo na null, ocjena će biti izračunata pomoću metode ocjena()
}

// Metoda ocjena() za izračun postotka riješenosti
Kolegij.prototype.ocjena = function() {
    this.ocjena_rez = this.kol1 * 0.5 + this.kol2 * 0.5;
    return this.ocjena_rez;
};

// Metoda info() za ispis informacija o kolegiju
Kolegij.prototype.info = function() {
    console.log(`Student na predmetu PWKS, ${this.godina}. godina, ${this.semestar}. semestar, ostvario je ${this.ocjena_rez}%`);
};

// Kreiranje objekata pomoću konstruktora
const kolegij1 = new Kolegij(3, 2, 70, 85);
const kolegij2 = new Kolegij(2, 1, 60, 75);

// Pozivanje metoda ocjena() i info() na oba objekta
console.log("Ocjena kolegija 1:", kolegij1.ocjena());
kolegij1.info();

console.log("Ocjena kolegija 2:", kolegij2.ocjena());
kolegij2.info();


