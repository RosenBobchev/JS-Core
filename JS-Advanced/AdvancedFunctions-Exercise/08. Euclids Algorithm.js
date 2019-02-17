function gcd(a, b) {
    if(a === 0) return b;
    if(b === 0) return a;

    return gcd(b, a % b);
}