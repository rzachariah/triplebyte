function fibonacci(n) {
    if (n<0) throw "n must be positive";
    if (n<=1) return 1;

    return fibonacci(n-1) + fibonacci(n-2);
}

for (i=0; i<10; i++) {
    console.log(`f(${i})=${fibonacci(i)}`);
}