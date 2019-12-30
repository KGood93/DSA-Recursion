const stringSplit = function(string, split, arr=[]){
    let pos = string.indexOf(split)
    if (pos === -1) {
      return [...arr, string]
    }
    else {
      const toAdd = string.slice(0, pos)
      const arr2 = [...arr, toAdd]
      const newString = string.slice(pos + 1)
      return stringSplit(newString, split, arr2)
    }
  }
  
  console.log(stringSplit("02/20/2020", "/"))