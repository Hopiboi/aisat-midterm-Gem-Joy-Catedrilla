class Reset {
    constructor(posX, posY){

        this.spritesheet_fly = new Image()
        this.spritesheet_fly.src = 'sprites/plane/Fly/spritesheet.png'

        this.spritesheet_idle = new Image()
        this.spritesheet_idle.src = 'sprites/plane/Fly/spritesheet.png'

        this.x = posX
        this.y = posY

        this.imageWidth =  200
        this.imageHeight = 100
        
        this.gameFrame = 0
        this.frameSpeed = 2

        
        this.movement = {
            isRight : false,
            isLeft: false,
            isUp : false,
            isDown : false,
        }

        //mainControl
        this.keyCodes = {
            RIGHT : 'ArrowRight', 
            LEFT : 'ArrowLeft',
            UP : 'ArrowUp',
            DOWN :  'ArrowDown'
        }

        //alternativeControl
        this.keyCodesAlt = {
            RIGHT1 : 'd', 
            LEFT1 : 'a',
            UP1 : 'w',
            DOWN1 :  's'
        }

        this.actions = {
            idle : {
                'spritesheet' : this.spritesheet_idle,
                'frame_counter' : 0,
                'spriteWidth' : 445,
            },

            fly : {
                'spritesheet' : this.spritesheet_fly,
                'frame_counter' : 0,
                'spriteWidth' : 445,
                //speed
                'flightRight' : 15,
                'flightLeft' : 15,
                'flight' : 15,
            },

            //collision
            //R = Right, L = Left, U = Up, D = Down
            coll : {
                'triggerR' : 1.12,
                'collisionL' : 100 ,
                'collisionU' : 150 ,
                'collisionD' : 1.2 ,
            },
    }

}

move(keyType, key){

    //hold
    if (keyType == 'keydown'){
        
        if (key == this.keyCodes.RIGHT) {
            this.movement.isRight = true
        }

        else if(key == this.keyCodesAlt.RIGHT1){
            this.movement.isRight = true
        }

        //
        if (key == this.keyCodes.LEFT) {
            this.movement.isLeft = true
        }

        else if(key == this.keyCodesAlt.LEFT1){
            this.movement.isLeft = true
        }

        //
        if (key == this.keyCodes.UP) {
            this.movement.isUp = true
        }

        else if(key == this.keyCodesAlt.UP1){
            this.movement.isUp = true
        }

        //
        if (key == this.keyCodes.DOWN) {
            this.movement.isDown = true
        }

        else if (key == this.keyCodesAlt.DOWN1) {
            this.movement.isDown = true
        }
        
    }


    //release
    if (keyType == 'keyup'){
        
        if (key == this.keyCodes.RIGHT) {
            this.movement.isRight = false
        }   

        else if(key == this.keyCodesAlt.RIGHT1){
            this.movement.isRight = false
        }

        //
        if (key == this.keyCodes.LEFT) {
            this.movement.isLeft = false
        }

        else if(key == this.keyCodesAlt.LEFT1){
            this.movement.isLeft = false
        }

        //
        if (key == this.keyCodes.UP) {
            this.movement.isUp = false
        }
        
        else if (key == this.keyCodesAlt.UP1) {
            this.movement.isUp = false
        }

        //
        if (key == this.keyCodes.DOWN) {
            this.movement.isDown = false
        }

        else if (key == this.keyCodesAlt.DOWN1) {
            this.movement.isDown = false
        }
        

    }

}


isFlying() {
    
    return this.movement.isRight || this.movement.isLeft || this.movement.isUp || this.movement.isDown

}


//to change bg
changeBg() {

    return this.x > canvas.width/this.actions.coll.triggerR

}


    update(action){

        //movement
        // using if to force the player to standby when pressing two opposites direction

        if (this.gameFrame % this.frameSpeed == 0) {

        if (this.movement.isRight && this.x < (canvas.width/this.actions.coll.triggerR) ) {
            this.x = this.x + this.actions.fly.flightRight

        }

        if (this.movement.isLeft && this.x > (canvas.width/this.actions.coll.collisionL) ) {
            this.x = this.x - this.actions.fly.flightLeft

        }

        if (this.movement.isUp  && this.y > (canvas.height/this.actions.coll.collisionU)) {
            this.y = this.y - this.actions.fly.flight

        }

        if (this.movement.isDown && this.y < (canvas.height/this.actions.coll.collisionD) ) {
            this.y = this.y + this.actions.fly.flight

        }



///////////////////////////////////////////////////////////////////


            //animation
            if (action == 'fly') {
                this.actions[action].frame_counter++;
    
                if (this.actions[action].frame_counter > 1) {
                    this.actions[action].frame_counter = 0;
                }
            }

            else if (action == 'idle') {
                this.actions[action].frame_counter++
    
                if(this.actions[action].frame_counter > 1) {
                    this.actions[action].frame_counter = 0 
                }
            }  

    }

    this.gameFrame++;

}


    draw(action){

        // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

        context.drawImage(

            //image cropping
            this.spritesheet_fly,
            this.actions[action].frame_counter*this.actions[action].spriteWidth,
            0,  
            this.actions[action].spriteWidth,
            this.actions[action].spritesheet.height,

            //image position
            this.x,
            this.y,

            //image size
            this.imageWidth,
            this.imageHeight
        )


        }

    }



    