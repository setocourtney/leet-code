const isPrime = (int) => {
    if (int === 1) {
        return true;
    } else if (int === 2) {
        return false;
     } else {
         for (let i = 2; i < int; i++) {
             if (int % i === 0) {
                 return false;
             }
         }
         return true;
     }
}

console.log(isPrime(37));
console.log(isPrime(24));