let isPlaying = false
let osc = null
let env;
function setup() {
  
// createCanvas(600, 600);    
  
osc = new p5.Oscillator('sine')
env = new p5.Envelope();
  
osc.start()
  
isPlaying = true
}

function draw() {
  if(touches.length > 0){
	for(let i=0; i<touches.length;i++){
if(isPlaying){
osc.freq(touches[0].x, 1)
env.ramp(osc, 0, 1, 0);
}
  }
}
}