let canvas=document.getElementById("canvas");
let ctx=canvas.getContext('2d');
// ctx.moveTo(0,0);
// ctx.lineTo(100,100);
// ctx.stroke();
let data=[
    {
    subject:"C++",
    marks:87,
    color:"blue"
    },
    {
    subject:"Maths",
    marks:75,
    color:"green"
    },
    {
        subject:"Node",
        marks:33,
        color:"red",
    },
    {
        subject:"React",
        marks:73,
        color:"yellow"
    },
    {
        subject:"C",
        marks:45,
        color:"pink"
    },
    {
        subject:"Java",
        marks:95,
        color:"orange"
    }
]
let totalMarks=0
data.map((sub)=>{
    totalMarks+=sub.marks;
})

let startAngle=0;
let endAngle;

for(let i=0;i<data.length;i++){
endAngle=((Math.PI*2*data[i].marks)/totalMarks)+startAngle;
ctx.beginPath();
ctx.moveTo((canvas.width)/2,(canvas.height)/2);
ctx.arc((canvas.width)/2,(canvas.height)/2,250,startAngle,endAngle);
ctx.fillStyle=data[i].color;
ctx.fill();
ctx.strokeStyle="white";
ctx.lineWidth="5";
startAngle=endAngle;
ctx.stroke();
}