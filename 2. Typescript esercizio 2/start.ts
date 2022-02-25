interface AddressLocation {
    city: string;
    street: string;
    postalCode: string
}

enum Role {'staff', 'student', 'manager', 'admin'}

interface Companies {
    id: number, 
    name: string, 
    desctiption: string, 
    location: AddressLocation
}

enum Gender {'male', 'female', 'other'}

class User {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: AddressLocation;
    role: Role;
    username: string;
    profilePhotoUrl: string;
    companies: Companies[];
    gender: Gender;
    constructor (name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    fullName() {
        return this.name + ' ' + this.surname;
    }
}

const marioRossi = new User("Mario", "Rossi")
console.log(marioRossi.fullName())
