// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
  var = "player1"
   function makeShape1() {
     var circle = document.createElementNS(namespace, "circle")
     var canvas = document.getElementById("game-board")
     circle.setAttribute("cx", 65)
     circle.setAttribute("cy", 50)
     circle.setAttribute("r", 30)
     canvas.appendChild(circle)
     circle.setAttribute("fill","violet")
     if (turn == "player1"){

       turn="player2"
     }
   }
  function makeShape2(){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 150)
    circle.setAttribute("cy", 50)
    circle.setAttribute("r", 30)
    canvas.appendChild(circle)
    circle.setAttribute("fill","violet")
  }
  function makeShape3(){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 235)
    circle.setAttribute("cy", 50)
    circle.setAttribute("r", 30)
    canvas.appendChild(circle)
    circle.setAttribute("fill","violet")
  }
  function makeShape4(){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
  }
  function makeShape5(){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
  }
  function makeShape6(){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
  }
  function makeShape7(){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
  }
  function makeShape8(){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
  }
  function makeShape9(){
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
  }
