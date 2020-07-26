{
    let n = 5

    let red = ' '.repeat(n - 1) + '#'.repeat

    for(let i = 0; i <= n; i++){
       red = ' '.repeat(n - i) + '#'.repeat(i)
       console.log(red)
    }
}