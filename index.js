let canvas=document.getElementById("canvas");
let ctx=canvas.getContext('2d');
ctx.moveTo(100,50);
ctx.lineTo(100,550);
ctx.lineTo(800,550);
let data=[500,200,300,100,300,350,450];


for(let i=0;i<=500;i+=50){
ctx.fillText(i,75,555-i);}

for(let i=0;i<=700;i+=50){
ctx.fillText(i,100-5+i,575);}
ctx.moveTo(100,550);
x=200;
data.forEach((val)=>{
ctx.lineTo(x,550-val);
ctx.fillText(val,x,550-val-10);
x+=100;
})

ctx.lineTo(800,550);

ctx.stroke();
