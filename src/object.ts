   
let employe:{ 
    readonly id:number,
    name:string,
    retire:(date:Date)=>void
}={
    id:1,
    name:'Mosh',
    retire:(date:Date)=>{
        console.log(date);
    }
};
//! type aliases
// *we use type aliases when in object un above program we need to repat the code for creating the new emplyee with the help of type we dont need to repeat 
type Employe={
    readonly id:number,
    name:string,
    retire:(date:Date)=>void
}
let employee: Employe={
    id:1,
    name:'Mosh',
    retire:(date:Date)=>{
        console.log(date);
    }}
