                        //    CHATPER :1 
var firstName = "ShaheerAli";
var lastName= "Danish";
var email = "shaheeralidanish@gmail.com"
var phoneNumber="03131299086";
var password = "maynhbataonga";

alert ("FirstName :"+firstName)
alert ("LastName : " + lastName)
alert ("Email :"+ email)
alert ("PhoneNumber :" + phoneNumber)
alert ("Password :" +  password)

var masseage = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellendus?"

alert  ("masseage : " + masseage )

                                   // CHAPTER : 2 
var aliZain="aliZain is the great Student" 
var bestTeam="blue team"
bestTeam="red Team"
                                    //  CHAPTER :3
var caseQty;
caseQty=144;
var num = 9;
var sum = caseQty+num;
alert(sum)
var yesterDayorder=100;
var toadyOrder= 25;
var totalOrder= yesterDayorder+toadyOrder;

var firstNumber = 12
firstNumber= firstNumber+18
console.log (firstNumber)
                                //  CHAPTER : 4 
var  productCost=3.45
var  nameOfband;
var myVariable;
var firstName;
var lastName;
var camelCaseExample;
var my_number;
var $variable;
var _underscoreVariable;

                            //   CHAPTER : 5 
var num = 50 % 22 ;
var multiply = 500* 12
var value_1=100;
var value_2=50;

var total = value_1 - value_2

var num1=240;
var num2=150;

var total=num1*num2;
alert(total)

                              //  CHAPTER :6
var x=50;
var y = ++x;
console.log(y)

var d=45
var z=--d
console.log(z)

var value=7;
value++;
console.log(value)
                                // CHAPTER :7
var value_1=2+(5*10);
var value_2=((2+4)*3)+4;
var value_3=(2*8)+(4-2);
var value_4=4/(2+6);
                                    // CHAPTER : 8 
var num="2"+"2"
console.log(num)  
var name= "hello,"+"world"
console.log(name)  

alert ("35" + 12)

alert ("Pakistan" + "Zindabad")
                                        // CHAPTER : 9 
var firstName=prompt("Enter Your Name")
alert (firstName)
var Country=prompt("Enter Your Country")
alert (Country)
var promptmessage="Enter your Fav Food"
var deafultmsg="biryani"
var userresponse=prompt(promptmessage,deafultmsg)

var promptmsg="what is your fav programing language"
var deafultmsg="paython"
var userresponse=prompt(promptmsg,deafultmsg)
alert ("You Enterted" + userresponse )

                                    //   CHAPTER :10 
var city = "karachi"
if (city==="karachi"){
    alert("the city of light")
}
if(x===y){
    var z = prompt("Enter The z Value")
    alert ("you Enter" + z)
}
var zipcode = "10010"
if (zipcode==="10020"){
    alert("This Zip code is Karachi")
}
else{
    alert ("please write correct city")
}

                                    //   CHAPTER :11 
var age =18
if (age!==18){
    alert("Allow")
}
else{
    alert("Not Allow")
}
var num=15
var num2=40

if (num !== num2){
    alert ("The Numbers Are unequal")
}
var firstName= prompt("enter your name")
var lastname="ali"

if (firstName !== lastname){
    alert("Not Match")
}

var age=15
var cinic="available"

if (age <=15 && cinic=="available"){
    alert("allow")
}
else{
    alert("Show your student id")
}

                                        // CHAPTER : 12
var percentage = +prompt("Enter Your Percentage")
if(percentage >= 80  &&  percentage <=100){
    alert("A+")
}
else if (percentage >=70 && percentage <=80){
    alert("A")
}
else if (percentage >=60 && percentage <=70){
    alert("B")
}
else if (percentage >=50 && percentage <=60){
    alert("C")
}
else if (percentage >=40 && percentage <=50){
    alert("D")
}
else if (percentage >=33 && percentage <=40){
    alert("E")
}
else if (percentage >=0 && percentage <=33){
    alert("FAIL")
}
var userCity = prompt("Enter your city:");

if (userCity=== "karachi") {
  alert("Acknowledging it is Karachi");
} else if (userCity=== "lahore") {
  alert("Acknowledging it's Lahore");
} else {
  alert("City not recognized");
}
                                    //   CHAPTER : 13 

var name1="Shayan"
var name2="Danish"
var age =16

if(name1==="Shayan" || name2==="Danish" || age<=16){
    alert("allow")
}
else{
    alert("Not allow")
}
var firstNameVariable = "YourFirstName";
var lastNameVariable = "YourLastName";

var enteredFirstName = prompt("Enter your first name:");
var enteredLastName = prompt("Enter your last name:");

if (enteredFirstName === firstNameVariable || enteredLastName === lastNameVariable) {
  alert("Congratulations! Your name matches.");
}

                                    // CHAPTER : 14 
var password=+prompt("Enter the Password")

if(password!== "5"){
 if (password.length <=5){
    alert("Password must be greater than 5")
 }
 else{
    alert("ok")
 }
 
}else{
    alert("Password should not be empty.")
}

var a=2
var c="MIN"

if(a===2){
    if(c==="MIN"){
        alert("OK")
    }
}

if (a===2 && c==="MIN"){
    alert("Correct")
}

var num1=42;
var num2=42;

if (num1==num2){
    if(num1<=num2){
        alert("Perfect")
    }
}

                                            // CHAPTER : 15 
var emptyarray=[]
emptyarray[0]="Danish"

var alphabet = [ "A" , "B" , "C" , "D" , "E" , "F"]
alert (alphabet[3])

var counting=["1","2","3","4","5","6","7","8","9","10"]
var arraylenght=counting.lenght
alert(counting.length)

var firstelment=["hydrogen"]
firstelment[1]=["Oxygen"]
alert(firstelment[1])
                                    // CHAPTER : 16 
var student=["Shayan","khubaib","Danish","Ali"]
student.push("daniyal")
alert(student[4]);

var alphabet=["A","B","C","D","E","F","I"]
alphabet.pop()
alert(alphabet)

var alphabet = ["W" , "V" ,"X","Y"]

alphabet.push("Z")

console.log(alphabet)


                                     // CHAPTER : 16 PART (2) 
var sizes = ["S", "M", "XL", "XXL", "XXXL"]

sizes.shift()

console.log(sizes)

var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.unshift["1","2","3"]

var fruits = ["apple"]
fruits.unshift["orange"]

alert(fruits[0])

var sizes = ["S", "M", "XL", "XXL", "XXXL"]

sizes.splice(2,0,"L");

console.log(sizes)

var sizes = ["S", "M", "XL", "XXL", "XXXL"]

var resize = sizes.slice(0,3)

console.log(resize)

var pets = ["dog", "cat", "ox", "duck", "frog"]
pets.splice(1,2,"Elephant" ,"Fish")
console.log(pets)

var pets= ["dog", "cat", "ox", "duck", "frog"]

pets.splice(1,2)

console.log(pets)


                                        // CHAPTER 17 TO 20 
for(var i = 0 ; i < 10 ; i++ ){
    console.log("hello world")
}
for (var i = 0; i <= 11; i++) {
console.log("Iteration"+ (i+1));
}
for (var i = 0; i <= 4; i++){
    alert("hello world")
}

for (var counter = 0 ; counter < 100; counter++)
{
    console.log("hello world" + (counter + 1))
}
for (var i = 3 ; i > 0 ; i--){
    console.log("hello world" +(4-i))
}
var students=["Shayan" , "Qasim","Ali" , "bilal"]
for (var i = 0 ; i < students.length; i++){
    console.log(students[i])
}

var usernames=["David" , "Jogi" , "David"]
var firstName=prompt("Enter Firstname")

for (var i = 0 ; i < usernames.length; i++){
    if(usernames===firstName){
        alert ("OK")
        break
    }
    else{
        alert ("Kindly enter the correct name")
        break
    }
}
var userinput=prompt("User Input")
var users=["ali" , "qasim" , "daniyal"]

for (var i = 0 ; i < users.length; i++){
    if (userinput===users[i]){
        alert("OK")
        break
    }
    else{
        alert("dont allow")
        break
    }

}

var alphabet=["A" , "B" , "C" , "D" , "E" , "F"]
var digits=[1,2,3,4,5,6,7]

for(var i = 0; i < alphabet.length; i++ ){
    for (var x = 0; x < digits.length; x++){
        console.log(alphabet[i] + " " + digits[x])
    }
}
             

                                // THE END 
