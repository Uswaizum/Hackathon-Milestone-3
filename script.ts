// Get references for form & display area
const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

// Handling Form Submission
form?.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  // page reload prevention.

  // Collect user input values
  const name = (document.getElementById('name') as HTMLInputElement |null)?.value;
  const email = (document.getElementById('email') as HTMLInputElement | null)?.value;
  const phone = (document.getElementById('phone') as HTMLInputElement | null)?.value;
  const address = (document.getElementById('address') as HTMLInputElement | null)?.value;
  const DOB = (document.getElementById('dob') as HTMLInputElement | null)?.value;
  const gender = (document.getElementById('gender') as HTMLInputElement | null)?.value;
  const education = (document.getElementById('education') as HTMLInputElement | null)?.value;
  const skills = (document.getElementById('skills') as HTMLInputElement | null)?.value;
  const workexperience = (document.getElementById('work-experience') as HTMLInputElement | null)?.value;

  // Generating the resume content dynamically.
  const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>
    <h3>Address</h3>
    <p>${address}</p>
    <h3>DOB</h3>
    <p>${DOB}</p>
    <h3>Gender</h3>
    <p>${gender}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>skills</h3>
    <p>${skills}</p>
    <h3>workexperience</h3>
    <p>${workexperience}</p>
  `;

  // Displaying the resume in the display area.
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error('Resume display element is missing');
  }
});