const user = {
    id: 123,
    name: {
        firstName: "shakhawat",
        middleName: "Hossain",
        lastName: "arman"
    },
    gender: "male",
    favouriteColor: "black",
}



const {favouriteColor, name:{middleName} } = user;
console.log(favouriteColor, middleName)



