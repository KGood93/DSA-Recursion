let smallMaze = [
    ['X', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
]

let largeMaze = [
    ['X', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]

const maze1 = function(maze){
  const solved = []
  const mazeRun = function(curMaze, curLocation, letters=""){
    //Check Right
    if(curLocation[1]<curMaze[0].length-1){
      if(curMaze[curLocation[0]][curLocation[1]+1] === "e"){
        const newLetters = letters + "R"
        solved.push(newLetters)
        return newLetters
      }
      if(curMaze[curLocation[0]][curLocation[1]+1] === " "){
        const newLetters = letters + "R"
        curMaze[curLocation[0]][curLocation[1]+1] = "X"
        mazeRun([...curMaze], [curLocation[0], curLocation[1]+1], newLetters)
      }
    }
    //Check Down
    if(curLocation[0]<curMaze.length-1){
      if (curMaze[curLocation[0]+1][curLocation[1]] === "e"){
        letters = letters + "D"
        solved.push(letters)
        return letters
      }
      if (curMaze[curLocation[0]+1][curLocation[1]] === " "){
        const newletters = letters + "D"
        curMaze[curLocation[0]+1][curLocation[1]]= "X"
        mazeRun([...curMaze],[curLocation[0]+1,curLocation[1]],newletters)
      }
    }
    //Check Left
    if(curLocation[0]>0){
      if (curMaze[curLocation[0]][curLocation[1]-1] === "e"){
        const newletters = letters + "L"
        solved.push(newletters)
        return newletters
      }
      if (curMaze[curLocation[0]][curLocation[1]-1] === " "){
        const newletters = letters + "L"
        curMaze[curLocation[0]][curLocation[1]-1]= "X"
        mazeRun([...curMaze],[curLocation[0],curLocation[1]-1],newletters)
      }
    }

    //Check Up
    if (curLocation[0]>0){
      if (curMaze[curLocation[0]-1][curLocation[1]] === "e"){
        const newletters = letters + "U"
        solved.push(newletters)
        return newletters
      }
      if (curMaze[curLocation[0]-1][curLocation[1]] === " "){
        const newletters = letters + "U"
        curMaze[curLocation[0]-1][curLocation[1]]= "X"
        mazeRun([...curMaze],[curLocation[0]-1,curLocation[1]],newletters)
      }
    }
  }

  let i = 0 
  while (i < maze.length){
    console.log(maze[i])
    i++
  }
  mazeRun([...maze], [0,0])
  console.log(solved)
  return solved[0]
}

console.log(maze1(smallMaze))
console.log(maze1(largeMaze))