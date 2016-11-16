// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var makeShape1 = 0
   function makeShape1() {
     var circle = document.createElementNS(namespace, "circle")
     var canvas = document.getElementById("game-board")
     circle.setAttribute("cx", 63)
     circle.setAttribute("cy", 50)
     circle.setAttribute("r", 30)
     canvas.appendChild(circle)
     if (makeShape1 == 0){
       alert("circle")
       makeShape1 = 1
     }
   }
