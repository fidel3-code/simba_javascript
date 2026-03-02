// functions with parameters

function greet(name){
    
    console.log("Hello",name)
}
greet("Joe")
greet("Fidell")


function favouritecounty(county){
    
    console.log(`My favourite county is ${county}`)
}
favouritecounty("Eldoret")
favouritecounty("Nairobi")
favouritecounty("Elgeiyo Marakwet")

// function to add
function add(num1,num2){
    let sum=num1+num2
    console.log(`The sum is ${sum}`)
}
add(num1=3,num2=8)

// function to subtract
function subtraction(n1,n2){
    let difference=n1-n2
    console.log(`The difference is ${difference}`)
}
subtraction(n1=40,n2=17)

// function to get modulus
function modulus(num1,num2){
    let modulus=num1%num2
    console.log(`The modulus is ${modulus}`)
}
modulus(num1=8,num2=3)

// function to divide
function divide(num1,num2){
    let division=num1/num2
    console.log(`The division is ${division}`)
}
divide(num1=100,num2=4)

// function to get bodymax index
function bmi(weight,height){
    let bmi=weight/height^2
    console.log(`The body max index is ${bmi}`)
}
bmi(weight=70,height=5)

// function to get simple interest
function simpleInterest(principle,rate,time){
    let simpleInterest=principle*rate*time/100
    console.log(`The simple interest is ${simpleInterest}`)
}
simpleInterest(principle=20000,rate=12,time=2)
