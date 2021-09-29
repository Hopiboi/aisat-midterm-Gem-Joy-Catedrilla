class Background {

    constructor(imagePath, width, height){

        this.image = new Image()
        this.image.src = imagePath
        this.image.width = 4000
        this.image.height = height
        this.x1 = 0
        this.speed = 5
        this.limit = 2600
        this.minX = this.image.width
        
    }

    update(){
        this.x1 -= this.speed

        if(this.x1 == -this.limit) {

            this.speed = 0 
            
        }

    }

    draw(){
        context.drawImage(this.image, this.x1 , 0, this.image.width, this.image.height)
    }

}

class Secondbackground {

    constructor(imagePath, width, height){

        this.image = new Image()
        this.image.src = imagePath
        this.image.width = 4000
        this.image.height = height
        this.x1 = 0
        this.speed = 5
        this.limit = 2600
        this.minX = this.image.width
    }

    update(){
        this.x1 -= this.speed

        if(this.x1 == -this.limit) {

            this.speed = 0 
            
        }

    }

    draw(){
        context.drawImage(this.image, this.x1 , 0, this.image.width, this.image.height)
    }

}

class Thirdbackground {

    constructor(imagePath, width, height){

        this.image = new Image()
        this.image.src = imagePath
        this.image.width = 4000
        this.image.height = height
        this.x1 = 0
        this.speed = 5
        this.limit = 2600
        this.minX = this.image.width
    }

    update(){
        this.x1 -= this.speed

        if(this.x1 == -this.limit) {

            this.speed = 0 
            
        }

    }

    draw(){
        context.drawImage(this.image, this.x1 , 0, this.image.width, this.image.height)
    }

}

class Fourthbackground {

    constructor(imagePath, width, height){

        this.image = new Image()
        this.image.src = imagePath
        this.image.width = 4000
        this.image.height = height
        this.x1 = 0
        this.speed = 5
        this.limit = 2600
        this.minX = this.image.width
    }

    update(){
        this.x1 -= this.speed

        if(this.x1 == -this.limit) {

            this.speed = 0 
            
        }

    }

    draw(){
        context.drawImage(this.image, this.x1 , 0, this.image.width, this.image.height)
    }

}