
let canvas = document.getElementById('canvas');
let context = document.getElementById('canvas').getContext('2d');


// var myGameArea = {
//   canvas: document.createElement("canvas"),
//   start: function () {
//     this.canvas.width = 480;
//     this.canvas.height = 270;
//     this.context = this.canvas.getContext("2d");
//     document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     this.clear = function () {
//       this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     };
//     // call updateGameArea() every 20 milliseconds
//     this.interval = setInterval(updateGameArea, 20);
//   },
//   stop: function () {
//     clearInterval(this.interval);
//   },
//   score: function() {
//     var points = Math.floor(this.frames / 5);
//     this.context.font = "18px serif";
//     this.context.fillStyle = "black";
//     this.context.fillText("Score: " + points, 350, 50);
//   }
// };



// array of all obstacles
let monkeyArr = []

let frameCounter = 0


class GameCanvas {
    constructor(width, height) {
      this.canvas = document.getElementById('canvas')
      this.context = document.getElementById('canvas').getContext('2d');
      this.canvas.width = width;
      this.canvas.height = height;
      this.width = this.canvas.width;
      this.height = this.canvas.height;

    }

    clearBoard() {
      this.context.clearRect(0, 0, this.width, this.height)
    }
  
    createBoard() {
      this.clearBoard()
      this.draw()
    }

    draw() {
        // context.clearRect(0, 0, gameCanvas.width, gameCanvas.height)
        gameCanvas.clearBoard() 
        frameCounter ++
        // console.log(frameCounter)


        // let monk = new Monk(20, 300, 30, 30, 70);
        let monkey1 = new Monkey(330, 300, 70, 70, 30);

        // monk.loadAndDrawImage(monk, "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg")
        // monkey1.loadAndDrawImage(monkey1, "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg")

        // monk.loadAndDrawImage(monk)

        monk.update()


        monkeyArr.forEach((o) => {
        
          // if (car.crashWith(o)) {
          //     gameRunning = false
          //     gameOver()  //MAKE GAME OVER
          //     return
          // }
          o.update()
          console.log(monkeyArr)
      })
  
      // car.update();
  
  
      // after each 1 second
      if (frameCounter % 60 === 0) {
          // monkey1.update()

          let randomPosX = Math.floor(Math.random() * 300)
          monkeyArr.push(new Monkey(randomPosX))    
          monkeyArr.push(new Monkey(randomPosX)) 
          console.log('monkeyArr is ' + monkeyArr)
      }






        window.requestAnimationFrame(gameCanvas.draw)
    }

    }

    