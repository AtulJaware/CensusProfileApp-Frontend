var n=1;
console.log(n);
console.log(typeof(n));

//object - {}, Array - []
const person = {
  name: "Atul",
  age: 23,
  contactNos: [9561646139, 9922648439],
  address: [
    {
      city: "Pune",
      state: "Maharashtra",
    },
    {
      city: "Mumbai",
      state: "Maharashtra",
    },
    {
      city: "Hyderabad",
      state: "Telangana",
    },
  ],
};

// Read person object values
console.log(typeof person); 
console.log(person.name); 
console.log(person["name"]); 
console.log(person.age); 
console.log(person.contactNos); 
console.log(person.contactNos[0]); 
console.log(person.contactNos[1]); 
console.log(person.address); 
console.log(person.address[0]); 
console.log(person["name"]);

