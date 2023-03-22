//object -clone #3
let src ={
    a:2,
    b:3,
    c:4,
};

let dest = {...src};

console.log(dest);

src.a++;

console.log(dest);