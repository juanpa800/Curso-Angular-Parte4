export class Guest {
    name: string;
    lastName: string;
    relationship: string;
    years: number;

    constructor(name: string, lastName: string, relationship: string, years: number) {
        this.name = name;
        this.lastName = lastName;
        this.relationship = relationship;
        this.years = years;
    }
}
