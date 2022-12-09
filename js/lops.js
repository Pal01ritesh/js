//while and for loop a scriptin jav

//while

// while(condition){ // syntax

// }
let i = 0
while( i < 5){
    console.log(i)
    i++
}


// i++ works same as i+=1

let j = 5

while(j > 0){
    console.log(i)
    j--
}


// j-- works same as  j-=1



let i = 5

while(i){ //i != 0
    console.log(i)
    i--
}

// let i = 3
// while (i) console.log(i--)



// do while loop in js



let n = 0
do{
    console.log(n)
    i++
}while(n < 5)





do{
    console.log('hello world')
}while(false)

while(false){
    console.log('hello world')
}

//for loop in java script

// for(begin; condition; step){ . //syntax

// }

for (let t = 0; i < 5; t++){
    console.log(t)


//skipping the parts


let l = 0

for(; l < 5; l++){
    console.log(l)
}

let m = 0

for(; m < 10;){
    console.log(m++)
}


//break in java script

let sum = 0

while (true) {
    let value = prompt("Enter a number", '')


    sum = sum + value

    break

}
alert('Sum: ' + sum)

let p = 0

while (p < 10) {
    if (p == 5) break
    console.log(p)
    p++
}