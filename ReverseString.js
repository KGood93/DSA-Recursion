const reverseString = function(str) {
    //base case
    if (str === ""){
      return "";
    }
    //general case
    else {
      return reverseString(str.substr(1))+ str.charAt(0);
    }
  }
  
  console.log(reverseString("hello"));