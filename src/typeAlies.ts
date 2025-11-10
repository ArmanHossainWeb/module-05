type User = {
    id: number, 
    name: {
        firstName: string, 
        lastName: string
    },
    gender:"male"|"female",
    contactNo: string,
    address: {
        division: string,
        city: string
    }
}


const user1: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "X",
  },
  gender: "male",
  contactNo: "0177",
  address: {
    division: "Chattogram",
    city: "Chattogram",
  },
};



const user2: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "Y",
  },
  gender: "female",
  contactNo: "01999",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};