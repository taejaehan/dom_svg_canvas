function clickDom(){
    console.log("clickDom")
}
function clickSvg(){
    console.log("clickSvg")
}
function clickCanvas(event){
    const rect = document.getElementById("myCanvas").getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("clickCanvas x, y :", x, y)
}

function drawStar(cx,cy,spikes,outerRadius,innerRadius){
    const step=Math.PI/spikes;
    let rot=Math.PI/2*3;
    let x=cx;
    let y=cy;

    ctx.beginPath();
    ctx.moveTo(cx,cy-outerRadius)
    for(i=0;i<spikes;i++){
        x=cx+Math.cos(rot)*outerRadius;
        y=cy+Math.sin(rot)*outerRadius;
        ctx.lineTo(x,y)
        rot+=step

        x=cx+Math.cos(rot)*innerRadius;
        y=cy+Math.sin(rot)*innerRadius;
        ctx.lineTo(x,y)
        rot+=step
    }
    ctx.lineTo(cx,cy-outerRadius);
    ctx.closePath();
    ctx.lineWidth=5;
    ctx.strokeStyle='green';
    ctx.stroke();
    ctx.fillStyle='green';
    ctx.fill();
}

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// // rect
// ctx.fillStyle = "green";
// ctx.rect(400, 400, 200, 200)
// ctx.fill();

// // circle
// ctx.fillStyle = "green";
// ctx.arc(500, 500, 100, 0, 2 * Math.PI);
// ctx.fill();

// star
drawStar(500,500,5,170,60);

// // text
// ctx.font = "100px sans-serif";
// ctx.fillText("Hello Canvas", 230, 500);