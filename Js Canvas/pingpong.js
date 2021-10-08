let canvas=document.getElementById("canvas");
let ctx=canvas.getContext('2d');
let x=100;
let y=100;
let dx=10;
let dy=10;
  ctx.fillStyle="red";
pingpong=()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,30,0,Math.PI*2);
   x+=dx;
   y+=dy;
    
   if(x>=canvas.width || x <=0){
dx=-dx;
  if(x<=0)
  ctx.fillStyle="yellow";
  else
  ctx.fillStyle="orange";
   }
   if(y>=canvas.height || y<=0){
   dy=-dy;
   if(y<=0)
   ctx.fillStyle="blue";
   else
   ctx.fillStyle="green";

}
   ctx.fill();
   ctx.stroke();
   requestAnimationFrame(pingpong);
}
pingpong();