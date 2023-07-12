let number=[1,2,3];

//!TUPLES
let user:[number,string]=[14,"hitika"]
user.push(1); //drawback of typescript

//!enums
enum size{small=1 ,medium,large}
 //*compiler explicilty sets the values to 0,1,2 if not defined and in the case of string we need to set the values to the each variable
 let mysize:size=size.medium;
 console.log(mysize)  

 //!if we will use const in enum it will genrate more acuurate and clear js code 
 const enum tize{small="s",medium="m",large="l"}
 //*compiler explicilty sets the values to 0,1,2 if not defined and in the case of string we need to set the values to the each variable
 let mytize:tize=tize.medium;
 console.log(mytize) 


   

