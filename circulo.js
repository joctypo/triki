class Circulo extends Formas{
    super(posX,posY){
    }
    
    dibujar(){
    fill(255,0,0);
    ellipse(this.posX,this.posY,100,100);
}

}