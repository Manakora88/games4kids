document.addEventListener("DOMContentLoaded", function() {
  
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
