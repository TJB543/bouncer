let level_1 = 200;
let level_2 = 150;
let level_3 = 100;

function World() {
    this.x = random()*((width-level_1) - level_1) + level_1;
    this.y = height-35;
    this.h = 5;
    this.w = level_1;
    
    this.show = function() {
      fill(0, 255, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}

function World2() {
    this.x = random()*((width-level_1) - level_1) + level_1;
    this.y = height-75;
    this.h = 5;
    this.w = level_1;
    this.s = 1;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }
    this.show = function() {
      fill(0, 255, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}

function World3() {
    this.x = random()*((width-level_1) - level_1) + level_1;
    this.y = height-115;
    this.h = 5;
    this.w = level_1;
    this.s = 2;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }
    this.show = function() {
      fill(0, 255, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}

function World4() {
    this.x = random()*((width-level_1) - level_1) + level_1;
    this.y = height-155;
    this.h = 5;
    this.w = level_1;
    this.s = 2.25;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(0, 255, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World5() {
    this.x = random()*((width-level_1) - level_1) + level_1;
    this.y = height-195;
    this.h = 5;
    this.w = level_1;
    this.s = 2.5;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(0, 255, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World6() {
    this.x = random()*((width-level_1) - level_1) + level_1;
    this.y = height-235;
    this.h = 5;
    this.w = level_1;
    this.s = 3;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(0, 255, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World7() {
    this.x = 0;
    this.y = height-275;
    this.h = 5;
    this.w = width;
    
    this.show = function() {
      fill(0, 0, 255);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World1b() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-315;
    this.h = 5;
    this.w = level_2;
    
    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World2b() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-355;
    this.h = 5;
    this.w = level_2;
    this.s = 1;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }
    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World3b() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-395;
    this.h = 5;
    this.w = level_2;
    this.s = 2.25;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }
    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}

function World4b() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-435;
    this.h = 5;
    this.w = level_2;
    this.s = 2.5;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World5b() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-475;
    this.h = 5;
    this.w = level_2;
    this.s = 2.75;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World6b() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-515;
    this.h = 5;
    this.w = level_2;
    this.s = 3.25;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function Level1_final() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-555;
    this.h = 5;
    this.w = level_2;
    this.s = 4;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}


//Starting level 2//

function Worlda() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-35;
    this.h = 5;
    this.w = level_2;
    
    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}

function World2a() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-75;
    this.h = 5;
    this.w = level_2;
    this.s = 1.25;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }
    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}

function World3a() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-115;
    this.h = 5;
    this.w = level_2;
    this.s = 2.25;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }
    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}

function World4a() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-155;
    this.h = 5;
    this.w = level_2;
    this.s = 2.5;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World5a() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-195;
    this.h = 5;
    this.w = level_2;
    this.s = 3.5;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World6a() {
    this.x = random()*((width-level_2) - level_2) + level_2;
    this.y = height-235;
    this.h = 5;
    this.w = level_2;
    this.s = 4.25;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(200, 100, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World7a() {
    this.x = 0;
    this.y = height-275;
    this.h = 5;
    this.w = width;
    
    this.show = function() {
      fill(0, 0, 255);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World1ba() {
    this.x = random()*((width-level_3) - level_3) + level_3;
    this.y = height-315;
    this.h = 5;
    this.w = level_3;
    
    this.show = function() {
      fill(200, 0, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World2ba() {
    this.x = random()*((width-level_3) - level_3) + level_3;
    this.y = height-355;
    this.h = 5;
    this.w = level_3;
    this.s = 1;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }
    this.show = function() {
      fill(200, 0, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World3ba() {
    this.x = random()*((width-level_3) - level_3) + level_3;
    this.y = height-395;
    this.h = 5;
    this.w = level_3;
    this.s = 2.25;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }
    this.show = function() {
      fill(200, 0, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}

function World4ba() {
    this.x = random()*((width-level_3) - level_3) + level_3;
    this.y = height-435;
    this.h = 5;
    this.w = level_3;
    this.s = 2.5;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(200, 0, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World5ba() {
    this.x = random()*((width-level_3) - level_3) + level_3;
    this.y = height-475;
    this.h = 5;
    this.w = level_3;
    this.s = 2.75;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(200, 0, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function World6ba() {
    this.x = random()*((width-level_3) - level_3) + level_3;
    this.y = height-515;
    this.h = 5;
    this.w = level_3;
    this.s = 3.25;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(200, 0, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
function Level2_final() {
    this.x = random()*((width-level_3) - level_3) + level_3;
    this.y = height-555;
    this.h = 5;
    this.w = level_3;
    this.s = 4;
    
    this.update = function() {
        this.x += this.s
        if (this.x > width-this.w || this.x < 0) {
            this.s *= -1;
        }
    }

    this.show = function() {
      fill(200, 0, 0);
      rect(this.x,this.y,this.w,this.h);
    }
}
