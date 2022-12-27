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
    get _remainingVacationDays() {
        return this._remainingVacationDays
    }

    // objs method which subtracts days off from balance
    takeVacationDays(daysoff) {
        this._remainingVacationDays -= daysoff
    }
}

