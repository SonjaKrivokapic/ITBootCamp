let pokemon1 = {
    ime: 'Bulbsaur',
    vrsta: 'Grass',
    Sposobnosti: ['Aroma Veil', 'Blaze, Baterry', 'Air Lock'],
    Karakteristike: {napad: 45, odbrana: 93, brzina: 40}
}
let  pokemon2 = {
    ime: 'Nidoran',
    vrsta: 'poison',
    Sposobnosti: ['Poison Point','Hustle','Rivalry'],
    Karakteristike: {napad: 58, odbrana: 30, brzina: 7}
}                                                        
let pokemon3 = {
    ime: 'Sandslash',
    vrsta: 'Ground',
    Sposobnosti: ['Sand veil', 'Sand Rush', 'Snow Cloack'],
    Karakteristike: {napad: 20, odbrana:50 , brzina: 100}
}
let pokemon4 = {
    ime: 'Raichu',
    vrsta: 'Electric',
    Sposobnosti: ['Static', 'Surge Surfer', 'Lightning Rod'],
    Karakteristike: {napad: 60, odbrana: 90, brzina: 50}
}

let pokemoniNiz = [pokemon1, pokemon2, pokemon3, pokemon4]


  


    function najjaci(pokemoniNiz){
        pokemoniNiz.sort((a, b) => b.Karakteristike.napad - a.Karakteristike.napad);
        return pokemoniNiz;
        };
        console.log(pokemoniNiz)
        
    
