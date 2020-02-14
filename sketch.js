let forms;
let matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let circulo;
let laX;

function setup(){
    createCanvas(600,600);
    circulo =[];
    laX=[];
}





function draw(){
    background(100);
    fill(255);
    


for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        rect(200*i,200*j,200,200);
    }
}
switch (valor){
    case 1:
        circulo.pintarCirculo();
    break;

    case 2:
        laX.pintarX();  
    break;
}

console.log(valor);

fill(20);
line(0,200,600,200);
line(0,400,600,400);
line(200,0,200,600);
line(400,0,400,600);
}
function mouseClicked() {
    valor+=1;
    
    //primera fila
    if(mouseX>0 && mouseX<200 && mouseY>0 && mouseY<200){
        valor;
    }
    if(mouseX>200 && mouseX<400 && mouseY>0 && mouseY<200){
        valor;
    }
    if(mouseX>400 && mouseX<600 && mouseY>0 && mouseY<200){
        valor;
    }
    //segunda fila
    if(mouseX>0 && mouseX<200 && mouseY>200 && mouseY<400){
        valor;
    }
    if(mouseX>200 && mouseX<400 && mouseY>200 && mouseY<400){
        valor;
    }
    if(mouseX>400 && mouseX<600 && mouseY>200 && mouseY<400){
        valor;
    }
    //tercera fila
    if(mouseX>0 && mouseX<200 && mouseY>400 && mouseY<600){
        valor;
    }
    if(mouseX>200 && mouseX<400 && mouseY>400 && mouseY<600){
        valor;
    }
    if(mouseX>400 && mouseX<600 && mouseY>400 && mouseY<600){
        valor;
    }

}
