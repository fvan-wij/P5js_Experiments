const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  
    
})

const mouse = {
    x: null,
    y: null,
}

canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;  
    drawCircle();  
    
});

canvas.addEventListener('mousemove', function(){


})

function drawCircle(){
    var colors = ['blue', 'white', 'red', 'pink', 'yellow','orange','brown','white','purple','green'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillStyle = randomColor2;
    ctx.strokeStyle = randomColor;
    ctx.beginPath();
    ctx.arc(mouse.x,mouse.y,50,0,Math.PI * 2);
    ctx.lineWidth = 15;
    ctx.stroke();
    ctx.fill();
}


