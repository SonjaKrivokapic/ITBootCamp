{
    function divisibleByFive(arr){
        let kolicnik = [];
        for(i = 0; i < arr.length; i++){
            if(arr[i] % 5 === 0){
                kolicnik.push(arr[i]);
            }
        }
        console.log(kolicnik);
    }
    
    divisibleByFive([1,2,3,4,5,10,15,23,1,5])
}

console.log();
