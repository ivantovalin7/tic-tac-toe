// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
  var turn = "player1"
   function makeShape1() {
     if (turn == "player1"){
     var circle = document.createElementNS(namespace, "circle")
     var canvas = document.getElementById("game-board")
     circle.setAttribute("cx", 65)
     circle.setAttribute("cy", 50)
     circle.setAttribute("r", 30)
     canvas.appendChild(circle)
     circle.setAttribute("fill","violet")
     turn ="player2"
     } else {
     var rectangle = document.createElementNS(namespace, "rect")
     var canvas = document.getElementById("game-board")
     rectangle.setAttribute("x", 50)
     rectangle.setAttribute("y",50)
     rectangle.setAttribute("width", 60)
     rectangle.setAttribute("height", 60)
     canvas.appendChild(rectangle)
     turn="player1"
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
