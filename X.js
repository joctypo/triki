class X extends Formas{
    super(posX,posY){
    }
dibujar(){
    fill(0,255,0);
    rectMode(CENTER);
    rect(this.posX,this.posY, 100, 100);
}

}