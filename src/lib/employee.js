

class Employee {

    constructor(id, email, name ){
        if(!id || !name || !email){
            throw new Error('Cannot instantiate without id, email or name info')
        }
    this.id = id;
    this.email = email;
    this.name = name;
}
getId(){

    return this.id;
}
getEmail(){

    return this.email;
}
getName(){

    return this.name;
}
getRole(){

    return "Employee";
}

}
module.exports = Employee