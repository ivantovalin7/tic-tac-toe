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
 var runSquare2 = 0
   function makeShape2(){
      if (runSquare2 == 0) {
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
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 150)
      circle.setAttribute("cy",50)
      var canvas = document.getElementById("game-board")
      circle.setAttribute("r", 30)
      circle.setAttribute("fill", "blue")
      canvas.appendChild(circle)
      turn="player1"
        }
      runSquare2 = 1
        }
      }
var runSquare3 = 0
    function makeShape3(){
       if (runSquare3 == 0){
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
        runSquare3 = 1
      }
    }
var runSquare4 = 0
    function makeShape4(){
      if (runSquare4 == 0){
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
        runSquare4 = 1
      }
    }
var runSquare5 = 0
    function makeShape5(){
      if (runSquare5 == 0){
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
        runSquare5 = 1
      }
      }
var runSquare6 = 0
    function makeShape6(){
      if (runSquare6 == 0){
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
        runSquare6 = 1
      }
      }
var runSquare7 = 0
    function makeShape7(){
      if (runSquare7 == 0){
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
        runSquare7 = 1
      }
      }
var runSquare8 = 0
    function makeShape8(){
      if (runSquare8 == 0){
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
      runSquare8 = 1
    }
    }
var runSquare9 = 0
    function makeShape9(){
      if (runSquare9 == 0){
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
     runSquare9 = 1
    }
    }
