{
    let n = 5;
    let taraba = '';

    for(i = 0; i <= n; i++){
        taraba += ' '.repeat(n-i) + '#'.repeat(i) + ' ' + '#'.repeat(i);
        taraba += '\n';
    }
    console.log(taraba);
}