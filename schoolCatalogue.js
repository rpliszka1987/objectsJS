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

  //   setter to set number of students
  set numberOfStudents(number) {
    if (typeof number === "number") {
      this._numberOfStudents = number;
    } else {
      console.log("Invalid input: numberOfStudents must be a number.");
    }
  }

  //   Method returns information reguarding a school
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }

  //   static method returns random substitute teacher
  static pickSubstituteTeacher() {
    const teachers = ["Mike", "John", "Mary", "Christopher"];
    const teacherNum = Math.floor(Math.random() * teachers.length);
    return teachers[teacherNum];
  }
}

// Primary School class which inherits from School classs
class PrimarySchool extends School {
  constructor(name, level, numberOfStudents, pickUpPolicy) {
    super(name, level, numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }

  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}

// Highschool class inherits from School
class HighSchool extends School {
  constructor(name, level, numberOfStudents, sportsTeams) {
    super(name, level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

// Creating new high school
const newHS = new HighSchool("Forest Hills High School", "High", 1400, [
  "Basketball",
  "Soccer",
]);

console.log(newHS);
