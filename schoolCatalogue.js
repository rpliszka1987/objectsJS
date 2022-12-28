// This is a School Catalogue excercise from Code Academy

// Creation of School class
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  //   name getter
  get name() {
    return this._name;
  }

  //   level getter
  get level() {
    return this._level;
  }

  //   number of students getter
  get numberOfStudents() {
    return this._numberOfStudents;
  }
}

const testSchool = new School("PS 199", "Middle", 560);
console.log(testSchool);
