// Get references for form & display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handling Form Submission
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    event.preventDefault();
    // page reload prevention.
    // Collect user input values
    var name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value;
    var email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value;
    var phone = (_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value;
    var address = (_d = document.getElementById('address')) === null || _d === void 0 ? void 0 : _d.value;
    var DOB = (_e = document.getElementById('dob')) === null || _e === void 0 ? void 0 : _e.value;
    var gender = (_f = document.getElementById('gender')) === null || _f === void 0 ? void 0 : _f.value;
    var education = (_g = document.getElementById('education')) === null || _g === void 0 ? void 0 : _g.value;
    var skills = (_h = document.getElementById('skills')) === null || _h === void 0 ? void 0 : _h.value;
    var workexperience = (_j = document.getElementById('work-experience')) === null || _j === void 0 ? void 0 : _j.value;
    // Generating the resume content dynamically.
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n    <h3>Address</h3>\n    <p>").concat(address, "</p>\n    <h3>DOB</h3>\n    <p>").concat(DOB, "</p>\n    <h3>Gender</h3>\n    <p>").concat(gender, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>skills</h3>\n    <p>").concat(skills, "</p>\n    <h3>workexperience</h3>\n    <p>").concat(workexperience, "</p>\n  ");
    // Displaying the resume in the display area.
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Resume display element is missing');
    }
});
