const str = 'F(X) !== G(X) !== F(X)';
function getTheGapX(str) {
    if (!str.includes('X')) {
        return -1;
    }

    const firstIndex = str.indexOf('X');
    const lastIndex = str.lastIndexOf('X');
    return firstIndex === lastIndex ? 0 : lastIndex - firstIndex; // ternary operator
}
console.log(`Gap between the X's: ${getTheGapX(str)}`)

