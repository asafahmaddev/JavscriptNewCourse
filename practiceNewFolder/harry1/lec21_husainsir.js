//prompt box in javascript

//prompt('Enter Your Name ?');
/*
var a = prompt('Enter Your Name ?');
alert(a);
*/
/*
var a = prompt('Enter Your Name ?');
//console.log(a);
console.log('welcome to' + a);
*/

var a = prompt('Enter number of days');
switch (true) {

    case (a == 1): console.log('Sunday')
        break;

    case (a == 2): console.log('Monday')
        break;

    case (a == 3): console.log('Tuesday')
        break;

    case (a == 4): console.log('wednesday')
        break;

    case (a == 5): console.log('Truesday')
        break;

    case (a == 6): console.log('Friday')
        break;

    case (a == 7): console.log('Saturday')
        break;

    default: console.log('Eenter valid day number.')

};
