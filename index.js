class Class {
  constructor(name, homeromTeacher, studentList) {
    this.Name = name;
    this.HomeromTeacher = homeromTeacher;
    this.StudentList = studentList;
  }
}
class Student {
  constructor(ID, name, age, gender, gpa) {
    this.ID = ID;
    this.Name = name;
    this.Age = age;
    this.Gender = gender;
    this.GPA = gpa;
  }
}
class Teacher {
  constructor(ID, name, age, gender, subject) {
    this.ID = ID;
    this.Name = name;
    this.Age = age;
    this.Gender = gender;
    this.Subject = subject;
  }
  AssignClass(student, className) {
    if (className.StudentList.length != 0) {
      for (var i = 0; i < className.StudentList.length; i++) {
        if (className.StudentList[i].ID == student.ID) {
          console.log(
            'Student ' +
              className.StudentList[i].Name +
              ' has already in ' +
              className.Name
          );
          break;
        }
        console.log('List not empty');
        className.StudentList.push(student.ID);
        console.log(
          'Student ' + student.Name + ' has been assigned to ' + className.Name
        );
      }
    } else {
      // console.log('Hello');
      className.StudentList.push(student.ID);
      console.log(
        'Student ' + student.Name + ' has been assigned to ' + className.Name
      );
    }
  }
  printAcademicScript(className) {
    for (var i = 0; i < className.StudentList.length; i++) {
      console.table(className.StudentList[i], ['ID', 'Name', 'GPA']);
    }
  }
}
let classK20411C = new Class('K20411C', 'AnhTran', []);
let teacher = new Teacher('T1', 'Tran Thi Anh', 42, 'female', 'Math');
let student_1 = new Student('S1', 'This is Student 1', 20, 'male', 8.5);
let student_2 = new Student('S2', 'This is Student 2', 20, 'female', 8.6);

console.log('Hello');

teacher.AssignClass(student_1, classK20411C);
teacher.AssignClass(student_2, classK20411C);
teacher.printAcademicScript(classK20411C);
console.log(classK20411C);
