import p5 from "p5";

/** @param {p5} p */
const sketch = (p) => {
  let ctx;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    
    ctx = p.drawingContext;

  };

  p.draw = () => {
    p.background(100);

    const grad = ctx.createRadialGradient(
      p.width/ 3,
      p.height/2, 
      1, 
      p.width/3, 
      p.height/2, 
      p.width/3,
    );
    grad.addColorStop(0, "rgba(8, 17, 51, 100)");
    grad.addColorStop(0.6,"rgba(0, 55, 132, 100)");
    grad.addColorStop(1, "rgba(229, 232, 226, 0)");

    p.push();
    p.noStroke();
    ctx.fillStyle= grad;
  
    p.rect(0, 0, p.width, p.height);
    p.pop();

  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch);
