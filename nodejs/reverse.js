function reverse(xs) {
    var ys=[];
    for (var i=xs.length-1; i--; i>-1) {
        ys.push(xs[i]);
    }
    return ys;
}

var a=[1,3,5,7,11];
console.log(`a=${a}`);
console.log(`reverse(a)=${reverse(a)}`);
