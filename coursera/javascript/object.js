var table={
    legs: 3,
    color: "brown",
    princeUse:100,

    //method 
    chair: function(){
        console.log("i am a chair");
    }

};

table.status = 'working';
table["place"] ='room';
console.log(table);

console.log(table.chair());