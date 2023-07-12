"use strict";
function calculateTax(income, taxyear) {
    if (income < 50000 && taxyear < 2022)
        return income * 2;
    else
        return income * 3;
}
calculateTax(10000, 2022);
function kgtoLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgtoLbs(10);
kgtoLbs('10kg');
//# sourceMappingURL=funt.js.map