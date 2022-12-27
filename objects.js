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

    // Get all certification
    get certifications() {
        return this._certifications
    }

    // method to add new certifications
    addCertification(newCertificartion) {
        this._certifications.push(newCertificartion)
    }
}

// Creating an instancer of Nurse class
const nurseHeidi = new Nurse('Heidi', ['Cadiology', 'CPR'])

nurseHeidi.addCertification('Emergency')

console.log(nurseHeidi)