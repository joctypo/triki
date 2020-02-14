class Circulo extends Formas{
    super(posX,posY){
    }
    
    pintarCirculo(){
    fill(255,0,0);
    ellipse(this.posX,this.posY,100,100);
}

}