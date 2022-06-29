export class Guest {
    name: string = "";
    lastName: string = "";
    relationship: string = "";
    age: number = 0;

    constructor(name: string, lastName: string, relationship: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.relationship = relationship;
        this.age = age;
    }
}
