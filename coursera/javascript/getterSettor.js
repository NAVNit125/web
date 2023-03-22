
let person ={
    Fname :'navnit',
    Lname: 'singh',

    get fullname(){
        return `${person.Fname} ${person.Lname}`;
    },

    set fullname(value) {
        let parts = value.split(' ');
        this.Fname = parts[0];
        this.Lname = parts[1];
    }
};

// person.fullname = 'yooy joji';
console.log(person.fullname);