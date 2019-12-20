function World() {
    this.x = random()*width;
    this.y = height-35;
    this.h = 5;
    this.w = 100;
    
    this.show = function() {
      fill(0, 255, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}