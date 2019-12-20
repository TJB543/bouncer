function Player() {
    this.y = height-20;
    this.x = 25;
    
    this.xdir = 0;
    this.ydir = 0;
    
    this.g = 0.75;
    this.v = 0;
    
    this.update = function() {
        this.x += this.xdir;
        this.y += this.ydir;
        this.v += this.g;
        this.y += this.v;
        
        
        if (this.y > height-20) {
          this.ydir = 0;
          this.y = height-20;
          this.v = 0;
        }
        
        if (this.x >= width-20) {
            this.x = 0;
        } else if (this.x <= 0) {
            this.x = width -20;
        }
    }
    this.show = function() {
      fill(150);
      rect(this.x,this.y, 16,16);
      fill(75);
      ellipse(this.x,this.y+17.5,10,10);
      ellipse(this.x+16,this.y+17.5,10,10);
      fill(0,255,0);
      circle(this.x+8,this.y+8,8)
    }
}
