
function createSprite(classe){
    
        let sprite = new Sprite(classe)
        console.log(sprite)

        return sprite  
}

class Sprite {
    
    constructor(classe){
        this.sprite = $(classe)
        this.frame = 0
    }
    
    nextframe() {

        this.sprite[0].classList.remove('frame' + this.frame)
        console.log('ok')
        this.frame++
        if(this.frame == 10){
                this.frame = 0
        }else{
            this.sprite[0].classList.add('frame' + this.frame)
        }
        
    }
}