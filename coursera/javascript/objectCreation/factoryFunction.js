
function createRactangle(l,b){
    return rectangle = {
            length:l,
            breath:b,
        
            draw: function(){
                console.log("i am  in method ");
            }
    };
}

let ans = createRactangle(3,6);
console.log(ans);

//console.log(createRactangle.rectangle(draw));
