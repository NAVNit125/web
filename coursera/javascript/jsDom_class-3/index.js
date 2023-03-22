
// const t1 = performance.now();

// for(let i =0;i<100;i++){
//     let content = document.createElement('p');
//     content.textContent ='hey this is me' + i;

//     document.body.appendChild(content);
// }

// const t2 = performance.now();

// console.log("this took" + (t2-t1) + "ms");


// //optimising a bit
// let t3 = performance.now();
// let mydiv = document.createElement('div');

// for(let i=0;i<100;i++){
//     let para = document.createElement('p');
//     para.textContent='hello g hello g' + i;

//     mydiv.appendChild(para);

// }
  
// document.body.appendChild(mydiv);

// let t4 = performance.now();
// console.log("this took" + (t4-t3) + "ms");



// let fragment = document.createDocumentFragment();
// for(let i =0;i<100;i++){
//     let content = document.createElement('p');
//     content.textContent ='hey this is me' + i;

//     fragment.appendChild(content);
// }

// document.body.appendChild(fragment); //   1 Reflow , 1 Repaint

//---------------------------------------------------------------------------------------------------------------------------

// //setTime out function

// setTimeout(function(){ 
//     console.log("hello navnit k xa kta ");
// }, 5000);
 
     // -----creating promise-------
// let meraPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         console.log("i am inside promise");
//     }, 5000);
//     resolve(22324); 
    
// });
// console.log("first");
//---------------------------------------------------------------------------------------------------------------------------


// async function nba(){
//     return 32;
// }

// console.log(nba());

 //  ------------------------------------------------------------------------
// async function weather(){
// let delhiMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("its to hot here");
//     },2000);

// });

// let nepal = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('it to cold as compaire to delhi');
//     },5000);
// });

// let dm = await delhiMausam;
// let np = nepal;
// return [dm,np];
// }
//-------------------------------------------------------------------------------------------------
// async function ans(){
// let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// let output = await content.json();
// console.log(output);
// };

// ans();

function navnit(){
     console.log("js file is running ");
}
   