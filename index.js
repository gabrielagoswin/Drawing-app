
window.addEventListener("load", () =>{
   
    

    let canvas = document.querySelector('#canvas');
    let toolbox = document.querySelector("#toolbox");
    let ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    toolbox.width = window.innerWidth;
    toolbox.height = 5;

    let size = 1;
    

let increasebtn = document.querySelector(".increase");
let decreasebtn = document.querySelector(".decrease");
let defaultValue = document.querySelector(".default");
let color = document.querySelector("#color");
let cleard = document.querySelector(".clear");



    increasebtn.addEventListener("click",() =>{
        size += 2;
        defaultValue.innerHTML =  size;
    });
    decreasebtn.addEventListener("click",() =>{
        size -= 2;
        defaultValue.innerHTML =  size;
    });

    cleard.addEventListener("click", () =>{
        ctx.clearRect(0, 0, canvas.height, canvas.width);
    });

    


    var painting  = false;

    function start(e){
        painting = true;

        draw(e);
    }

    function end(){
        painting = false;

        ctx.beginPath();

    }

    const numletters = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexhash = '#';
    
    for(i = 0; i<6; i++){
       let random = Math.floor(Math.random()*numletters.length);

        hexhash += numletters[random]
    }

    color.addEventListener("change",(event)=>{
        color = event.target.value;
    
    });

    function draw(e){

        if (!painting) return;

        ctx.lineWidth = size;
        ctx.lineCap = "round";
        ctx.strokeStyle = color;

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    

    //addEventListeners

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("mousemove", draw);


});

