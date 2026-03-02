// using Anonymus function
// Add 2 numbers with parameters

let add=function(num1,num2){
    let sum=num1+num2
    console.log(`The sum is ${sum}`)

}
add(num1=4,num2=2)

// Subtract 2 numbers with parameters

let subtract=function(num1,num2){
    let difference=num1-num2
    console.log(`The difference is ${difference}`)

}
subtract(num1=4,num2=2)

// Divide 2 numbers with parameters

let divide=function(num1,num2){
    let divide=num1/num2
    console.log(`The division is ${divide}`)

}
divide(num1=4,num2=2)

// Get modulus of numbers with parameters

let modulus=function(num1,num2){
    let modulus=num1%num2
    console.log(`The modulus is ${modulus}`)

}
modulus(num1=5,num2=2)

// Get Simpleinterest with parameters

let simpleInterest=function(principle,rate,time){
    let simpleInterest=principle*rate*time/100
     console.log(`The simple interest is ${simpleInterest}`)

}
simpleInterest(principle=20000,rate=12,time=2)

// Get Body Max Index

let bmi=function(weight,height){
    let bmi=weight/height^2
    console.log(`The body max index is ${bmi}`)
}
bmi(weight=70,height=5)


// Get Area of a triangle

let areaOfSquare=function(length,width){
    let areaOfSquare=length*width
    console.log(`The Area of Square is ${areaOfSquare}`)
}
areaOfSquare(length=12,width=12)

// Get Area of a triangle

let areaOfTriangle=function(base,height){
    let areaOfTriangle=1/2*base*height
    console.log(`The Area of the triangle is ${areaOfTriangle}`)
}
areaOfTriangle(base=12,height=13)

// Get Area of a Circle

let areaOfCircle=function(pie,radius){
   let areaOfCircle=pie*radius*radius
    console.log(`The Area of the circle is ${areaOfCircle}`)
}
areaOfCircle(radius=12,pie=22/7)

//  Get perimeter of a Circle

let perimeterofcircle=function(pie,diameter){
   let perimeterofcircle=pie*diameter
    console.log(`The perimetre of the circle is ${perimeterofcircle}`)
}
perimeterofcircle(diameter=12,pie=22/7)


