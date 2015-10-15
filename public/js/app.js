console.log('hi js works');

$(document).on('ready', function() {
  $('#student-form').on('submit', function(e) {
    e.preventDefault();
    console.log('submit caught!');
    var newName = $('#student-name').val();
    $('#student-name').val('');
    postNewStudent(newName);
  })


});

var postNewStudent = function(studentName) {
  console.log('posting to the server!');
  $.post('/', { name: studentName }, function(studentsList) {
    console.log('received list of students');
    console.log(studentsList);

    //now we have the data, lets display it
    $('#students-ul').html( generateStudentHtml(studentsList) );

  });
}

var generateStudentHtml = function(students) {
  var htmlString = '<li>test</li>'
  for(var i=0; i< students.length; i++) {
    htmlString = htmlString + '<li>' + students[i] + '</li>';
  }
  return htmlString;


}
