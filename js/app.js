document.addEventListener("DOMContentLoaded", function() {

//GRA MEMORY
    //tablica z nazwami grafik dla odkrytych kart
    var cardsList = ["bobr.png","zebra.png","pies.png","kaczka.png","mors.png","osiol.png","mors.png","krowa.png","slon.png","lew.png","kaczka.png","krowa.png","bobr.png","lew.png","pies.png","zebra.png","malpa.png","slon.png","osiol.png","malpa.png"];

    //zmienne "trzymające" poszczególne karty
    var card0 = document.getElementById("card0");
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");
    var card3 = document.getElementById("card3");
    var card4 = document.getElementById("card4");
    var card5 = document.getElementById("card5");
    var card6 = document.getElementById("card6");
    var card7 = document.getElementById("card7");
    var card8 = document.getElementById("card8");
    var card9 = document.getElementById("card9");
    var card10 = document.getElementById("card10");
    var card11 = document.getElementById("card11");
    var card12 = document.getElementById("card12");
    var card13 = document.getElementById("card13");
    var card14 = document.getElementById("card14");
    var card15 = document.getElementById("card15");
    var card16 = document.getElementById("card16");
    var card17 = document.getElementById("card17");
    var card18 = document.getElementById("card18");
    var card19 = document.getElementById("card19");

    //pozostałe zmienne
    var stop = false; //zablokowanie odkrywania pozostalych kart do czasu, aż dwie wcześniej odkryte znów się zasłonią lub znikną, gdy tworzą one parę
    var visible1 = false; //gdy false to odsłaniamy pierwszą kartę, gdy true - pierwsza karta jest już widoczna i odsłaniamy drugą
    var visible1_index; //indeks odsłoniętej pierwszej karty
    var left = 10; //ile zostało par do znalezienia
    var counter = 0; //licznik wykonanych ruchów
    var cards = []; //tablica na przemieszane karty

    //funkcja do przemieszania kart
    function mixArray(cardsList) {
        for (var i = cardsList.length; i >= 0; i--) {
            var f = Math.floor(Math.random()*(i+1));
            for (var j = 0, k = 0; j < cardsList.length; j++) {
                if (cards[j] === undefined) {
                    if (k === f) {
                        cards[j] = cardsList[i];
                        break;
                    }
                    k++;
                }
            }
        }
        return cards;
    }
    mixArray(cardsList);

    //funkcja do odkrywania kart
    function uncoverCard(number) {
        var cardd = document.getElementById("card"+number);
        var opac = window.getComputedStyle(cardd,null).getPropertyValue('opacity');
        if (opac != 0 && stop == false) { //jeśli karta nie zniknęła po sparowaniu (czyli jest widoczna) i nie ma blokady odkrywania karty (czyli jeszcze nie są odkryte dwie karty)
            stop = true;
            document.getElementById("card" + number).style.backgroundImage = "url(./img/memory/" + cards[number] + ")";

            if (visible1 == false) { //karta jest odkryta jako pierwsza
                visible1 = true;
                visible1_index = number;
                stop = false;
            } else {
                //odsłaniam drugą kartę
                if (cards[visible1_index] == cards[number]) { //gdy odkryte karty tworzą parę
                    setTimeout(function() {
                        goodCards(number, visible1_index)
                    }, 1000);
                } else { //gdy odkryte karty nie są parą
                    setTimeout(function() {
                        wrongCards(number, visible1_index)
                    }, 1000);
                }
                counter++;
                document.querySelector(".score").innerHTML = 'Liczba ruchów: ' + counter;
                visible1 = false;
            }
        }
    }

    //funkcja do znikania sparowanych kart
    function goodCards(numb1, numb2) {
        document.getElementById("card" + numb1).style.opacity = "0";
        document.getElementById("card" + numb2).style.opacity = "0";
        left--;
        if (left == 0) {
            document.querySelector(".memory-board").innerHTML = "<p>Brawo! Udało Ci się ukończyć grę w <span>" + counter + "</span> ruchach<br/><a href='./memory.html'><button class='new-game' onclick='mixArray(cards)' title='Wczytaj nową grę'>Nowa gra</button></a></p>";
            document.querySelector(".memory-score").style.visibility = "hidden";
        }
        stop = false;
    }

    //funkcja do ponownego zakrycia niedobranych kart
    function wrongCards(numb1, numb2) {
        document.getElementById("card" + numb1).style.backgroundImage = "url(./img/memory/karta.png)";
        document.getElementById("card" + numb1).classList.remove("activeCard");
        document.getElementById("card" + numb2).style.backgroundImage = "url(./img/memory/karta.png)";
        document.getElementById("card" + numb2).classList.remove("activeCard");
        stop = false;
    }

    //zdarzenia do klikanej karty
    card0.addEventListener("click", function() {
        uncoverCard(0);
        this.classList.add("activeCard");
    });
    card1.addEventListener("click", function() {
        uncoverCard(1);
        this.classList.add("activeCard");
    });
    card2.addEventListener("click", function() {
        uncoverCard(2);
        this.classList.add("activeCard");
    });
    card3.addEventListener("click", function() {
        uncoverCard(3);
        this.classList.add("activeCard");
    });
    card4.addEventListener("click", function() {
        uncoverCard(4);
        this.classList.add("activeCard");
    });
    card5.addEventListener("click", function() {
        uncoverCard(5);
        this.classList.add("activeCard");
    });
    card6.addEventListener("click", function() {
        uncoverCard(6);
        this.classList.add("activeCard");
    });
    card7.addEventListener("click", function() {
        uncoverCard(7);
        this.classList.add("activeCard");
    });
    card8.addEventListener("click", function() {
        uncoverCard(8);
        this.classList.add("activeCard");
    });
    card9.addEventListener("click", function() {
        uncoverCard(9);
        this.classList.add("activeCard");
    });
    card10.addEventListener("click", function() {
        uncoverCard(10);
        this.classList.add("activeCard");
    });
    card11.addEventListener("click", function() {
        uncoverCard(11);
        this.classList.add("activeCard");
    });
    card12.addEventListener("click", function() {
        uncoverCard(12);
        this.classList.add("activeCard");
    });
    card13.addEventListener("click", function() {
        uncoverCard(13);
        this.classList.add("activeCard");
    });
    card14.addEventListener("click", function() {
        uncoverCard(14);
        this.classList.add("activeCard");
    });
    card15.addEventListener("click", function() {
        uncoverCard(15);
        this.classList.add("activeCard");
    });
    card16.addEventListener("click", function() {
        uncoverCard(16);
        this.classList.add("activeCard");
    });
    card17.addEventListener("click", function() {
        uncoverCard(17);
        this.classList.add("activeCard");
    });
    card18.addEventListener("click", function() {
        uncoverCard(18);
        this.classList.add("activeCard");
    });
    card19.addEventListener("click", function() {
        uncoverCard(19);
        this.classList.add("activeCard");
    });

    //wgranie nowej gry
    var btn = document.querySelector(".new-game");
    btn.addEventListener("click", function(cards,i) {
        for (i = cards.length; i; cards.push(cards.splice(~~(Math.random()*(i--)),1)));
    })


//GRA ZWINNY PINGWIN
    //konstruktor "Penguin"
    function Penguin() {
        this.x = 0;
        this.y = 0;
        this.direction = "right";
    }

    //konstruktor "Fish"
    function Fish() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }

    //konstruktor "Game"
    function Game() {
        var self = this;
        this.board = document.querySelectorAll(".penguin-board > div");
        this.penguinPlayer = new Penguin();
        this.fish = new Fish();
        this.score = 0;
        this.index = function(x,y) {
          return x + (y * 10);
        }
        //metoda, która pokaże Pingwina w divie o pozycji x i y Pingwina, poprzez nadanie temu divowi klasy "penguin"
        this.showPenguin = function() {
            this.board[this.index(this.penguinPlayer.x,this.penguinPlayer.y)].classList.add('penguinPlayer');
        }
        //metoda, która pokaże rybę w divie o pozycji x i y ryby, poprzez nadanie temu divowi klasy "fish"
        this.showFish = function() {
            this.board[this.index(this.fish.x,this.fish.y)].classList.add('fish');
        }
        //metoda startGame
        this.startGame = function() {
            //wprowadzam zmienną self, zeby wewnątrz eventu móc użyć "this", które będzie odnosiło się do obiektu, a nie do eventu
            this.idSetInterval = setInterval(function(){
                self.movePenguin();
            }, 300);
        }
        //metoda dotycząca poruszania się Pingwina
        this.movePenguin = function(){
            if (self.penguinPlayer.direction === "right") {
                self.penguinPlayer.x = this.penguinPlayer.x + 1;
            } else if (self.penguinPlayer.direction === "left") {
                self.penguinPlayer.x = this.penguinPlayer.x - 1;
            } else if (self.penguinPlayer.direction === "up") {
                self.penguinPlayer.y = this.penguinPlayer.y - 1;
            } else if (self.penguinPlayer.direction === "down"){
                self.penguinPlayer.y = this.penguinPlayer.y + 1;
            }
            self.checkFishCollision();
            self.gameOver();
            self.hideVisiblePenguin();
            self.showPenguin();
        }
        //metoda ukrywająca starą pozycję Pingwina
        this.hideVisiblePenguin = function() {
            document.querySelector(".penguinPlayer").classList.remove('penguinPlayer');
        }
        //metoda obsługująca klawiaturę
        this.turnPenguin = function(event) {
            switch (event.which) {
                case 37:
                    self.penguinPlayer.direction = "left";
                    break;
                case 38:
                    self.penguinPlayer.direction = "up";
                    break;
                case 39:
                    self.penguinPlayer.direction = "right";
                    break;
                case 40:
                    self.penguinPlayer.direction = "down";
                    break;
            }
        }
        //metoda dla wersji telefonicznej do obsługi sterowania za pomocą strzałek
        var left = document.querySelector(".left");
        var up = document.querySelector(".up");
        var right = document.querySelector(".right");
        var down = document.querySelector(".down");

        left.addEventListener("click", function() {
            self.penguinPlayer.direction = "left";
        });
        up.addEventListener("click", function() {
            self.penguinPlayer.direction = "up";
        });
        right.addEventListener("click", function() {
            self.penguinPlayer.direction = "right";
        });
        down.addEventListener("click", function() {
            self.penguinPlayer.direction = "down";
        });
        //metoda kolizji Pingwina z rybą
        this.checkFishCollision = function() {
            if (this.penguinPlayer.x == this.fish.x && this.fish.y == this.penguinPlayer.y) {
                document.querySelector(".fish").classList.remove("fish");
                this.score++;
                document.querySelector(".points strong").innerText = this.score;
                this.fish = new Fish();
                this.showFish();
            }
        }
        //metoda kolizji Pingwina ze ścianą
        this.gameOver = function() {
            if (this.penguinPlayer.x < 0 || this.penguinPlayer.x > 9 || this.penguinPlayer.y < 0 || this.penguinPlayer.y > 9) {
                clearInterval(this.idSetInterval);
                this.hideVisiblePenguin();
                document.querySelector(".penguin-board").innerHTML =
                "<p>Koniec gry!<br/>Rybki zebrane przez Twojego pingwina: <span>" + this.score + "</span><br/><a href='./penguin.html'><button class='new-game' title='Wczytaj nową grę'>Nowa gra</button></a></p>";
                document.querySelector(".penguin-score").style.display = "none";
                document.querySelector(".arrows").style.display = "none";
            }
        }
    }

    var game = new Game();
    game.showPenguin();
    game.showFish();
    game.startGame();
    document.addEventListener("keydown", function(event) {
        game.turnPenguin(event);
    });
});
