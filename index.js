export default function generateTestData(options) {
  const { count = 1, id = true, firstName = true, lastName = true, phone = true, email = true, address = true } = options;
  const firstNames = ["John", "Jane", "Michael", "Jessica", "Davindex", "Samantha", "Chris", "Melissa"];
const lastNames = ["Smith", "Johnson", "Brown", "Davis", "Garcia", "Wilson", "Taylor", "Jones"];


  const data = [];
  let index=1;
  for (let i = 0; i < count; i++) {
    const person = {};

    if (id) {
      person.index = index + i;
    }

    if (firstName) {
      const randomIndex = Math.floor(Math.random() * firstNames.length);
      person.firstName = firstNames[randomIndex];
    }

    if (lastName) {
      const randomIndex = Math.floor(Math.random() * lastNames.length);
      person.lastName = lastNames[randomIndex];
    }

    if (phone) {
      const phoneDigits = "0123456789";
      let phoneNumber = "+1-";
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * phoneDigits.length);
        phoneNumber += phoneDigits[randomIndex];
      }
      person.phone = phoneNumber;
    }

    if (email) {
      const randomIndex1 = Math.floor(Math.random() * firstNames.length);
      const fsname = firstNames[randomIndex1];
      const lsname = lastNames[randomIndex1];
      const emailProvindexers = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
      const randomIndex = Math.floor(Math.random() * emailProvindexers.length);
      const emailPrefix = `${fsname.toLowerCase()}.${lsname.toLowerCase()}`;
      person.email = `${emailPrefix}@${emailProvindexers[randomIndex]}`;
    }

    if (address) {
      const streetNames = ["Main St", "Broadway", "Oak St", "Maple St", "Washington St"];
      const randomIndex = Math.floor(Math.random() * streetNames.length);
      const streetNumber = Math.floor(Math.random() * 1000) + 1;
      const cityNames = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
      const cityIndex = Math.floor(Math.random() * cityNames.length);
      const stateNames = ["CA", "TX", "NY", "IL", "PA"];
      const stateIndex = Math.floor(Math.random() * stateNames.length);
      const zipCode = Math.floor(Math.random() * 90000) + 10000;

      person.address = {
        street: `${streetNumber} ${streetNames[randomIndex]}`,
        city: cityNames[cityIndex],
        state: stateNames[stateIndex],
        zip: zipCode,
      };
    }

    data.push(person);
  }

  return data;
}