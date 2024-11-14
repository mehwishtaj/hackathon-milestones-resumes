const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {

    event.preventDefault();


const name = (document.getElementById('name') as HTMLInputElement).value;
const email = (document.getElementById('email') as HTMLInputElement).value;
const phone = (document.getElementById('phone') as HTMLInputElement).value;
const address = (document.getElementById('address') as HTMLInputElement).value;
const education = (document.getElementById('education') as HTMLInputElement).value;
const field = (document.getElementById('field') as HTMLInputElement).value;
const institution = (document.getElementById('institution') as HTMLInputElement).value;
const year = (document.getElementById('year') as HTMLInputElement).value;
const grade = (document.getElementById('grade') as HTMLInputElement).value;
const experience = (document.getElementById('experience') as HTMLInputElement).value;
const skills = (document.getElementById('skills') as HTMLInputElement).value;


const resumeHTML =`
    <h2><b>Editable Resume</b></h2>
    <h3><b>personal information</b></h3>
    <p><b>Name: </b><span contenteditable="true">${name}</span></p>
    <p><b>Email: </b><span contenteditable="true">${email}</span></p>
    <p><b>Phone: </b><span contenteditable="true">${phone}</span></p>
    <p><b>Address: </b><span contenteditable="true">${address}</span></p>

     <h3><b>Education</b></h3>
     <p><b>Education: </b><span contenteditable="true">${education}</span></p>
     <p><b>field: </b><span contenteditable="true">${field}</span></p>
     <p><b>institution: </b><span contenteditable="true">${institution}</span></p>
     <p><b>year: </b><span contenteditable="true">${year}</span></p>
     <p><b>grade: </b><span contenteditable="true">${grade}</span></p>
     <h3><b>experience</b></h3>
     <p contenteditable="true">${experience}</p>
     <h3>skills</h3>
     <p contenteditable="true">${skills}</p>`;

if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
    } else {
    console.error('resume display element is missing.');
    }
});