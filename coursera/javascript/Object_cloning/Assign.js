//object -clone #2 
let src ={
    a:3,
    b:4,
    c:5,
};

let dest = Object.assign({},src);
console.log(dest);

src.a++;

console.log(dest);