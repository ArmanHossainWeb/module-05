const friends = ["Arman", "Sabbir", "Nayeem", "Rafi", "Jannat"];

const schoolFriends = ["Hasan", "Imran", "Tushar", "Siam", "Mahin"];

const collegeFriends = ["Rakib", "Farhan", "Mim", "Tonmoy", "Shorna"];


friends.push(...schoolFriends)
friends.push(...collegeFriends)


console.log(friends)



const armanInfo = {
  name: "Arman Hossain",
  email: "arman@example.com",
};

const otherInfo = {
    collageName : "AITVET"
}


const addInfo = {...armanInfo , ...otherInfo}
console.log(addInfo)



// rest opeartor 

const sendInvite = (friend1:string, friend2:string, friend3:string) => {
    console.log(`send invitation to ${friend1}`)
    console.log(`send invitation to ${friend2}`)
    console.log(`send invitation to ${friend3}`)
}

sendInvite("pintu", "chintu", "mintu")