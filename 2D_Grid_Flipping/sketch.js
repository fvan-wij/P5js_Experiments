// let g_2D = 
//     [
//       
//     ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
//     ["0", "0", "1", "0", "0", "0", "0", "0", "0", "0"],
//     ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"], 
// 	["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
// 	["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
//     ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
//     ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
//     ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"], 
// 	["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
// 	["0", "0", "1", "1", "1", "1", "1", "0", "0", "0"],
//     ];

let g_2D = 
    [
      
    ["0", "1", "1", "1"], 
    ["0", "1", "1", "1"], 
    ["0", "1", "1", "1"], 
    ["0", "1", "1", "1"]
    ];

let columns = 10;
let rows = 10;
let tileSize;
let px = 0;
let py = 0;
let rotation = 0;

let x = 200;
let y = 200;

let speedX = 3;
let speedY = 5;
   
let ballPos;
let ballVel;

let grid = [[]];

function setup() {
  	createCanvas(800, 800);
	columns = g_2D.length;
	rows = columns;
	tileSize = createVector(width / columns, height / rows);
	ballPos = createVector(60, height/2);
	ballVel = createVector(2, 1);
}

function draw() {
	let mCoord = createVector(floor(mouseX / tileSize.x), floor(mouseY / tileSize.y));
	let ePos = createVector(floor(ballPos.x / tileSize.x), floor(ballPos.y / tileSize.y));

  	background(220);
  
  	if (rotation == 0)
    	draw_grid(tileSize.x, tileSize.y, mCoord.x, mCoord.y);
  	else if (rotation == 1)
    	draw_grid_90(tileSize.x, tileSize.y, mCoord.x, mCoord.y);
  	else if (rotation == 2)
    	draw_grid_180(tileSize.x, tileSize.y, mCoord.x, mCoord.y);
  	else if (rotation == 3)
    	draw_grid_270(tileSize.x, tileSize.y, mCoord.x, mCoord.y)
	
	fill(0, 0, 255);
	ellipse(ballPos.x, ballPos.y, tileSize.x/2, tileSize.y/2);
	
	ballPos.add(ballVel);
	let value = g_2D[ePos.y][ePos.x];

	if (value == "1")
		ballVel.mult(-1);
	if (ballPos.x > width || ballPos.x < 0 || ballPos.y > height || ballPos.y < 0)
		ballVel.mult(-1);
	if (ePos.x >= 0 && ePos.x < columns && ePos.y >= 0 && ePos.y < rows)
		g_2D[ePos.y][ePos.x] = "0";	
}

function draw_grid(tw, th, mcx, mcy)
{
  if (mouseIsPressed)
    g_2D[mcy][mcx] = "0";
    for (let x = 0; x < columns; x++)
    {
      for (let y = 0; y < rows; y++)
        {
          
          if (g_2D[y][x] == 0)
          {
            fill(255, 0, 0);
            rect(x * tw, y * th, tw, th);
          }
          else
          {
            fill(0);
            rect(x * tw, y * th, tw, th);
          }
        }
    }

}

function draw_grid_90(tw, th, mcx, mcy)
{
  let x = 0;
  let y = 0;
  let mcx90 = (columns -1) - mcx;
  if (mouseIsPressed)
    g_2D[mcx90][mcy] = "0";
    for (let i = 0; i < columns; i++)
    {
      for (let j = rows -1; j >= 0; j--)
        {
          if (g_2D[j][i] == 0)
          {
            fill(255, 0, 0);
            rect(x * tw, y * th, tw, th);
          }
          else
          {
            fill(0);
            rect(x * tw, y * th, tw, th);
          } x++; }
      x = 0;
      y++;
    }
}

function draw_grid_180(tw, th, mcx, mcy)
{
  let x = 0;
  let y = 0;
  let mcy180 = (rows -1) - mcy;
  let mcx180 = (columns -1) - mcx;
  if (mouseIsPressed)
     g_2D[mcy180][mcx180] = "0";
    for (let i = columns -1; i >= 0; i--)
    {
      for (let j = rows -1; j >= 0; j--)
        {
          if (g_2D[i][j] == 0)
          {
            fill(255, 0, 0);
            rect(x * tw, y * th, tw, th);
          }
          else
          {
            fill(0);
            rect(x * tw, y * th, tw, th);
          }
          x++;
        }
      x = 0;
      y++;
    }
}

function draw_grid_270(tw, th, mcx, mcy)
{
  let x = 0;
  let y = 0;
  let mcy270 = mcx;
  let mcx270 = (columns -1) - mcy;
  if (mouseIsPressed)
    g_2D[mcy270][mcx270] = "0";
    for (let i = columns - 1; i >= 0; i--)
    {
      for (let j = 0; j <= rows - 1; j++)
        {
          if (g_2D[j][i] == 0)
          {
            fill(255, 0, 0);
            rect(x * tw, y * th, tw, th);
          }
          else
          {
            fill(0);
            rect(x * tw, y * th, tw, th);
          }
          x++;
        }
      x = 0;
      y++;
    }
}

function keyPressed() {
  if (keyCode == 75)
	rotation = 0;
  else if (keyCode == 76)
	rotation = 1;
  else if (keyCode == 74)
	rotation = 2;
  else if (keyCode == 72)
    rotation = 3;
}

