function calculateTax(income:number,taxyear:number): number {
    //! if we want to make paramtere optional we use ? ex:taxyear?

   if(income<50000 && taxyear<2022)
    return income*2;
   
   else
    return income*3;
   

}
calculateTax(10000,2022)

//!union type
function kgtoLbs(weight:number | string):number{
    //norrowing 
    if(typeof weight === 'number')
    return weight *2.2;
    else 
    return parseInt(weight)*2.2;
}

kgtoLbs(10);
kgtoLbs('10kg');

//! intersection type
type draggable={
    drag:() => void
};
type resizeable={
    resize:() =>void
};

type UIwidget = draggable & resizeable;

let textbox:UIwidget={
    drag:() => {},
    resize:()=>{}
}



