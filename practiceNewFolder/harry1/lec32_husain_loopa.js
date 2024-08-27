//loop
// for loop, while loop, and do while loop



//for loop
/*
for (let i = 1; i <= 5; i++)

//for (let i = 3; i <= 5; i++) 

//for (let i = 1; i <= 10; --i)
{
    console.log(i + '<br>');
}
console.log('done');
*/
//eample for loop

/*
for (let i = 1; i <= 10; i++) {
    //if (i % 2 === 0)// even number 
    if (i % 2 !== 0) //odd number
        console.log(i + '<br>');
}
console.log('done');
*/
//while loop
/*
let i = 1;
while (i <= 10)

//NON STOP
//while (i => 10)
{
    console.log(i + '<br>');
    i++;
}
console.log('Done');
*/

//do while loop
/*
let i = 1;
do {
    console.log(i + '<br>');

    i++;

}
while (i <= 5);
console.log('Done');
*/

//do while loop example
{
    let password;
    do {
        password = prompt('what is the password');

    }
    while (password !== 'asafahmad');
    console.log('Done');
}
