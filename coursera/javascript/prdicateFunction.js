// let courses =[
//     {no:1, name:'navnit'},
//     {no:2, name:'rajput'}
// ]

// let course = courses.find(function(course){
//     return course.name == 'navnit'
// })

// console.log(course);


//using arrow function

let courses =[
    {no:1, name:'navnit'},
    {no:2, name:'rajput'}
]

let course = courses.find(course => course.name == 'navnit'
)

console.log(course);