const number = '+919876543210';

function validateMobile(number) {
    // write your solution here
    const regexMobile = /^(\+91|0)?\s?\d{10}$/;
    return regexMobile.test(number);
}

console.log(`valid Indian mobile number: ${validateMobile(number)}`)
