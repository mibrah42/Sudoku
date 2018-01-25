var puzzles = {
    
    "puzzle_1": {
        "difficulty": "medium",
        "puzzle": [
          [0, 3, 0, 0, 0, 0, 0, 5, 0],
          [0, 0, 8, 0, 9, 1, 3, 0, 0],
          [6, 0, 0, 4, 0, 0, 7, 0, 0],
          [0, 0, 3, 8, 1, 0, 0, 0, 0],
          [0, 0, 6, 0, 0, 0, 2, 0, 0],
          [0, 0, 0, 0, 3, 4, 8, 0, 0],
          [0, 0, 1, 0, 0, 8, 0, 0, 9],
          [0, 0, 4, 1, 2, 0, 6, 0, 0],
          [0, 6, 0, 0, 0, 0, 0, 4, 0]
        ],
        "solution": [
          [1, 3, 9, 7, 6, 2, 4, 5, 8],
          [7, 4, 8, 5, 9, 1, 3, 2, 6],
          [6, 5, 2, 4, 8, 3, 7, 9, 1],
          [5, 2, 3, 8, 1, 6, 9, 7, 4],
          [4, 8, 6, 9, 5, 7, 2, 1, 3],
          [9, 1, 7, 2, 3, 4, 8, 6, 5],
          [2, 7, 1, 6, 4, 8, 5, 3, 9],
          [3, 9, 4, 1, 2, 5, 6, 8, 7],
          [8, 6, 5, 3, 7, 9, 1, 4, 2]
        ],
      }
}


function populateSudoku(puzzle = "puzzle_1"){
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      var cell = document.getElementById(i + "-" + j);
      var input = cell.getElementsByClassName("input-text")[0];
      if (puzzles[puzzle]["puzzle"][i][j] != 0) {
        input.value = puzzles[puzzle]["puzzle"][i][j];
        input.readOnly = true;
      } else {
        input.value = "";
        cell.style.color = "blue";
      }
    }
  }
}

function showSolution(puzzle = "puzzle_1"){
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      var cell = document.getElementById(i + "-" + j);
      var input = cell.getElementsByClassName("input-text")[0];
      input.value = puzzles[puzzle]["solution"][i][j];
    }
  }
}

function checkSolution(puzzle = "puzzle_1"){
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      var cell = document.getElementById(i + "-" + j);
      var input = cell.getElementsByClassName("input-text")[0];
      if (puzzles[puzzle]["solution"][i][j] != parseInt(input.value)){
        alert("Your solution is incorrect!")
        return;
      }
    }
  }
  alert("Your solution is correct");
}

console.log("javascript working")
populateSudoku("puzzle_1")