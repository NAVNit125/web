//object -clone #1 
let src ={
    a:2,
    b:3,
    c:4,
};

let dest = {};

for(let key in src){
    dest[key] = src[key];
}

console.log(dest);

src.a++;

console.log(dest);