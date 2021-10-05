let canvas=document.getElementById("canvas");
let ctx=canvas.getContext('2d')
ctx.moveTo(100,100);

ctx.fillText("center",500,300);
ctx.arc(500,300,100,0,3.14);
ctx.stroke();