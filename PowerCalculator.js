const powerCalculator = function(base, exp) {
    //base case
    if (exp === 0){
      return 1;
    }
    //general case
    else {
      return base * powerCalculator(base ,exp-1);
    }
};

console.log(powerCalculator(4, 2));