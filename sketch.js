let fotoEquis;
let fotoCirculo;
let gana;
let imgGana;

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
    turno= false;
    gana=false;

    fotoCirculo = loadImage('fotos/circulo.png');
    fotoEquis = loadImage('fotos/equis.png');
    imgGana = loadImage('fotos/ganaste.png');
 
 

}



function draw(){
    background(100);
    
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            fill(255);
            rect(200*i,200*j,200,200);
        }
    }
    for (let i = 0; i < forms.length; i++) {
        forms[i].dibujar();
    }
    

    ganador();

    if(gana == true){
        image(imgGana,100,200);
    }

}




function mouseClicked() {
    posicion1= parseInt(mouseX/200);
    posicion2= parseInt(mouseY/200);

    if(matriz[posicion1][posicion2]==0){
        if (turno==false){

            forms.push(new Circulo(posicion1*200,posicion2*200));
            matriz[posicion1][posicion2]=1;
            turno=true;
        }else if (turno==true){
            forms.push(new X(posicion1*200,posicion2*200));
            turno=false;
            matriz[posicion1][posicion2]=2;
        }

    }


   


}

function ganador(){

    for(let i = 0; i < 3; i++){
    // evaluar en filas
        if(matriz[i][0]!=0 && matriz[i][0]==matriz[i][1] && matriz[i][1]==matriz[i][2]){
             gana = true;
        }
    //evaluar en columnas
        if(matriz[0][i]!=0 && matriz[0][i]==matriz[1][i] && matriz[1][i]==matriz[2][i]){
            gana = true;   
        }
}}



