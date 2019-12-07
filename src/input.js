export class InputListener{
    constructor(target) {
        this.keyPressed = '';

        target.addEventListener("keydown", event => {
            this.keyPressed = event.code
        });
        target.addEventListener("keyup", event => {
            if (this.keyPressed === event.code){
                this.keyPressed = ''
            }
        });
    }

    isLeftPressed(){
        return this.keyPressed === 'ArrowLeft'
    }

    isRightPressed(){
        return this.keyPressed === 'ArrowRight'
    }

    isDownPressed(){
        return this.keyPressed === 'ArrowDown'
    }

    isRotatePressed(){
        return this.keyPressed === 'Space'
    }

}