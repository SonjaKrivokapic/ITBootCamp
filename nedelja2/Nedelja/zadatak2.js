for (i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }
    if (i % 3 === 0){
        console.log('Fizz');
    }
    if (i % 5 === 0){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }
    
}


//moja vezba
{   
    let msg = ' '
    let i = ' '
    
    for (i = 1; i < 100; i++, msg = ''){
        if(!(i%3)) msg = 'Fizz'
        if(!(i%5)) msg = 'Buzz'
        if(!(i%11)) msg = 'Zuzz'
        console.log(msg || i)
    }
}


      

