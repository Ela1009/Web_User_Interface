/*let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

niz.unshift(0);
console.log("dodaj element na početak niza:", niz);

niz.push(11);
console.log("dodaj element na kraj niza:", niz);

niz.splice(niz.length - 1, 0, 100);
console.log("dodaj element na predzadnje mjesto niza:", niz);

niz.splice(1, 1);
console.log("izbriši drugi element niza:", niz);

niz.pop();
console.log("izbriši zadnji element niza:", niz);

niz[1] = 10;
console.log("izmijeni drugi element:", niz);

let zbroj = niz.reduce((a, b) => a + b, 0);
console.log("zbroji sve elemente niza:", zbroj);

console.log("ispiši sve elemente niza koristeći se FOR petljom:");
for (let i = 0; i < niz.length; i++) {
    console.log(niz[i]);
}*/

/*let trgovina = [
    { naziv_proizvoda: "kava", godina_proizvodnje: 2024, cijena: 40, kolicina: 100, popust: 0 },
    { naziv_proizvoda: "aparat za kavu", godina_proizvodnje: 2020, cijena: 600, kolicina: 20, popust: 0 },
    { naziv_proizvoda: "filter za kavu", godina_proizvodnje: 2021, cijena: 20, kolicina: 3, popust: 0 }
];

let artikliIspod50 = trgovina.filter(artikal => artikal.cijena < 50);

console.log("Artikli jeftiniji od 50:");
artikliIspod50.forEach(artikal => console.log(artikal.naziv_proizvoda));

let ukupno = trgovina.reduce((ukupno, artikal) => ukupno + artikal.kolicina, 0);

console.log("Ukupna količina artikala u trgovini:", ukupno);

let nazivi = trgovina.map(artikal => artikal.naziv_proizvoda);

console.log("Nazivi artikala u trgovini:");
console.log(nazivi);*/

provjeriPozitivnost = broj => broj >= 0 ? true : false;

provjeriParnost = broj => broj % 2 === 0 ? "Paran" : "Neparan";

kubBroja = broj => broj ** 3;

ispisiPoruku = () => "Hello World!";

console.log(provjeriPozitivnost(-2)); 
console.log(provjeriParnost(10)); 
console.log(kubBroja(2)); 
console.log(ispisiPoruku()); 


