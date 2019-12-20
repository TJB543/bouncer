function World2() {
    this.x = random()*width;
    this.y = height-75;
    this.h = 5;
    this.w = 100;
    this.s = 1;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-100 || this.x < 0) {
            this.s *= -1;
        }
    }
    this.show = function() {
      fill(0, 255, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}