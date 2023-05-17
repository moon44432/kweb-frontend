function isValidNumber(num) {
    n = num * 1
    if (typeof (n) === "number" &&
    Math.floor(n) === n &&
    1 <= n && n <= 9)
        return true;
    return false;
}