// Function With Return value
/*
function fullname(fname, lname) {
    var a = 'Hello' + fname + '_' + lname + '<br>';
    return a;
};

var b = fullname('ali', 'ahmad')
console.log('result', b);
*/

console.log('Total subject -5 <br> Total Marks - 500 <br> <br>')

function sumMarks(DS, CS, DA, CG, AP) {

    var a = DS + CS + DA + CG + AP;

    return a;
};
var b = sumMarks(78, 86, 67, 80, 90);

console.log('Marks Obtain - ' + b + ' <br>');

//percentage

function percentage(tm) {

    var c = tm / 500 * 100

    return c;
};

var d = percentage(b);

console.log('percentage -' + d + '%');