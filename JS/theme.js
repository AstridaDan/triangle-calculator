
function types(){
  let a = document.getElementById('a').valueAsNumber;
  let b = document.getElementById('b').valueAsNumber;
  let c = document.getElementById('c').valueAsNumber;
  let type = document.getElementById("type");

  //Equilateral
  if(a === b && b === c){
    type.innerHTML = "Triangle is equilateral";
  
  //Isosceles
  }if(a === b && b != c || c === a && b != c || b === c && a != c){
    type.innerHTML = "Triangle is isosceles";
   
  //Scalene
  }if(a != b && b != c && c != a){
    type.innerHTML = "Triangle is scalene";
  }
}


function formula(){
  let a = document.getElementById('a').valueAsNumber;
  let b = document.getElementById('b').valueAsNumber;
  let c = document.getElementById('c').valueAsNumber;
  let y, x, x2;

  var canvas= document.querySelector("#canvas");
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Fix triangle proportions to canvas width
  // (allows to insert low and high numbers)
  var max = Math.max(a,b,c);
  var index = 150 / max;
  a = a * index;
  b = b * index;
  c = c * index;

  // Used formula is made according to :
  // AB = a  ; A[0 ; 0]
  // BC = b  ; B [Bx ; 0]
  // CA = c  ; C [Cx ; Cy]
  //
  // a = j                                  where j = Bx
  // b^2 = x^2 - 2 xj +j^2 + l^2            where x = Cx
  // c^2 x^2 + y^2                          where y = Cy
  //
  // b^2 = a^2 - 2xa + y^2
  // c^2 = x^2 + y^2

  aa = 2*a;
  a2 = Math.pow(a,2)
  b2= Math.pow(b,2);
  c2 =Math.pow(c,2);

  x = ((a2 - b2 + c2) / aa); //Final formula for Cx : (a^2 -b^2 +c^2) / 2a
  x2 = Math.pow(x,2)

  y = Math.sqrt(c2 - x2);    // Final formula for Cy : sqrt(c^2 - x^2)

  //Custom Canvas Width
  if(a > x){
    canvas.width = a;
  }else{
    canvas.width = x;
  }

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#03002a";
  ctx.fillStyle = "#fff";

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(a,0);
  ctx.lineTo(x, y);
  ctx.lineTo(0,0);
  ctx.fill();
  ctx.stroke();

  let displayX = document.getElementById("hiddenX");
  let displayY = document.getElementById("hiddenY");

  displayX.innerHTML =  x;
  displayY.innerHTML = y;

  console.log("Cx:", x);
  console.log("Cy:",y);
}

function triangle(a,b,c) {
  let type = document.getElementById("type");
  let info = document.getElementById("info");

  let canvas= document.querySelector("#canvas");
  let ctx = canvas.getContext("2d");

  if(a != NaN && b != NaN && c != NaN){
      if(a >= 1 && b >= 1 && c >= 1) {
          if(a + b > c && a + c > b && b + c > a){
            types();
            formula()
            info.innerHTML = "";
          }else{
            info.innerHTML = "Is not possible to calculate this kind of triangle";
            type.innerHTML = "";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          } 
      }else{
        info.innerHTML = "Is not possible to calculate this kind of triangle (Insert number greater than 0)";
        type.innerHTML = "";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } 
  }else{
    info.innerHTML = "Is not possible to calculate this kind of triangle (Please insert numbers!)";
    type.innerHTML = "";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  } 
}
