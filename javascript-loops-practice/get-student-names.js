/* exported getStudentNames */
function getStudentNames(students) {
  var arr = [];
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    arr.push(student.name);
  }
  return arr;
}
