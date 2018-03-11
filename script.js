var solvedPuzzle;

function startNewPuzzle(){
  $('#chooseDifficulty > input').each(function () {
    if (this.checked){
      console.log(this.value)
      var difficulty = this.value
      $.ajax({
        url: "https://sugoku.herokuapp.com/board?difficulty=" + difficulty,
        dataType: 'json',
        success: function(puzzle){
          // console.log(puzzle);
          solve(puzzle)  
        }
      });
    } 
  });
}

function solve(puzzle){
   var data = {
    board: JSON.stringify(puzzle["board"])
  }

  $.post('https://sugoku.herokuapp.com/solve', data)
    .done(function (solution) {
      // console.log(solution)
      solvedPuzzle = solution;
      populateSudoku(puzzle);

    });``
}

startNewPuzzle()

function populateSudoku(puzzle){
  console.log(solvedPuzzle)
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      var cell = document.getElementById(i + "-" + j);
      var input = cell.getElementsByClassName("input-text")[0];
      if(puzzle["board"][i][j] != 0 ){
        cell.style.color = "#000000";
        input.value = puzzle["board"][i][j];
        input.readOnly = true;
      } else {
        input.value = "";
        input.readOnly = false;
        cell.style.color = "#74D3BB";
      }
    }
  }
}


function checkSolution(){
  counter = 0
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      var cell = document.getElementById(i + "-" + j);
      var input = cell.getElementsByClassName("input-text")[0];
      if (solvedPuzzle["solution"][i][j] != parseInt(input.value) ){
        counter += 1;
        // if (input.value != ""){
        // 	// input.style.backgroundColor = "#E26A6A";
        // }
        // input.style.backgroundColor = "#F12E45";
      } 
        // input.style.backgroundColor = "white";
      
    }
  }

  if (counter > 0){
    alert("Your solution is incorrect!");
  } else {
    alert("Your solution is correct!");
  }
}

function restartPuzzle(){
  for(var i = 0; i<9;i++){
    for(var j = 0; j<9; j++){
      var cell = document.getElementById(i + "-" + j);
      var input = cell.getElementsByClassName("input-text")[0];
      if(!input.readOnly){
        input.value = "";
      }
    }
  }
}

// function test(){
// for(var i = 0; i < 9; i++){
//     for(var j = 0; j < 9; j++){
//       var cell = document.getElementById(i + "-" + j);
//       var input = cell.getElementsByClassName("input-text")[0];
//       if(solvedPuzzle["solution"][i][j] != 0 ){
//         cell.style.color = "#000000";
//         input.value = solvedPuzzle["solution"][i][j];
//         input.readOnly = true;
//       } else {
//         input.value = "";
//         input.readOnly = false;
//         cell.style.color = "#74D3BB";
//       }
//     }
//   }
//   }

if(!document.cookie.includes("firstTime")){
  // var audio = new Audio('popUp.mp3');
  // audio.play();
  document.cookie = "firstTime=false";
  document.getElementById('id01').style.display='block';
}
function showInstructions(){
  // var audio = new Audio('popUp.mp3');
  // audio.play();
  document.getElementById('id01').style.display='block';
}
  