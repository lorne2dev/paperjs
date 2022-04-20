import points from "./data.js";

const drawLine = (canvas, start, end) => {
    const path = new paper.Path();
    path.strokeColor = "#ff0000";
    const startPt = new paper.Point(start.x, start.y);
    const endPt = new paper.Point(end.x, end.y);
    path.moveTo(startPt);
    path.lineTo(endPt);
};

const drawCircle = (canvas, point) => {
    const radius = 8;

    const circle = new paper.Path.Circle(
        new paper.Point(point.x, point.y),
        radius
    );
    circle.strokeColor = "#0000ff";
    circle.strokeWidth = 2;
    circle.fillColor = "rgba(128,128,128,0.5)";

    circle.onMouseEnter = (e) => {
        e.target.strokeColor = "#00ffff";
        e.target.fillColor = "#000";
    };

    circle.onMouseLeave = (e) => {
        e.target.strokeColor = "#0000ff";
        e.target.fillColor = "rgba(128,128,128,0.5)";
    };
};

const initialiseCanvas = () => {
    const canvas = document.getElementById("canvas");
    paper.setup(canvas);

    for (let i = 0; i < points.length - 1; i++) {
        drawLine(canvas, points[i], points[i + 1]);
    }

    points.forEach((point) => {
        drawCircle(canvas, point);
    });

    paper.view.draw();
};

window.onload = () => {
    initialiseCanvas();
};
