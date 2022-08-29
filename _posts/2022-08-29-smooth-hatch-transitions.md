<script src="https://cdn.jsdelivr.net/npm/p5@1.1.9/lib/p5.js"></script>

In a generative art series I worked on in mid-2022 called [Hatchet](https://www.fxhash.xyz/u/bupedev), I filled polygons arranged in symmetric patterns with hatch lines of varying density. If you study any of the pieces in the Hatchet series, you may notice that as polygons move further from the center, they become less 'filled'. I spent a considerable amount of time refining the optimal spacing of these hatch lines such that the transition between polygon fill density was as smooth as possible. You can do quite a bit with some highschool geometry, allow me to share my learnings.

{% include ext-figure.html caption="Hatchet: Magarikuneri #31" link="https://www.fxhash.xyz/gentk/921437" url="https://gateway.fxhash2.xyz/ipfs/QmTaVGkyD6ash7m7F3GWKsr2sxDi4jTy1nj41ABKPa3jqW/?fxhash=opTQWCNFvw6PSv1BzPAkZhEFuoFwaZui5Gnd1SGLYGgbgrAWrrg"%}

## The Problem

Let's assume we have hatch lines of even width that are arranged in parallel, and that we can adjust the spacing between these lines. Objectively, what I needed for my piece was a function that takes the area of a polygon that should be filled with hatch lines and returns the spacing between the hatch lines required to do so. My first thought was rather naive, "maybe there is probably a linear relationship between hatch fill and spacing". We can see what happens if we subscribe to this assumption.

<div id="sketch-naive-hatch-transition" style="width: 75%; height: 50vh; margin: auto"></div>

<script>
    const angles = [30, 10, 45, 35, 60, 38, 75, 67];
    const canvasId = 'sketch-naive-hatch-transition';
    const canvasDiv = document.getElementById(canvasId);
//
    function setup() {
        var width = canvasDiv.getBoundingClientRect().width;
        var height = canvasDiv.getBoundingClientRect().height;
        const canvas = createCanvas(width, height);
        canvas.parent(canvasId)
        noStroke();
        noLoop(); // Run once and stop
    }
//
    function draw() {
        background(100);
        pieChart(300, angles);
    }
//
    function pieChart(diameter, data) {
        let lastAngle = 0;
        for (let i = 0; i < data.length; i++) {
            let gray = map(i, 0, data.length, 0, 255);
            fill(gray);
            arc(
            width / 2,
            height / 2,
            diameter,
            diameter,
            lastAngle,
            lastAngle + radians(angles[i])
            );
            lastAngle += radians(angles[i]);
        }
    }
//    
    function windowResized() {
        var width = canvasDiv.getBoundingClientRect().width;
        var height = canvasDiv.getBoundingClientRect().height;
        resizeCanvas(width, height);
    }
</script>