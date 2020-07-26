let n = 5

let red = '#'.repeat + ' '.repeat

for (let i = 0; i <= n; i++){
    red = '#'.repeat(i) + ' '.repeat(n - i)
    console.log(red)

}
    