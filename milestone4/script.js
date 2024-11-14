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
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3><b>personal information</b></h3>\n    <p><b>Name: </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone: </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b>Address: </b><span contenteditable=\"true\">").concat(address, "</span></p>\n\n     <h3><b>Education</b></h3>\n     <p><b>Education: </b><span contenteditable=\"true\">").concat(education, "</span></p>\n     <p><b>field: </b><span contenteditable=\"true\">").concat(field, "</span></p>\n     <p><b>institution: </b><span contenteditable=\"true\">").concat(institution, "</span></p>\n     <p><b>year: </b><span contenteditable=\"true\">").concat(year, "</span></p>\n     <p><b>grade: </b><span contenteditable=\"true\">").concat(grade, "</span></p>\n     <h3><b>experience</b></h3>\n     <p contenteditable=\"true\">").concat(experience, "</p>\n     <h3>skills</h3>\n     <p contenteditable=\"true\">").concat(skills, "</p>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('resume display element is missing.');
    }
});
