
const pokemoni =   [


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
    Karakteristike: {napad: 58, odbrana: 30, brzina: 70}
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
]
// let pokemoniNiz = ['pokemon1','pokemon2','pokemon3','pokemon4']


const body = document.querySelector('#body')
const img = document.querySelector('#img')
const div = document.querySelector('#list')
const form = document.querySelector('#form')
const btn1 = document.querySelector('#prikaz')
form.appendChild(btn1)
body.appendChild(form)
body.appendChild(div)



btn1.addEventListener('click', e =>{
    // e.preventDefault()
    pokemoni.forEach(e => {
        const p = document.querySelector('#p')
        p.textContent = pokemoni.ime
        div.appendChild(p)
        return
    })
    
console.log(p)
    
})



