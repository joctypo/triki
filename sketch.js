let forms;
let matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];
let turno;

function setup(){
    createCanvas(600,600);
    forms =[];

}



function draw(){
    background(100);
    fill(255);
    for (let i = 0; i < forms.length; i++) {
        forms[i].dibujar();
    }

fill(20);
line(0,200,600,200);
line(0,400,600,400);
line(200,0,200,600);
line(400,0,400,600);
}
function mouseClicked() {
    
    if (turno==false){
        forms.push(new circulo(100,100));
    }else if (turno==true){
        forms.push(new X(100,100));
    }

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
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            rect(200*i,200*j,200,200);
        }
    }
}
