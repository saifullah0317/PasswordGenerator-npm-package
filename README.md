# test-data-generator
Generates random data about persons (like what your'e storing information about, students, teachers, employees, etc.) that can be used for testing purposes.
## Installation
To use this package in your project. Install by running command

`npm install test-data-genrator`
## Usage
Import { generateTestData } function from this package. And then you can simply call this function and in return you will get generated data as array of objects in json form. You can pass parameters to specify which information should be kept for test data e.g.,
```js
{
    count : 5,
    id : true,
    firstName : true,
    lastName : true,
    phone : true,
    email : true,
    address : true
}
```
'count' parameter is necessary, all the other params are optional and their default values are true. 'true' means you want to include this property in object and 'false' means that you wnat to add this property in object.
```javascript
import { generateTestData } from 'test-data-generator'

const usersArray1 = generateTestData();
const usersArray2 = generateTestData({count:3,id:true,firstName:false});

console.log(usersArray1); // output
// [
//   {
//     index: 1,
//     firstName: 'Samantha',
//     lastName: 'Wilson',
//     phone: '+1-0207938298',
//     email: 'davindex.garcia@yahoo.com',
//     address: {
//       street: '765 Washington St',
//       city: 'Phoenix',
//       state: 'NY',
//       zip: 88650
//     }
//   },
//   {
//     index: 2,
//     firstName: 'Samantha',
//     lastName: 'Wilson',
//     phone: '+1-8445609376',
//     email: 'jessica.davis@outlook.com',
//     address: {
//       street: '122 Maple St',
//       city: 'Houston',
//       state: 'IL',
//       zip: 18965
//     }
//   }
// ]

console.log(usersArray2); // output
// [
//   {
//     index: 1,
//     lastName: 'Jones',
//     phone: '+1-8054499342',
//     email: 'john.smith@gmail.com',  
//     address: {
//       street: '236 Washington St',  
//       city: 'Phoenix',
//       state: 'IL',
//       zip: 97555
//     }
//   },
//   {
//     index: 2,
//     lastName: 'Wilson',
//     phone: '+1-5278363392',
//     email: 'chris.taylor@gmail.com',
//     address: {
//       street: '98 Broadway',        
//       city: 'Los Angeles',
//       state: 'NY',
//       zip: 99486
//     }
//   }
// ]

```

## Github repos
[https://github.com/saifullah0317/TestDataGenerator-npm-package](https://github.com/saifullah0317/TestDataGenerator-npm-package)
## License
This package is licensed under [ISC](https://opensource.org/license/isc-license-txt/)
