let canvas = document.getElementById('canvas')
canvas.width = window.innerWidth 
canvas.height = window.innerHeight 
let context = canvas.getContext('2d')

const bg = new Background('sprites/background/bg1.png', canvas.width, canvas.height)
const bg2 = new Secondbackground('sprites/background/bg2.png', canvas.width, canvas.height)



let player = new Player(20, 300)
let reset = new Reset(20, 300)



animate()

function animate() {

    
    firstBackground()

    if(player.changeBg()) {

        secondBackground() 
    }
    
    requestAnimationFrame(animate)
    
}


function firstBackground() {
    
    context.clearRect( 0, 0, canvas.width, canvas.height)
        
        bg.update()
        bg.draw()



        if (player.isFlying()) {

            player.update('fly')
            player.draw('fly')
    
        }
    
        else {  
            
            player.update('idle')
            player.draw('idle')
            
        }


}



function secondBackground() {
        
        bg2.update()
        bg2.draw()

        if (reset.isFlying()) {

            reset.update('fly')
            reset.draw('fly')
    
        }

        else {  
            
            reset.update('idle')
            reset.draw('idle')
            
        }


}



document.addEventListener('keydown' , key_down_listener)
document.addEventListener('keyup' , key_up_listener)

function key_down_listener(event) {
    player.move('keydown',event.key) 
}


function key_up_listener(event) {
    player.move('keyup', event.key)
}
