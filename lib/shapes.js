class Shape{
    //define a class called Shape with a constructor that takes in a color
  
    constructor(){
        this.color=""  
    }
        setColor(colorVar){
            this.color=(colorVar)
        }    
}
//defines a class called Circle that extends the Shape class
class Circle extends Shape{
    render(){
        return`<circle cx="150" cy="115" r="80" fill="${this.color}"/>`
    }
}
//defines a class called Square that extends the Shape class
class Square extends Shape{
    render(){
        return`<rect x="73" y="40" width="150" height="150" fill="${this.color}"/>`
    }
}
//defines a class called Triangle that extends the Shape class
class Triangle extends Shape{
    render(){
        return`<polygon height="100%" width-"100%" points="150,18 244,182 56, 182" fill="${this.color}"/>`
    }
};

module.exports = {Circle, Square, Triangle};
   