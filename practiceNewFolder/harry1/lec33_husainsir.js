// Break ,continue statement
/*
for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);
    console.log('<br>');
}
    */
//continue ststement
/*
for (let counter = 1; counter <= 10; counter++) {
    if (counter == 5)// condition main andar jobe number hai who pront nahi hoga
    {
        continue;

    }
    console.log(counter);
    //console.log('<br>');
}
console.log('Done')
*/

//Break statement

for (let counter = 1; counter <= 10; counter++) {
    if (counter == 5) {
        break;

    }
    console.log(counter);
    //console.log('<br>');
}
console.log('Done')
