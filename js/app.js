document.addEventListener("DOMContentLoaded", function() {

    //tworzę funkcję do zamiany poszczególnych puzzli
    function goBlocks(square1, square2) {
        var sq = document.getElementById(square1).className;
        document.getElementById(square1).className = document.getElementById(square2).className;
        document.getElementById(square2).className = sq;
    }


    //tworzę funkcję, która przetasuje układ puzzli
    function mix() {
        for (var row = 1; row <= 4; row++) {
            for (var col = 1; col <= 4; col++) {
                var roww = Math.floor(Math.random()*4 + 1); //losowy rząd 1-4
                var coll = Math.floor(Math.random()*4 + 1); //losowa kolumna 1-4

                goBlocks("square" + row + "_" + col, "square" + roww + "_" + coll);
            }
        }
    }

    //funkcja do przesuwania puzzli w miejsce białego miejsca
    function clkBlock(row, col) {
        var square = document.getElementById("square" + row + "_" + col);
        var block = square.className;
        if (block != "block16") {
            // jeśli puste miejsce mam po lewej stronie
            if (col > 1) {
                if (document.getElementById("square" + row + "_" + (col - 1)).className == "square16") {
                    mix("square" + row + "_" + col, "square" + row + "_" + (col - 1));
                    return;
                }
            }
            // jeśli puste miejsce mam po prawej stronie
            if (col < 4) {
                if (document.getElementById("square" + row + "_" + (col + 1)).className == "square16") {
                    mix("square" + row + "_" + col, "square" + row + "_" + (col + 1));
                    return;
                }
            }
            // jeśli puste miejsce mam powyżej
            if (row > 1 ) {
                if (document.getElementById("square" + (row - 1) + "_" + col).className == "square16") {
                    mix("square" + row + "_" + col, "square" + (row - 1) + "_" + col);
                    return;
                }
            }
            // jeśli puste miejsce mam poniżej
            if (row < 4 ) {
                if (document.getElementById("square" + (row + 1) + "_" + col).className == "square16") {
                    mix("square" + row + "_" + col, "square" + (row + 1) + "_" + col);
                    return;
                }
            }
        }
    }
});
