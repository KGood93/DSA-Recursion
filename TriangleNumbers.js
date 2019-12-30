const TriNum = function(n) {
    //triNum(n)=n+TriNum(n-1)
    //base case
    if (n === 1){
      return 1
    }
    //general case
    else{
      return n + TriNum(n-1)
    }
  }
  
  console.log(TriNum(5))