{
    let n = 5
    
    for (i = 0; i <= n; i++){
        let red = ' '.repeat(n - i) + '#'.repeat(i) + ' ' + '#'.repeat(i) + ' '.repeat(n - i)
        
        console.log(red)
    }

}


