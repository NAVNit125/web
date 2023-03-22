
//constructor function
function Rectangle() {
    this.length=3,
    this.breadth=2;
    this.drawn = function(){
        console.log("drawing");
    };

}

//object creating using constructor
let rectangleobj = new Rectangle(); 

console.log(rectangleobj);