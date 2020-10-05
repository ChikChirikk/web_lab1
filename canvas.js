canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
draw();

function draw() {
    context.beginPath();
    context.fillStyle = "rgba(91,95,201,0.58)";
    context.strokeStyle = "rgba(91,95,201,0.58)";
//прямоугольник
    context.fillRect(14, 150, 136, 131)
//четверть круга
    context.moveTo(150, 150)
    context.arc(150, 150, 69, 0, -Math.PI / 2, true);
//треугольник
    context.moveTo(150, 150);
    context.lineTo(219, 150);
    context.lineTo(150, 281);
    context.lineTo(150, 150);
    context.fill();
    context.stroke();

    context.beginPath();

    context.lineWidth = 2;
    context.strokeStyle = 'black';
//Ось Y
    context.moveTo(150, 300);
    context.lineTo(150, 0);
    context.lineTo(153, 7);
    context.moveTo(150, 0);
    context.lineTo(147, 7);
    context.lineTo(154, 7);
    context.fillText("y", 135, 8);

//Ось X
    context.moveTo(0, 150);
    context.lineTo(300, 150);
    context.lineTo(293, 147);
    context.moveTo(300, 150);
    context.lineTo(293, 153);
    context.lineTo(293, 146);
    context.fillText("x", 292, 166);

//штрихи x
    context.moveTo(14, 150);
    context.lineTo(14, 145);
    context.lineTo(14, 155);

    context.moveTo(82, 150);
    context.lineTo(82, 145);
    context.lineTo(82, 155);

    context.moveTo(219, 150);
    context.lineTo(219, 145);
    context.lineTo(219, 155);

    context.moveTo(281, 150);
    context.lineTo(281, 145);
    context.lineTo(281, 155);

//штрихи y
    context.moveTo(150, 14);
    context.lineTo(145, 14);
    context.lineTo(155, 14);

    context.moveTo(150, 81);
    context.lineTo(145, 81);
    context.lineTo(155, 81);

    context.moveTo(150, 219);
    context.lineTo(145, 219);
    context.lineTo(155, 219);

    context.moveTo(150, 281);
    context.lineTo(145, 281);
    context.lineTo(155, 281);
    context.closePath();

    context.stroke();
}

function relMouseCoords(event) {
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do {
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while (currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x: canvasX, y: canvasY}
}

HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;


context.lineWidth = 2;
context.strokeStyle = 'black';


canvas.onclick = function () {
    point();
}
function point(){
    context.beginPath();
    context.arc(150, 150, 3, 0, 2 * Math.PI);
    context.stroke();
}

function draw_point(x, y, r, isHit) {
    context.beginPath();
    (isHit) ? context.strokeStyle = "rgb(13,129,32)" : context.strokeStyle = "rgb(95,15,46)";
    context.arc(150 + 50 * x / r, 150 - 50 * y / r, 3, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
}
function add_row(x, y, r, result, script_time, time) {
    point();
    cookies_data += x + "," + y + "," + r + "," + result + "," + script_time + "," + time + ";";
    document.cookie = encodeURIComponent("data") + '=' + (encodeURIComponent(cookies_data));
    //point();
    let newRow = '<tr>'
        + '<td>' + x + '</td>'
        + '<td>' + y + '</td>'
        + '<td>' + r + '</td>'
        + '<td>' + result + '</td>'
        + '<td>' + script_time + '</td>'
        + '<td>' + time + '</td>' +
        '</tr>';
    table.innerHTML += (newRow);
    point();
}