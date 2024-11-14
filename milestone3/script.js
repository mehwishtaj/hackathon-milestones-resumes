var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var field = document.getElementById('field').value;
    var institution = document.getElementById('institution').value;
    var year = document.getElementById('year').value;
    var grade = document.getElementById('grade').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3><b>personal information</b></h3>\n    <p><b>Name: </b>".concat(name, "</p>\n    <p><b>Email: </b>").concat(email, "</p>\n    <p><b>Phone: </b>").concat(phone, "</p>\n    <p><b>Address: </b>").concat(address, "</p>\n     <h3><b>Education</b></h3>\n     <p><b>Education: </b>").concat(education, "</p>\n     <p><b>field: </b>").concat(field, "</p>\n     <p><b>institution: </b>").concat(institution, "</p>\n     <p><b>year: </b>").concat(year, "</p>\n     <p><b>grade: </b>").concat(grade, "</p>\n     <h3><b>experience</b></h3>\n     <p>").concat(experience, "</p>\n     <h3>skills</h3>\n     <p>").concat(skills, "</p>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('resume display element is missing.');
    }
});
