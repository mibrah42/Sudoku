var solvedPuzzle;

function startNewPuzzle(){
  document.getElementById('solutionTable').style.display = 'none';
  document.getElementById('id03').style.display = 'none'
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
      populateSolution(solution)

    });
}

startNewPuzzle()

function populateSudoku(puzzle){
  console.log(solvedPuzzle)
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      var cell = document.getElementById(i + "-" + j);
      var input = cell.getElementsByClassName("input-text")[0];
      input.style.backgroundColor = "white";
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

function populateSolution(puzzle) {
  // console.log(solvedPuzzle)
  for (var i = 9; i < 18; i++) {
    for (var j = 0; j < 9; j++) {
      var cell = document.getElementById(i + "-" + j);
      var input = cell.getElementsByClassName("input-text")[0];
      if (puzzle["solution"][i-9][j] != 0) {
        cell.style.color = "#000000";
        input.value = puzzle["solution"][i-9][j];
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
        if (input.value != ""){
          input.style.backgroundColor = "#E26A6A";
        }
        // input.style.backgroundColor = "#F12E45";
      } 
        // input.style.backgroundColor = "white";
        input.readOnly = true;  
    }
  }
  if (counter > 0){
    alert("Your solution is incorrect!");
  } else {
    alert("Your solution is correct!");
  }
  document.getElementById('solutionTable').style.display = 'block';
}

function showChoice(){
  document.getElementById('id02').style.display = 'block';
}

function showChoiceStartNew(){
  document.getElementById('id03').style.display = 'block';
}

function restartPuzzle(choice){
  if(choice == "yes"){
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var cell = document.getElementById(i + "-" + j);
        var input = cell.getElementsByClassName("input-text")[0];
        if (!input.readOnly) {
          input.value = "";
        }
      }
    }
    document.getElementById('id02').style.display = 'none'
  } else {
    document.getElementById('id02').style.display = 'none'
  } 
  // if (confirm("Are you sure you want to restart?")) {
  // }
}

// if(!document.cookie.includes("firstTime")){
//   // var audio = new Audio('popUp.mp3');
//   // audio.play();
//   document.cookie = "firstTime=false";
//   document.getElementById('id01').style.display='block';
// }
function showInstructions(){
  // var audio = new Audio('popUp.mp3');
  // audio.play();
  document.getElementById('id01').style.display='block';
}


  