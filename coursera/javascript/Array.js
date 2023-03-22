// function print(tain1){
//     for(var i =0;i<train1.length;i++){
//         console.log(i+1, train1[i]);
//     }
// }


// var train1 =["wheat","barly","potato","salt","rocks"];

// print(train1);

function arrayBuilder(one,two,three){
    var arr=[];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var simparr=arrayBuilder('one','two','three');
console.log(simparr);