# password-generator
Generates random passwords accoring to the instructions given
- multiple passwords can also be generated at a single call
## Installation
To use this package in your project. Install by running command

`npm install password-genrator`
## Usage
Two functions/modules are provided by this package

### 1. generatePassword()

It takes five parameters
- length (optioinal): desired length of password. It's default value is 6
- useUpperCase (optional): a boolean value indicating whether or not to use uppercase letters in the password. Default value is true
- useLowerCase (optional): a boolean value indicating whether or not to use lowercase letters in the password. Default value is true
- useNumbers (optional): a boolean value indicating whether or not to use numbers in the password. Default value is true
- useSymbols (optional): a boolean value indicating whether or not to use symbols (' ! @ # $ % & _ < > ? ') in the password. Default value is true

### 2. generateMultiple()

It takes six parameters
- count (optional): how many passwords you want. It's default value is 2
- remaining five params are the same.

Here's an example code running functions from this package:
```javascript
import { generatePassword } from 'password-generator'

const psw1 = generatePassword();
const psw2 = generatePassword(8, false);
const psw3 = generatePassword(8, true, false, true, false);

const psw4 = generateMultiple();
const psw5 = generateMultiple(3, 8);
const psw6 = generateMultiple(3, 8, true, false, true, false);

console.log(psw1); // %32jUc
console.log(psw2); // qyz19bge
console.log(psw3); // 5PYZ47X7
console.log(psw4); // [ 'gQ6mmx', 'w?TBSd' ]
console.log(psw5); // [ 'nSkWin@m', 'yjXrWS?l', 'kw_ef@LH' ]
console.log(psw6); // [ 'BY9P5HFX', 'LK0W1TMR', 'OUVAI9CR' ]

```

## Github repos
[https://github.com/saifullah0317/PasswordGenerator-npm-package](https://github.com/saifullah0317/PasswordGenerator-npm-package)
## License
This package is licensed under [ISC](https://opensource.org/license/isc-license-txt/)
