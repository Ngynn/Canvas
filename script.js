var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
let width = c.width;
let height = c.height;

let eye = {
    currentX: 700,
    currentY: 245,
    targerX: 700,
    targerY: 255,
};

let eye2 = {
    currentX: 800,
    currentY: 245,
    targerX: 800,
    targerY: 255,
};

document.addEventListener("mousemove", (e) => {
    eye.targerX = e.clientX;
    eye.targerY = e.clientY;
    console.log(eye);

});

document.addEventListener("mousemove", (e1) => {
    eye2.targerX = e1.clientX;
    eye2.targerY = e1.clientY;
    console.log(eye2);
});


let fps = 60;
let fpsInterval = 1000 / fps;
let then = Date.now();
let delta = 0;

let armHeight = 400;
let alpha = 0.1;
let vt = 2;
let gt = 2;
function draw() {



    setInterval(() => {
        if (vt == 2) {
            vt = -2;
            gt = -2
          } else {
            vt = 2;
            gt =2
          }
        delta = Date.now() - then;
        let fps = 1000 / delta;
        then = Date.now();
        alpha += 0.5;
        armHeight += Math.sin(alpha) * 10;

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "black";
        ctx.font = "20px Georgia";
        ctx.fillText(`FPS: ${Math.round(fps * 1000) / 1000}`, 10, 50);

        //Mặt tròn
        ctx.beginPath();
        ctx.arc(750, 250, 90, 0, 2 * Math.PI);
        ctx.lineWidth = 2;
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(800 , 300);
        ctx.lineTo(820, 295- vt);
        //1
        ctx.moveTo(800 , 305);
        ctx.lineTo(820, 305- vt);
        //2
        ctx.moveTo(800 , 310);
        ctx.lineTo(820, 315- vt);
        // //3
        ctx.moveTo(680 , 295- vt);
        ctx.lineTo(700, 300);
        // //4
        ctx.moveTo(680 , 305-vt);
        ctx.lineTo(700, 305);
        // //5
        ctx.moveTo(680 , 315-vt);
        ctx.lineTo(700, 310);

        ctx.stroke();
        ctx.closePath();






        //Mắt trái
        ctx.beginPath();
        ctx.ellipse(700, 250, 13, 20, Math.PI, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        //Tròng trắng Mắt trái
        ctx.beginPath();
        ctx.ellipse(eye.currentX, eye.currentY, 5, 8, Math.PI, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // Mắt phải
        ctx.beginPath();
        ctx.ellipse(800, 250, 13, 20, Math.PI, 0, Math.PI * 2);//Hình ovan
        ctx.lineWidth = 2;
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        //Tròng trắng mắt phải
        ctx.beginPath();
        ctx.ellipse(eye2.currentX, eye2.currentY, 5, 8, Math.PI, 0, Math.PI * 2);//Hình ovan
        ctx.lineWidth = 2;
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();



        // Miệng cười
        ctx.beginPath();
        ctx.ellipse(750, 300, 30, 12, Math.PI * 2, 0, Math.PI);//Hình ovan
        ctx.lineWidth = 2;

        ctx.stroke();
        ctx.closePath();

        // Mũi
        ctx.beginPath();
        ctx.ellipse(750, 267, 25, 20, Math.PI, 0, Math.PI * 2);//Hình ovan
        ctx.lineWidth = 2;

        ctx.fillStyle = '#7c5937';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();


        // Thân
        ctx.beginPath();
        ctx.ellipse(750, 420, 70, 80, Math.PI, 0, Math.PI * 2);//Hình ovan

        ctx.fillStyle = '#a1c7c4';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        // Tai trái
        ctx.beginPath();
        ctx.ellipse(667, 190, 15, 11, Math.PI, 0, Math.PI * 2);//Hình ovan
        ctx.fillStyle = '#555a75';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Tai phải
        ctx.beginPath();
        ctx.ellipse(833, 190, 15, 11, Math.PI, 0, Math.PI * 2);//Hình ovan
        ctx.fillStyle = '#555a75';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Tay phải
        ctx.beginPath();
        ctx.ellipse(850, 360, 50, 15, Math.PI, 0, Math.PI * 2);//Hình ovan
        ctx.fillStyle = 'white';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Tay trái
        ctx.beginPath();
        ctx.ellipse(650, 360, 50, 15, Math.PI, 0, Math.PI * 2);//Hình ovan
        ctx.fillStyle = 'white';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Chân trái
        ctx.beginPath();
        ctx.ellipse(690, 500, 35, 15, Math.PI, 0, Math.PI * 2);//Hình ovan
        ctx.fillStyle = '#373E53';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Chân phải
        ctx.beginPath();
        ctx.ellipse(810, 500, 35, 15, Math.PI, 0, Math.PI * 2);//Hình ovan
        ctx.fillStyle = '#373E53';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // Sò
        ctx.beginPath();
        ctx.ellipse(750, 400, 35, 20, Math.PI, 0, Math.PI * 2);//Hình ovan
        ctx.lineWidth = 2;
        ctx.fillStyle = '#EAD67D';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        //Hình tròn trong sò
        ctx.beginPath();
        ctx.ellipse(750, 400, 20, 20, Math.PI , 0, Math.PI*2);//Hình ovan
        ctx.lineWidth = 2;
        ctx.fillStyle = '#EAD67D';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.ellipse(750, 420, 15, 10, Math.PI *2, 0, Math.PI*1);//Hình ovan
        ctx.lineWidth = 2;
        ctx.fillStyle = '#EAD67D';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Đuôi
        // ctx.beginPath();
        // ctx.ellipse(865, 450, 50, 20, Math.PI, 0, Math.PI * 2);//Hình ovan
        // ctx.fillStyle = '#384156';
        // ctx.lineWidth = 2;
        // ctx.fill();
        // ctx.stroke();
        // ctx.closePath();
        ctx.font = "30px Arial";
        ctx.strokeText("POKEMON: OSHAWOTT ---->",200, 320);  

        // console.log(eye.currentY, eye.targetY);
        //Mắt trái
        if (eye.currentX < eye.targerX) {
            eye.currentX += 1;
        } else if (eye.currentX > eye.targerX) {
            eye.currentX -= 1;
        }
        if (eye.currentX > 705) {
            eye.currentX -= 1;
        }
        if (eye.currentX < 695) {
            eye.currentX += 1;
        }
        if (eye.currentY < eye.targerY) {
            eye.currentY += 1;
        } else if (eye.currentY > eye.targerY) {
            eye.currentY -= 1;
        }
        if (eye.currentY > 255) {
            eye.currentY -= 1;
        }
        if (eye.currentY < 240) {
            eye.currentY += 1;
        }

        //Mắt phải
        if (eye2.currentX < eye2.targerX) {
            eye2.currentX += 1;
        } else if (eye2.currentX > eye2.targerX) {
            eye2.currentX -= 1;
        }
        if (eye2.currentX > 805) {
            eye2.currentX -= 1;
        }
        if (eye2.currentX < 795) {
            eye2.currentX += 1;
        }
        if (eye2.currentY < eye2.targerY) {
            eye2.currentY += 1;
        } else if (eye2.currentY > eye2.targerY) {
            eye2.currentY -= 1;
        }
        if (eye2.currentY > 255) {
            eye2.currentY -= 1;
        }
        if (eye2.currentY < 240) {
            eye2.currentY += 1;
        }
    }, fpsInterval);

}

draw();

