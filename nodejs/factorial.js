function factorial(n) {
    if (n<0) throw "n must be positive";
    if (n<=1) return 1;

    return n*factorial(n-1);
}

for (i=0; i<10; i++) {
    console.log(`f(${i})=${factorial(i)}`);
}