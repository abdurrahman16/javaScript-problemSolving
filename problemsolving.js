// icnh to feet

// function inchToFeet (inch){
//     var feet= inch/12;
//     return feet;
// }
// var nafi= [120,144,244];
// var result= inchToFeet(nafi[1]);
// console.log(result);

//es6
// let nam ='ma';

// if(nam.length<3)
// {
//     nam='Babu';
//     console.log(nam);
// }
// else{
    
//     console.log(nam);

//leap year

// console.log('Leap Year Program');
// let year= prompt('enter the year');
// console.log(year);

// if ( year%4==0 && (year/400==0))
// {
//   console.log('leap year');
// }

// else {
//     console.log('NL');
// }


// function leapYear (year) 
// {
//     if((year%4==0) &&(year%400==0))
//      {
//         let result= 'leap year';
//     }
//     else{
//         result = 'NL';
//     }

//     return result;
// }

// let r= leapYear(4);
// console.log(r);

// let sum=1;

// for ( let i=1; i<=10; i++)
// {
//      sum=sum*i;
//     console.log(i,sum);
// }


function factorial (n){
    let fact=1;
    for ( let i=1; i<=n; i++)
{
     fact=fact*i;  
}
return fact;
}
let z= factorial(5);
console.log(z);