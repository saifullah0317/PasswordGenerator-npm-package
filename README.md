# test-json-data-generator
Generates random data about entities (like what your'e storing information about, students, employees, cars, orders in a store etc.) that can be used for testing purposes. You should only specify attributes of that entity and type of each attribute and then you can generate a set of thousands of objects.
## Installation
To use this package in your project. Install by running command

`npm install test-data-genrator`
## Usage
Import { generateTestData } function from this package. And then you can simply call this function and in return you will get generated data as array of objects in json form. You will pass parameters to specify attributes/properties of entity and type of each attribute. This is an example code to generate test data :
```javascript
import { generateTestData } from 'test-json-data-generator'

const attributes = {
  name: "string",
  age: "number",
  address: "string",
  isStudent: "boolean",
  birthDate: "date"
};

const count = 3;

const testData = generateTestData(attributes, count);

console.log(testData); // output
// [
//   {
//     name: '65c34nbaod6d3jjhrd4rt',     
//     age: 651,
//     address: 'k7r42gcz1ykiebza97u8v',  
//     isStudent: true,
//     birthDate: '1957-11-10'
//   },
//   {
//     name: 'qjxkugwx3m8cdeodomoici',    
//     age: 339,
//     address: 'a2cobdpxeti085kj76xemeo',
//     isStudent: false,
//     birthDate: '2002-02-07'
//   },
//   {
//     name: 'k51hku5mmdmm4zy5a7fwx',     
//     age: 839,
//     address: 'pcywb9y47fie6f5aundwul', 
//     isStudent: true,
//     birthDate: '1962-03-30'
//   }
// ]

```

## Github repos
[https://github.com/saifullah0317/TestDataGenerator-npm-package](https://github.com/saifullah0317/TestDataGenerator-npm-package)
## License
This package is licensed under [ISC](https://opensource.org/license/isc-license-txt/)
