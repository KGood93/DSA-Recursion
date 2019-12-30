const fibonacci = function(arr, len){
    if (arr.length >= len) {
      return arr[len-1];
    }
    else {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
      return fibonacci(arr, len);
    }
  }
  
  console.log(fibonacci([1,1], 6));