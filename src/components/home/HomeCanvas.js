import { CanvasSpace, Line, Pt, Group } from 'pts';

export const buildHomeCanvas = (homeCanvasRef, space) => {
    const colors = ["#FF3F8E", "#04C2C9", "#2E55C1"];

    space = new CanvasSpace('HomeCanvas');
    space.setup({ bgcolor: "#252A35", retina: true });

    const form = space.getForm();

    const {clientWidth, clientHeight} = homeCanvasRef.current;

    const pts = [];
    const center = new Pt(clientWidth / 2, clientHeight / 2);
    const angle = -(clientWidth * 0.5);
    let count = clientWidth * 0.05;
    if (count > 150) count = 150;
    const line = new Group (new Pt(0, angle), new Pt(clientWidth, 0));
    let mouse = new Pt(0, 0);

    for (let i = 0; i < count; i++) {
        const p = new Pt(Math.random() * clientWidth, Math.random() * clientHeight);
        p.rotate2D(i * Math.PI / count, center);
        p.brightness = 0.1;
        pts.push(p);
    }

    // Canvas
    space.add({
        animate: function (time, fps, context) {
            for (let i = 0; i < pts.length; i++) {
                // rotate the points slowly
                const pt = pts[i];

                pt.rotate2D(0.001, center);
                form.stroke(false).fill(colors[i % 3]).point(pt, 1);

                // get line from pt to the center line
                const ln = new Group(pt, Line.perpendicularFromPt(line, pt));

                // opacity of line derived from distance to the line
                const distFromCenter = Math.abs(Line.distanceFromPt(ln, center));

                if(Line.collinear(ln[0], ln[1], mouse, 1.5)){
                    pts[i].brightness = 0.3;
                } else {
                    if (distFromCenter < 80) {
                        if (pts[i].brightness < 0.3) pts[i].brightness += 0.015
                    } else {
                        if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01
                    }
                }

                const color = "rgba(255,255,255," + pts[i].brightness + ")";
                form.stroke(color).fill(true).line(ln);
            }
        }
    });

    space._canvas.addEventListener('pointermove', function (e) {
        mouse = new Pt(e.offsetX, e.offsetY);
    });

    space.play();

    return space;
}
