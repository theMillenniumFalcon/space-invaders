class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 100
        this.height = 100
    }

    draw() {
        context.fillRect(this.position.x, this.position.y, this.position.width, this.position.height)
    }
}