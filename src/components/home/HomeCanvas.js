import { CanvasSpace, Form, Line, Vector } from 'pts';

export const buildHomeCanvas = (id) => {
    const colors = ["#FF3F8E", "#04C2C9", "#2E55C1"];
    const space = new CanvasSpace(id);
    space.setup({ bgcolor: "#252A35", retina: true });
    const form = new Form(space);

    var pts = [];
    var center = space.size.$divide(1.8);
    var angle = -(window.innerWidth * 0.5);
    var count = window.innerWidth * 0.05;
    if (count > 150) count = 150;
    var line = Line.slope([0, angle], [space.size.x, 0]);
    var mouse = center.clone();

    var r = Math.min(space.size.x, space.size.y) * 1;
    for (var i = 0; i < count; i++) {
        // var p = new Vector(Math.random() * r - Math.random() * r, Math.random() * r - Math.random() * r);
        // p.moveBy(center).rotate2D(i * Math.PI / count, center);
        // p.brightness = 0.1
        // pts.push(p);
    }

    // Canvas
    space.add({
        animate: function (time, fps, context) {

            for (var i = 0; i < pts.length; i++) {
                // rotate the points slowly
                var pt = pts[i];

                pt.rotate2D(1 / 20, center);
                form.stroke(false).fill(colors[i % 3]).point(pt, 1);

                // get line from pt to the mouse line
                var ln = new Line(pt).to(line.getPerpendicularFromPoint(pt));

                // opacity of line derived from distance to the line
                var opacity = Math.min(0.8, 1 - Math.abs(line.getDistanceFromPoint(pt)) / r);
                var distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse))

                if (distFromMouse < 50) {
                    if (pts[i].brightness < 0.3) pts[i].brightness += 0.015
                } else {
                    if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01
                }

                var color = "rgba(255,255,255," + pts[i].brightness + ")"
                form.stroke(color).fill(true).line(ln);
            }
        },

        onMouseAction: function (type, x, y, evt) {
            if (type == "move") {
                mouse.set(x, y);
            }
        },

        onTouchAction: function (type, x, y, evt) {
            this.onMouseAction(type, x, y);
        }
    });


    space.play();

    return space;
}
