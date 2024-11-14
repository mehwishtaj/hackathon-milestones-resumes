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
    <h2><b>Resume</b></h2>
    <h3><b>personal information</b></h3>
    <p><b>Name: </b>${name}</p>
    <p><b>Email: </b>${email}</p>
    <p><b>Phone: </b>${phone}</p>
    <p><b>Address: </b>${address}</p>
     <h3><b>Education</b></h3>
     <p><b>Education: </b>${education}</p>
     <p><b>field: </b>${field}</p>
     <p><b>institution: </b>${institution}</p>
     <p><b>year: </b>${year}</p>
     <p><b>grade: </b>${grade}</p>
     <h3><b>experience</b></h3>
     <p>${experience}</p>
     <h3>skills</h3>
     <p>${skills}</p>`;

if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
}
else {
    console.error('resume display element is missing.');
}
});