let forms;
let matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];
let turno;
let posicion1;
let posicion2;

function setup(){
    createCanvas(600,600);
    forms =[];

}



function draw(){
    background(100);
    fill(255);
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            rect(200*i,200*j,200,200);
        }
    }
    for (let i = 0; i < forms.length; i++) {
        forms[i].dibujar();
    }
}




function mouseClicked() {
    posicion1= parseInt(mouseX/200);
    posicion2= parseInt(mouseY/200);

    if(matriz[posicion1][posicion2]==0){
        if (turno==false){
            forms.push(new circulo(100,100));
            turno=true;
        }else if (turno==true){
            forms.push(new X(100,100));
            turno=false;
        }

    }
   


}

function evaluarclick() {
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
