


var userName = prompt("Enter Your Name");
var English = +prompt("English");
var Science = +prompt("Science");
var Urdu = +prompt("Urdu");
var Math = +prompt("Math");
var Chemistry = +prompt("Chemistry");



var total = English + Science + Urdu + Math + Chemistry ;

var Percentege = (total / 500) *100 ;


var grade;
 if( Percentege >=90 && Percentege < 101 ) {
    grade = 'A+1';
}

else if(Percentege >=80 && Percentege< 90 ){
    grade = 'A';
}

else if(Percentege >=70 && Percentege < 80 ){
    grade = 'B';
}

else if(Percentege>=60 && Percentege < 70 ){
    grade = 'C';
}

else if(Percentege >=50 && Percentege < 60 ){
    grade = 'D';
}

// jab hamay jo cheez last krni hoti hai tu sirf ham else ka use krty hain

else{
    grade("Fail");
}


alert( "Your Name : " +  userName  + " \nTotal Marks : " +  total + " \nPercentage : " + Percentege + " \nGrade : " +  grade );

