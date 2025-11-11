const biyerJonneEligible = (age: number) => {
    // if(age >= 21){
    //     console.log("you are eligible")
    // }
    // else{
    //     console.log("you are not eligible")
    // }


    const result = age >= 21 ? "you are eligible": "you are not eligible"
    console.log(result)
}

biyerJonneEligible(30)




const userTheme = null;
const selectedTheme = userTheme ?? "light theme"

console.log(selectedTheme)










