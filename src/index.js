import p5 from "p5";

/** @param {p5} p */
let ctx;

const sketch = (p) => {

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    
    ctx = p.drawingContext;

  };

  p.draw = () => {
    p.background('#E5E8E2');

    const grad = ctx.createRadialGradient(
      p.width / 2,
      p.height/ 2, 
      1, 
      p.width/2, 
      p.height/2, 
      p.width/2,
    );
    grad.addColorStop(0.1/2, "rgba(8, 17, 51, 100)");
    grad.addColorStop(0.5,"rgba(0, 55, 132, 100)");
    grad.addColorStop(0.9, "rgba(229, 232, 226, 50)");

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
