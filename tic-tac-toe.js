// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
   function makeShape() {
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 100)
    circle.setAttribute("cy", 100)
    circle.setAttribute("r", 50)
    canvas.appendChild(circle)
   }
