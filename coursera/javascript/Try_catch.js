try {
    throw new ReferenceError();
} catch(bc){
    console.log("There was an error");
    console.log("The error was saved in he error log");
}

console.log("My program doesn't stop");