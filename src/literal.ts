//! when we want to limit the varibale we use literals Literal ( exact,specifc)
type Quantity =50|100;
let quantity: Quantity =100;

//it can also we string 
type metric="cm"| "inch";

//! Nullable types
//* Ts does not all the null the null values to use null values we need to use union type
function greet(name:string | null | undefined){
    if(name)
    console.log(name.toUpperCase());
    else
    console.log('hola!');

}
greet(undefined);
greet("hitika");


type Customer = {
    birthday: Date
    };
    function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null: { birthday: new Date() };
    }
    let customer = getCustomer (0);
    console.log(customer?.birthday);
