/*let niz=[];

for (let i=0; i<10; i++){
    let randomBroj=Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    niz.push(randomBroj);
}

niz = niz.map(Broj => Math.round(Broj));

niz.sort((a, b) => a - b);

console.log('Sortirani niz: ' + niz);*/

/*function zbroji() {
    let zbrojParni = 0;
    let zbrojNeparni = 0;
  
    const zbrojiBroj = (broj) => {
      if (broj % 2 === 0) {
        zbrojParni += broj;
      } else {
        zbrojNeparni += broj;
      }
    };
  
    const dobijRezultat = () => {
      return { zbrojParni, zbrojNeparni };
    };
  
    return { zbrojiBroj, dobijRezultat };
  }
  
  const { zbrojiBroj, dobijRezultat } = zbroji();
  
  while (true) {
    const broj = parseInt(prompt("Unesite broj:"));
  
    if (broj === 0) {
      break;
    }
  
    zbrojiBroj(broj);
  }
  
  const { zbrojParni, zbrojNeparni } = dobijRezultat();
  console.log('Zbroj parnih brojeva: ' + zbrojParni);
  console.log('Zbroj neparnih brojeva: ' + zbrojNeparni);*/
  
/*function ispisiPoruku() {
    var poruka = "Programiranje nije tesko.";
    
    function vratiPoruku() {
      return poruka;
    }
    
    return vratiPoruku;
  }
  
  var ispis = ispisiPoruku();
  console.log(ispis()); */
  
  /*function sum(a){
    return (b, c) => {
    return a * b * c
    }
    }
    let x = sum(10);
    console.log(x(3,12));
    // ili
    console.log(sum(10)(3,12));*/

    //U prvom pristupu, funkcija koju vrati sum(10) se pohranjuje u varijablu x

    const pomnoziBrojeve = (a) => {
        const unutarnjaFunkcija = (b) => {
          if (b < 20) {
            return pomnoziBrojeve(a * b);
          } else {
            return a;
          }
        };
        return unutarnjaFunkcija;
      };
      
      console.log(pomnoziBrojeve(2)(3)(4)()); 
      console.log(pomnoziBrojeve(5)(6)(7)(8)()); 