function getSolved() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var cell = document.getElementById(i + "-" + j);
            var input = cell.getElementsByClassName("input-text")[0];
            input.style.backgroundColor = "white";
            if (solvedPuzzle["solution"][i][j] != 0) {
                cell.style.color = "#000000";
                input.value = solvedPuzzle["solution"][i][j];
                input.readOnly = true;
            } else {
                input.value = "";
                input.readOnly = false;
                cell.style.color = "#74D3BB";
            }
        }
    }
}