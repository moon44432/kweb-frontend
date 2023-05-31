function getDivisors(n) {
    const div = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            div.push(i);
            if (i !== n / i) div.push(n / i);
        }
    }
    return div.sort((first, second) => first - second);
}
