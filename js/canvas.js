/*jshint esversion: 6*/
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

var szer = canvasElem.width;
var wys = canvasElem.height;

// Kolor wypełnienia
ctx.fillStyle = "#27ac2d";
// Rysowanie prostokątów/kwadratów
// x, y, szerokość, wysokość
ctx.fillRect(25, 25, 100, 100);
// Kolor obrysu
ctx.fillStroke = "#000000";
// Drugi obrys prostokąta
ctx.strokeRect(30, 30, 100, 100);
// Czyszczenie obszaru
ctx.clearRect(0, 0, 400, 400);
// Rysowanie linii
ctx.moveTo(szer, wys);
ctx.lineTo(0, 0);
ctx.moveTo(wys, 0);
ctx.lineTo(0, 400);
ctx.stroke();

// Rysowanie koła
ctx.beginPath();
// x, y, radius, start, stop, PRAWO-TRUE LEWO-FALSE
ctx.lineWidth = 5;
ctx.arc(szer / 2, 100, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(szer / 2, 300, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(wys / 2 / 2, 200, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(300, 200, 50, 0, 2 * Math.PI);
ctx.stroke();

// Tekst
ctx.lineWidth = 1;
ctx.font = "normal 20px Arial";
ctx.textBaseline = "middle";
ctx.textAlign = "center";
ctx.strokeText('Grafika w canvas', 200, 200);
