// Crating a main class 
class HospitalEmployee {
    // Creting obj constructor
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    // get name getter
    get name() {
        return this._name;
    }

    // get rmemining days getter
    get remainingVacationDays() {
        return this._remainingVacationDays
    }

    // objs method which subtracts days off from balance
    takeVacationDays(daysoff) {
        this._remainingVacationDays -= daysoff
    }
}

// Subclass of HospitalEmployee
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
}

// Creating an instancer of Nurse class
const nurseHeidi = new Nurse('Heidi', ['Cadiology', 'CPR'])

console.log(nurseHeidi)