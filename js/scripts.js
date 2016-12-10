
// global variables
var paye = 0;
function calcPaye(grossIncome){
  taxablePay=(grossIncome-200);
  // 200 is the personal Nssf deductioni


    if((taxablePay) <=10164){
    paye = (taxablePay) * .1;
    }
     else if((taxablePay) >=10165 && (taxablePay) <=19740){
        paye = ((taxablePay) - 10164) * .15 + 1016.40;
    }
    else if((taxablePay) >=19741 && (taxablePay) <=29316){
       paye = ((taxablePay) - 19740) * .20 + 1016.40+1436.40;
   }
   else if((taxablePay) >=29317 && (taxablePay) <=38892){
      paye = ((taxablePay) - 29316) * .25 + 1016.40+1436.40+1915.20;

   }
   else if((taxablePay) >=38893){
      paye = ((taxablePay) - 38892) * .30 + 1016.40+1436.40+1915.20+2394.00;

   }

    return paye;  // everything above the calibracket is the business logic or the back-end logic
}
console.log( calcPaye([50000]));
