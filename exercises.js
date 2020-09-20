/**
1. Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

const today = new Date();
const day = today.getDay();
let dayList = ["Domingo","Lunes","Martes","Miercoles","JUeves","Viernes", "Sabado"]



const hours = new Date();
const hour = hours.getHours();
const minute = hours.getMinutes();
const second = hours.getSeconds();

function format(time){
    if(time>=13){
        return "PM"
    }else{
        return "AM"
    }
}


console.log("Hoy es: "+ dayList[day]);
console.log("Current time is : "+ hour + " "+ format(hour) + " : " + minute +  " : " + second);