window.onload = () => {

    console.log('how are you');
    direction = [];
    var arr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    res = document.getElementById("result");

    function getInput() {
        res.innerHTML = "Answer Displays Here";


        for (let i = 0; i < 30; i++) {
            for (let j = 0; j < 30; j++) {
                arr[i][j] = Math.floor(Math.random() * 2);

                if (arr[i][j] == 0) {

                    if (i + 2 < 30 && j + 4 < 30) {
                        arr[i + 2][j + 4] = 1;
                    }

                }

                if (i + 1 < 30 && j + 1 < 30) {
                    if (arr[i][j] == 0) {
                        arr[i + 1][j + 1] = 1;
                    }
                }

                if (i + 5 < 30 && j + 4 < 30) {
                    if (arr[i][j] == 0) {
                        arr[i + 5][j + 4] = 1;
                    }
                }
                if (i + 3 < 30 && j + 1 < 30) {
                    if (arr[i][j] == 0) {
                        arr[i + 3][j + 1] = 1;
                    }
                }

                if (i + 5 < 30 && j + 1 < 30) {
                    if (arr[i][j] == 0) {
                        arr[i + 4][j + 1] = 1;
                    }
                }


            }
        }


        var it;
        arr[8][8] = 1;
        arr[1][1] = 1;
        arr[1][2] = 1;
        arr[2][2] = 1;
        arr[0][1] = 1;
        arr[0][2] = 1;
        arr[4][4] = 1;
        arr[5][6] = 1;
        arr[7][8] = 1;
        arr[2][3] = 1;
        arr[4][7] = 1;
        arr[0][0] = 1;
        arr[5][8] = 1;
        arr[8][7] = 1;
        arr[1][0] = 1;
        arr[6][5] = 1;
        arr[4][8] = 1;
        arr[5][2] = 1;
        arr[6][6] = 1;
        arr[7][7] = 1;
        arr[6][2] = 1;
        arr[1][5] = 1;
        arr[10][7] = 1;
        arr[6][10] = 1;
        arr[9][9] = 1;
        arr[10][3] = 1;
        arr[2][1] = 1;
        arr[6][3] = 1;
        arr[29][10] = 1;
        arr[5][7] = 1;
        arr[7][6] = 1;
        arr[8][9] = 1;
        arr[25][3] = 1;
        arr[26][4] = 1;
        arr[27][0] = 1;
        arr[28][0] = 1;
        arr[29][0] = 1;
        arr[29][5] = 1;;
        arr[29][25] = 1;
        arr[29][27] = 1;
        arr[29][28] = 1;
        arr[27][27] = 1;
        arr[22][22] = 1;
        arr[22][23] = 1;
        arr[22][25] = 1;
        arr[3][3] = 1;
        arr[4][3] = 1;
        arr[4][4] = 1;
        arr[11][11] = 1;
        arr[11][15] = 1;
        arr[12][15] = 1;
        arr[11][16] = 1;
        arr[13][29] = 1;
        arr[17][29] = 1;
        arr[3][7] = 1;
        arr[3][8] = 1;
        arr[10][7] = 1;
        arr[10][8] = 1;
        arr[10][10] = 1;
        arr[10][15] = 1;
        arr[10][22] = 1;
        arr[10][25] = 1;
        arr[10][27] = 1;
        arr[11][9] = 1;
        arr[11][8] = 1;
        arr[11][13] = 1;
        arr[11][17] = 1;
        arr[11][23] = 1;
        arr[11][28] = 1;
        arr[11][29] = 1;

        arr[12][9] = 1;
        arr[21][8] = 1;
        arr[17][13] = 1;
        arr[21][7] = 1;
        arr[19][24] = 1;
        arr[21][28] = 1;
        arr[17][22] = 1;

        arr[14][10] = 1;
        arr[21][18] = 1;
        arr[18][14] = 1;
        arr[22][27] = 1;
        arr[19][27] = 1;
        arr[20][27] = 1;
        arr[21][27] = 1;

        arr[16][10] = 1;
        arr[16][15] = 1;
        arr[16][27] = 1;
        arr[16][16] = 1;
        arr[16][17] = 1;
        arr[16][20] = 1;
        arr[25][18] = 1;
        arr[17][24] = 1;
        arr[23][26] = 1;
        arr[21][24] = 1;
        arr[22][22] = 1;
        arr[23][22] = 1;

        arr[26][26] = 1;
        arr[26][28] = 1;
        arr[26][27] = 1;
        arr[26][29] = 1;
        arr[25][22] = 1;
        arr[25][21] = 1;
        arr[25][26] = 1;
        arr[25][27] = 1;
        arr[14][14] = 1;
        arr[14][10] = 1;
        arr[7][7] = 1;
        arr[7][8] = 1;
        arr[7][4] = 1
        arr[7][3] = 1;
        arr[7][6] = 1;
        arr[7][10] = 1;
        arr[14][16] = 1;
        arr[14][15] = 1;
        arr[13][13] = 1;
        arr[13][11] = 1;
        arr[13][12] = 1;
        arr[13][16] = 1;
        arr[13][20] = 1;
        arr[13][17] = 1;
        arr[29][26] = 1;
        arr[29][5] = 1;
        arr[29][3] = 1;
        arr[28][28] = 1;
        arr[28][26] = 1;
        arr[28][25] = 1;

        for (let i = 2; i < 28; i += 5) {
            arr[i][j + 1] = 1;
        }

        for (let i = 1; i < 29; i += 6) {
            arr[i][0] = 1;
            arr[0][i] = 1;
        }

        for (let i = 3; i < 29; i += 11) {
            arr[i][0] = 1;
            arr[0][i] = 1;
        }

        for (let i = 9; i < 29; i += 4) {
            arr[i][0] = 1;
            arr[0][i] = 1;
        }

        for (let i = 9; i < 29; i += 9) {
            arr[i][i] = 1;
            arr[0][i] = 1;
        }

        for (let i = 2; i < 29; i += 2) {
            arr[i][0] = 1;
        }

        arr[28][29] = 1;
        arr[27][29] = 1;
        arr[26][29] = 1;
        arr[25][29] = 1;
        arr[25][28] = 1;
        arr[25][27] = 1;
        arr[24][27] = 1;
        arr[23][27] = 1;

        arr[19][19] = 1;
        arr[20][20] = 1;
        arr[20][19] = 1;
        arr[21][19] = 1;
        arr[21][21] = 1;
        arr[22][22] = 1;
        arr[20][17] = 1;
        arr[19][25] = 1;
        arr[19][26] = 1;
        arr[19][27] = 1;
        arr[20][26] = 1;
        arr[20][28] = 1;

        for (let i = 0; i < 30; i++) {
            arr[i][19] = 1;
            arr[i][16] = 1;
            arr[i][26] = 1;
            arr[i][13] = 1;
        }





        for (var i = 0; i < 30; i++) {
            for (var j = 0; j < 30; j++) {
                it = document.getElementById(i * 30 + j);

                it.style.backgroundImage = "none";

                if (arr[i][j] == 0) {
                    it.style.backgroundColor = "#808080";
                }
                else {
                    it.style.backgroundColor = "yellow";
                }

            }
        }

        ele = document.getElementById("0");
        ele.style.backgroundImage = "none";
        ele.style.backgroundImage = "url('./rat.png')"

        ele.style.backgroundSize = "100%";

        last = document.getElementById("899");
        last.style.backgroundImage = "url('./apple.jpg')";
        last.style.backgroundSize = "100%";




    }

    function updateColor(i, j) {
        elem = document.getElementById(i * 30 + j);
        if (i == 0 && j == 0) {
            return;
        }
        if (arr[i][j] == 0) {
            elem.style.backgroundImage = "none";
            elem.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/anti-rat-sign-insecticide-simple-vector-158096934.jpg')";
            elem.style.backgroundSize = "100%";
        }
        else {

            elem.style.backgroundImage = "url('./tick.png')"
            elem.style.backgroundSize = "100%";
        }
    }

    function isSafe(i, j) {
        if (i < 30 && j < 30 && arr[i][j] == 1) {
            return 1;
        }
        else {
            return 0;
        }

    }

    function solveMazeRecur(i, j) {
        if (i == 29 && j == 29) {
            direction.push(30 * i + j);
            arr[i][j] = 1;
            //updateColor(i,j);
            return 1;
        }

        if (isSafe(i, j) == 1) {
            // console.log(i + " " + j + "is safe");
            arr[i][j] = 1;
            updateColor(i, j);
            direction.push(30 * i + j);


            if (solveMazeRecur(i + 1, j) == 1) {
                return 1;
            }
            else if (solveMazeRecur(i, j + 1) == 1) {
                return 1;
            }

            arr[i][j] = 0;
            updateColor(i, j);
            direction.pop();
            return 0;
        }


    }

    function solveTheMaze() {
        if (solveMazeRecur(0, 0) == 0) {

            return 0;
        }

        return 1;

    }



    var generate = document.getElementById("generate-sudoku");

    var path = document.getElementById("solve");
    console.log(generate, path);

    generate.addEventListener("click", e => {
        console.log('yes the grid will be generated');
        getInput();
    })


    // generate.onclick = () => {
    //     console.log('yes');
    //     getInput();
    // }

    function printPath(direction) {
        answer = "There is a path ";
        let pp = direction.length;
        for (let i = 0; i < pp; i++) {
            answer += ' ' + direction[i];

        }

        return ans;

    }



    path.onclick = function () {
        ans = solveTheMaze();
        var v = document.getElementById("output");
        if (ans == 1) {

            res.innerHTML = "Path Possible";
            printPath(direction);
        }
        else {
            res.innerHTML = "No valid Path ";
        }



    }

}

