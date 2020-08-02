{
    function lifeSupply(numPerMonth,age){
        let rezultat = numPerMonth * ((100 - age)*12);
        return rezultat;
    }
}
console.log(lifeSupply(10,26));