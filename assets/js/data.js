function slice(n) {
    return Math.floor(100 * Math.random() / n);
}

function pie() {
    let cuts = 0;
    do {
        cuts = Math.floor(10 * Math.random());
    } while (cuts <= 1);
    const pieArray = [];
    let sum = 0;
    for (var i = 0; i < cuts - 1; i ++) {
        let newSlice = slice(cuts);
        if (sum + newSlice > 100 || newSlice == 0) 
            i--;
        else if (newSlice > 0) {
            pieArray.push(newSlice);
            sum += newSlice;
        }
    }
    pieArray.push(100 - sum)

    return pieArray;
}

function pieDecoration(n) {
    const dec = [];
    for (var i = 0; i < n; i++)
        dec.push(`rgb(${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())})`);
    
    return dec;
}