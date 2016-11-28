// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
  var turn = "player1"
  var runSquare = 0
   function makeShape1() {
     if (runSquare == 0) {
       if (turn=="player1"){
       var circle = document.createElementNS(namespace, "circle")
       var canvas = document.getElementById("game-board")
       circle.setAttribute("cx", 65)
       circle.setAttribute("cy", 50)
       circle.setAttribute("r", 30)
       circle.setAttribute("fill","yellow")
       canvas.appendChild(circle)
       turn ="player2"
       }else{
       var circle = document.createElementNS(namespace, "circle")
       var canvas = document.getElementById("game-board")
       circle.setAttribute("cx", 65)
       circle.setAttribute("cy",50)
       circle.setAttribute("r", 30)
       circle.setAttribute("fill", "blue")
       canvas.appendChild(circle)
       turn="player1"
       }
       runSquare = 1
   }
 }

   function makeShape2(){
     if (turn=="player1"){
     var circle = document.createElementNS(namespace, "circle")
     var canvas = document.getElementById("game-board")
     circle.setAttribute("cx", 150)
     circle.setAttribute("cy", 50)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill","yellow")
     canvas.appendChild(circle)
     turn ="player2"
     }else{
     if (runSquare2 == 0)
     var circle = document.createElementNS(namespace, "circle")
     var canvas = document.getElementById("game-board")
     circle.setAttribute("cx", 150)
     circle.setAttribute("cy",50)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill", "blue")
     canvas.appendChild(circle)
     turn="player1"
     runSquare2 = 1
     }
   }

   function makeShape3(){
     if (turn=="player1"){
     var circle = document.createElementNS(namespace, "circle")
     var canvas = document.getElementById("game-board")
     circle.setAttribute("cx", 235)
     circle.setAttribute("cy", 50)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill","yellow")
     canvas.appendChild(circle)
     turn ="player2"
     }else{
     var circle = document.createElementNS(namespace, "circle")
     var canvas = document.getElementById("game-board")
     circle.setAttribute("cx", 235)
     circle.setAttribute("cy",50)
     circle.setAttribute("r", 30)
     circle.setAttribute("fill", "blue")
     canvas.appendChild(circle)
     turn="player1"
    }
  }

  function makeShape4(){
    if (turn=="player1"){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 65)
    circle.setAttribute("cy", 140)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill","yellow")
    canvas.appendChild(circle)
    turn ="player2"
    }else{
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 65)
    circle.setAttribute("cy",140)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill", "blue")
    canvas.appendChild(circle)
     turn="player1"
   }
 }

  function makeShape5(){
    if (turn=="player1"){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 150)
    circle.setAttribute("cy", 140)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill","yellow")
    canvas.appendChild(circle)
    turn ="player2"
    }else{
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 150)
    circle.setAttribute("cy",140)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill", "blue")
    canvas.appendChild(circle)
    turn="player1"
    }
  }

  function makeShape6(){
    if (turn=="player1"){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 235)
    circle.setAttribute("cy", 140)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill","yellow")
    canvas.appendChild(circle)
    turn ="player2"
    }else{
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 235)
    circle.setAttribute("cy", 140)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill", "blue")
    canvas.appendChild(circle)
    turn="player1"
    }
  }
  function makeShape7(){
    if (turn=="player1"){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 65)
    circle.setAttribute("cy", 230)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill","yellow")
    canvas.appendChild(circle)
    turn ="player2"
    }else{
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 65)
    circle.setAttribute("cy",230)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill", "blue")
    canvas.appendChild(circle)
     turn="player1"
    }
  }

  function makeShape8(){
    if (turn=="player1"){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 150)
    circle.setAttribute("cy", 230)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill","yellow")
    canvas.appendChild(circle)
    turn ="player2"
    }else{
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 150)
    circle.setAttribute("cy",230)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill", "blue")
    canvas.appendChild(circle)
     turn="player1"
    }
  }
  function makeShape9(){
    if (turn=="player1"){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 235)
    circle.setAttribute("cy", 230)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill","yellow")
    canvas.appendChild(circle)
    turn ="player2"
    }else{
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 235)
    circle.setAttribute("cy",230)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill", "blue")
    canvas.appendChild(circle)
    turn="player1"
   }
  }
